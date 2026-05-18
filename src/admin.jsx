import { useState, useEffect, useCallback } from "react";

const API = "http://localhost:5000/api";
const ADMIN_SECRET = "111213141516";

const adminApi = async (endpoint, options = {}) => {
  const token = localStorage.getItem("fb_token");
  const isFormData = options.body instanceof FormData;
  const res = await fetch(`${API}${endpoint}`, {
    ...options,
    headers: {
      ...(!isFormData && { "Content-Type": "application/json" }),
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Error");
  return data;
};

const formatPrice = (n) => `₦${Number(n).toLocaleString()}`;
const formatDate = (d) => new Date(d).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
const shortDate = (d) => new Date(d).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" });

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@700;800&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'DM Sans',sans-serif;background:#F4F6F9;color:#1a1a2e}
  :root{--brand:#D47C2F;--brand-dark:#3B1F0A;--green:#2D6A4F;--red:#C0392B;--sidebar:220px;--shadow:0 2px 12px rgba(0,0,0,0.08);--radius:12px;}
  .admin-layout{display:flex;min-height:100vh}
  .sidebar{width:var(--sidebar);background:var(--brand-dark);color:white;display:flex;flex-direction:column;position:fixed;top:0;left:0;bottom:0;z-index:10}
  .sidebar-logo{padding:1.5rem;border-bottom:1px solid rgba(255,255,255,0.1);font-family:'Playfair Display',serif;font-size:1.3rem;font-weight:800}
  .sidebar-logo span{color:var(--brand)}
  .sidebar-nav{flex:1;padding:1rem 0;overflow-y:auto}
  .sidebar-item{display:flex;align-items:center;gap:12px;padding:12px 1.5rem;cursor:pointer;color:rgba(255,255,255,0.7);font-size:0.9rem;font-weight:500;border:none;background:none;width:100%;text-align:left;transition:all 0.15s;font-family:'DM Sans',sans-serif}
  .sidebar-item:hover{background:rgba(255,255,255,0.08);color:white}
  .sidebar-item.active{background:var(--brand);color:white;border-radius:0 8px 8px 0;margin-right:1rem}
  .sidebar-footer{padding:1rem 1.5rem;border-top:1px solid rgba(255,255,255,0.1)}
  .main{margin-left:var(--sidebar);flex:1;display:flex;flex-direction:column;min-height:100vh}
  .topbar{background:white;padding:1rem 2rem;display:flex;justify-content:space-between;align-items:center;box-shadow:var(--shadow);position:sticky;top:0;z-index:9}
  .topbar-title{font-family:'Playfair Display',serif;font-size:1.4rem;font-weight:800;color:var(--brand-dark)}
  .topbar-user{display:flex;align-items:center;gap:10px;font-size:0.9rem;font-weight:600}
  .content{padding:2rem;flex:1}
  .stats-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1.25rem;margin-bottom:2rem}
  .stat-card{background:white;border-radius:var(--radius);padding:1.5rem;box-shadow:var(--shadow)}
  .stat-num{font-family:'Playfair Display',serif;font-size:2rem;font-weight:800;color:var(--brand-dark)}
  .stat-label{color:#64748b;font-size:0.85rem;margin-top:4px}
  .card{background:white;border-radius:var(--radius);padding:1.5rem;box-shadow:var(--shadow);margin-bottom:1.5rem}
  .card-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;flex-wrap:wrap;gap:10px}
  .card-title{font-family:'Playfair Display',serif;font-size:1.2rem;font-weight:800;color:var(--brand-dark)}
  table{width:100%;border-collapse:collapse;font-size:0.9rem}
  th{text-align:left;padding:10px 12px;background:#f8fafc;color:#64748b;font-weight:600;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e2e8f0}
  td{padding:12px;border-bottom:1px solid #f1f5f9;vertical-align:middle}
  tr:hover td{background:#fafafa}
  .badge{display:inline-flex;align-items:center;padding:3px 10px;border-radius:50px;font-size:0.75rem;font-weight:700;text-transform:uppercase}
  .badge-pending{background:#FFF3CD;color:#856404}
  .badge-confirmed{background:#D1ECF1;color:#0C5460}
  .badge-preparing{background:#FFE5B4;color:#7B5800}
  .badge-ready{background:#D4EDDA;color:#155724}
  .badge-delivered{background:#E8F5E9;color:#1B5E20}
  .badge-cancelled{background:#F8D7DA;color:#721C24}
  .badge-paid{background:#D4EDDA;color:#155724}
  .badge-unpaid{background:#FFF3CD;color:#856404}
  .badge-refunded{background:#F8D7DA;color:#721C24}
  .btn{border:none;border-radius:8px;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600;padding:8px 16px;font-size:0.85rem;transition:all 0.2s;display:inline-flex;align-items:center;gap:6px}
  .btn-primary{background:var(--brand);color:white}
  .btn-primary:hover{background:var(--brand-dark)}
  .btn-danger{background:var(--red);color:white}
  .btn-ghost{background:#f1f5f9;color:#1a1a2e}
  .btn-ghost:hover{background:#e2e8f0}
  .btn:disabled{opacity:0.5;cursor:not-allowed}
  .form-group{margin-bottom:1rem}
  .form-label{display:block;font-size:0.85rem;font-weight:600;color:#1a1a2e;margin-bottom:6px}
  .form-input{width:100%;padding:10px 14px;border:1.5px solid #e2e8f0;border-radius:8px;font-family:'DM Sans',sans-serif;font-size:0.9rem;color:#1a1a2e;background:white;outline:none;transition:border-color 0.2s}
  .form-input:focus{border-color:var(--brand)}
  .form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
  .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:99999;display:flex;align-items:center;justify-content:center;padding:1rem}
  .modal-box{background:white;border-radius:16px;width:min(580px,95vw);max-height:88vh;overflow-y:auto;box-shadow:0 24px 64px rgba(0,0,0,0.35);position:relative}
  .modal-hdr{padding:1.5rem 1.5rem 0;display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem}
  .modal-ttl{font-family:'Playfair Display',serif;font-size:1.4rem;font-weight:800;color:#1a1a2e}
  .modal-bdy{padding:0 1.5rem 1.5rem}
  .modal-cls{background:#f1f5f9;border:none;border-radius:50%;width:34px;height:34px;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#1a1a2e;font-weight:700;line-height:1}
  .modal-cls:hover{background:#e2e8f0}
  .toast-wrap{position:fixed;bottom:1.5rem;right:1.5rem;z-index:999999;background:#1a1a2e;color:white;padding:12px 18px;border-radius:8px;font-size:0.9rem;font-weight:600;box-shadow:0 8px 24px rgba(0,0,0,0.25);max-width:320px}
  .toast-ok{background:#2D6A4F}
  .toast-err{background:#C0392B}
  .empty{text-align:center;padding:3rem;color:#64748b}
  .empty-icon{font-size:3rem;margin-bottom:1rem}
  .avatar{width:32px;height:32px;border-radius:50%;background:var(--brand);color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.8rem;flex-shrink:0}
  .food-thumb{width:48px;height:48px;border-radius:8px;overflow:hidden;background:#f1f5f9;display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0}
  .food-thumb img{width:100%;height:100%;object-fit:cover}
  .stars{color:#F4A716}
  .toggle{position:relative;display:inline-block;width:44px;height:24px;vertical-align:middle}
  .toggle input{opacity:0;width:0;height:0;position:absolute}
  .toggle-slider{position:absolute;cursor:pointer;inset:0;background:#e2e8f0;border-radius:24px;transition:0.3s}
  .toggle-slider:before{content:'';position:absolute;height:18px;width:18px;left:3px;bottom:3px;background:white;border-radius:50%;transition:0.3s}
  input:checked+.toggle-slider{background:#2D6A4F}
  input:checked+.toggle-slider:before{transform:translateX(20px)}
  select.form-input{cursor:pointer}
  @keyframes popIn{from{opacity:0;transform:scale(0.94)}to{opacity:1;transform:scale(1)}}
  .modal-box{animation:popIn 0.18s ease;filter:none !important;backdrop-filter:none !important;background:white !important}
  .modal-overlay{filter:none !important}
  .modal-overlay .modal-box *{filter:none !important}
`;

// ─── TOAST HOOK ───────────────────────────────────────────────────────────────
const useToast = () => {
  const [toast, setToast] = useState(null);
  const show = useCallback((msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  }, []);
  const Toast = () => toast ? (
    <div className={`toast-wrap ${toast.type === "success" ? "toast-ok" : "toast-err"}`}>
      {toast.type === "success" ? "✓ " : "⚠ "}{toast.msg}
    </div>
  ) : null;
  return { show, Toast };
};

// ─── MODAL ────────────────────────────────────────────────────────────────────
const Modal = ({ title, onClose, children }) => (
  <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
    <div className="modal-box">
      <div className="modal-hdr">
        <div className="modal-ttl">{title}</div>
        <button className="modal-cls" onClick={onClose}>✕</button>
      </div>
      <div className="modal-bdy">{children}</div>
    </div>
  </div>
);

// ─── ADMIN LOGIN / REGISTER ───────────────────────────────────────────────────
const AdminLogin = ({ onLogin }) => {
  const [tab, setTab] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "", secret: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const set = (k) => (e) => setForm(p => ({ ...p, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setError("");
    if (tab === "register" && form.secret !== ADMIN_SECRET) {
      setError("Invalid staff secret code. Contact the restaurant owner.");
      setLoading(false); return;
    }
    try {
      let data;
      if (tab === "login") {
        data = await adminApi("/auth/login", { method: "POST", body: JSON.stringify({ email: form.email, password: form.password }) });
        if (data.user.role !== "admin") throw new Error("Access denied. Admin accounts only.");
      } else {
        const fd = new FormData();
        fd.append("name", form.name); fd.append("email", form.email);
        fd.append("password", form.password); fd.append("role", "admin");
        data = await adminApi("/auth/register", { method: "POST", body: fd });
      }
      localStorage.setItem("fb_token", data.token);
      localStorage.setItem("fb_user", JSON.stringify(data.user));
      onLogin(data.user);
    } catch (err) { setError(err.message); }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#3B1F0A" }}>
      <style>{STYLES}</style>
      <div style={{ background: "white", borderRadius: 20, padding: "2.5rem", width: "min(440px,90vw)", boxShadow: "0 20px 60px rgba(0,0,0,0.3)", fontFamily: "'DM Sans',sans-serif" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🍔</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", fontWeight: 800, color: "#3B1F0A" }}>Admin Portal</h2>
          <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Food Bite Restaurant</p>
        </div>
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
          {["login", "register"].map(t => (
            <button key={t} onClick={() => { setTab(t); setError(""); }}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1rem", fontWeight: 700, color: tab === t ? "#3B1F0A" : "#999", borderBottom: tab === t ? "2px solid #D47C2F" : "2px solid transparent", paddingBottom: 6, fontFamily: "'DM Sans',sans-serif" }}>
              {t === "login" ? "Sign In" : "Create Admin Account"}
            </button>
          ))}
        </div>
        {error && <div style={{ background: "#FFF3F3", border: "1px solid #FFCDD2", color: "#C0392B", padding: "10px 14px", borderRadius: 8, fontSize: "0.9rem", marginBottom: "1rem" }}>⚠ {error}</div>}
        <form onSubmit={submit}>
          {tab === "register" && (
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input className="form-input" value={form.name} onChange={set("name")} placeholder="e.g. Amaka Johnson" required />
            </div>
          )}
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input className="form-input" type="email" value={form.email} onChange={set("email")} placeholder="admin@foodbite.ng" required />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-input" type="password" value={form.password} onChange={set("password")} placeholder="••••••••" required />
          </div>
          {tab === "register" && (
            <div className="form-group">
              <label className="form-label">Staff Secret Code</label>
              <input className="form-input" type="password" value={form.secret} onChange={set("secret")} placeholder="Enter staff secret code" required />
              <p style={{ fontSize: "0.78rem", color: "#64748b", marginTop: 4 }}>Provided by the restaurant owner to verify staff.</p>
            </div>
          )}
          <button className="btn btn-primary" type="submit" disabled={loading}
            style={{ width: "100%", justifyContent: "center", padding: "12px", marginTop: "0.5rem", fontSize: "1rem", borderRadius: 8 }}>
            {loading ? "Please wait..." : tab === "login" ? "Sign In to Admin" : "Create Admin Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
const Dashboard = () => {
  const [stats, setStats] = useState({ foods: 0, orders: 0, reservations: 0, unread: 0 });

  useEffect(() => {
    let mounted = true;
    adminApi("/foods?limit=1").then(f =>
      adminApi("/orders?limit=1").then(o =>
        adminApi("/reservations?limit=1").then(r =>
          adminApi("/contact?limit=1").then(c => {
            if (mounted) setStats({ foods: f.total||0, orders: o.total||0, reservations: r.total||0, unread: c.unread||0 });
          })
        )
      )
    ).catch(console.error);
    return () => { mounted = false; };
  }, []);

  return (
    <div>
      <div className="stats-grid">
        {[{ icon: "🍽", num: stats.foods, label: "Menu Items" }, { icon: "📦", num: stats.orders, label: "Total Orders" }, { icon: "📅", num: stats.reservations, label: "Reservations" }, { icon: "✉", num: stats.unread, label: "Unread Messages" }].map(s => (
          <div className="stat-card" key={s.label}>
            <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{s.icon}</div>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="card">
        <div className="card-header"><div className="card-title">Welcome to Food Bite Admin 👋</div></div>
        <p style={{ color: "#64748b", lineHeight: 1.7 }}>Use the sidebar to manage your menu, orders, reservations, reviews and messages. All changes reflect live on your website instantly.</p>
      </div>
    </div>
  );
};

// ─── FOODS TAB ────────────────────────────────────────────────────────────────
const FoodsTab = ({ show }) => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", description: "", price: "", category: "lunch", ingredients: "", prepTime: "" });
  const [image, setImage] = useState(null);
  const [saving, setSaving] = useState(false);
  const CATS = ["breakfast", "lunch", "dinner", "drinks", "desserts", "snacks", "sides"];
  const set = (k) => (e) => setForm(p => ({ ...p, [k]: e.target.value }));

  const load = () => {
    setLoading(true);
    adminApi("/foods?limit=100")
      .then(d => setFoods(d.foods || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []); // eslint-disable-line

  const openAdd = () => {
    setEditing(null);
    setForm({ name: "", description: "", price: "", category: "lunch", ingredients: "", prepTime: "" });
    setImage(null); setModal(true);
  };

  const openEdit = (f) => {
    setEditing(f);
    setForm({ name: f.name, description: f.description, price: f.price, category: f.category, ingredients: f.ingredients?.join(", ") || "", prepTime: f.prepTime });
    setImage(null); setModal(true);
  };

  const save = async (e) => {
    e.preventDefault(); setSaving(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (image) fd.append("image", image);
      const token = localStorage.getItem("fb_token");
      const url = editing ? `${API}/foods/${editing._id}` : `${API}/foods`;
      const res = await fetch(url, { method: editing ? "PUT" : "POST", headers: { Authorization: `Bearer ${token}` }, body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      show(editing ? "Food updated!" : "Food added!", "success");
      setModal(false); load();
    } catch (err) { show(err.message, "error"); }
    setSaving(false);
  };

  const toggleAvail = async (id) => {
    try { await adminApi(`/foods/${id}/availability`, { method: "PATCH" }); load(); show("Availability updated!", "success"); } catch (err) { show(err.message, "error"); }
  };

  const del = async (id, name) => {
    if (!window.confirm(`Delete "${name}"?`)) return;
    try { await adminApi(`/foods/${id}`, { method: "DELETE" }); show("Food deleted", "success"); load(); } catch (err) { show(err.message, "error"); }
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="card-title">Menu Items ({foods.length})</div>
          <button className="btn btn-primary" onClick={openAdd}>+ Add New Food</button>
        </div>
        {loading ? <div className="empty"><div className="empty-icon">⏳</div><p>Loading...</p></div>
          : foods.length === 0 ? <div className="empty"><div className="empty-icon">🍽</div><p>No food items yet. Add your first dish!</p></div>
          : (
            <div style={{ overflowX: "auto" }}>
              <table>
                <thead><tr><th>Item</th><th>Category</th><th>Price</th><th>Rating</th><th>Availability</th><th>Actions</th></tr></thead>
                <tbody>
                  {foods.map(f => (
                    <tr key={f._id}>
                      <td>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <div className="food-thumb">{f.image?.url ? <img src={f.image.url} alt={f.name} /> : "🍽"}</div>
                          <div>
                            <div style={{ fontWeight: 600 }}>{f.name}</div>
                            <div style={{ color: "#64748b", fontSize: "0.8rem" }}>{f.description?.slice(0, 45)}...</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ textTransform: "capitalize" }}>{f.category}</td>
                      <td style={{ fontWeight: 700 }}>{formatPrice(f.price)}</td>
                      <td className="stars">{f.averageRating > 0 ? `★ ${f.averageRating}` : "—"}</td>
                      <td>
                        <label className="toggle">
                          <input type="checkbox" checked={f.isAvailable} onChange={() => toggleAvail(f._id)} />
                          <span className="toggle-slider" />
                        </label>
                        <span style={{ marginLeft: 8, fontSize: "0.8rem", color: f.isAvailable ? "#2D6A4F" : "#C0392B", fontWeight: 600 }}>
                          {f.isAvailable ? "Available" : "Out of Stock"}
                        </span>
                      </td>
                      <td>
                        <div style={{ display: "flex", gap: 6 }}>
                          <button className="btn btn-ghost" onClick={() => openEdit(f)}>✏ Edit</button>
                          <button className="btn btn-danger" onClick={() => del(f._id, f.name)}>🗑</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
      </div>

      {modal && (
        <Modal title={editing ? "Edit Food Item" : "Add New Food Item"} onClose={() => setModal(false)}>
          <form onSubmit={save}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Name *</label>
                <input className="form-input" value={form.name} onChange={set("name")} placeholder="e.g. Jollof Rice" required />
              </div>
              <div className="form-group">
                <label className="form-label">Category *</label>
                <select className="form-input" value={form.category} onChange={set("category")}>
                  {CATS.map(c => <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Description *</label>
              <textarea className="form-input" rows={3} value={form.description} onChange={set("description")} placeholder="Describe this dish..." required style={{ resize: "vertical" }} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Price (₦) *</label>
                <input className="form-input" type="number" value={form.price} onChange={set("price")} placeholder="2500" required />
              </div>
              <div className="form-group">
                <label className="form-label">Prep Time (mins) *</label>
                <input className="form-input" type="number" value={form.prepTime} onChange={set("prepTime")} placeholder="30" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Ingredients (comma-separated)</label>
              <input className="form-input" value={form.ingredients} onChange={set("ingredients")} placeholder="rice, tomato, pepper, onion" />
            </div>
            <div className="form-group">
              <label className="form-label">{editing ? "Replace Image (optional)" : "Food Image"}</label>
              <input className="form-input" type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} style={{ padding: "8px 14px" }} />
              {editing?.image?.url && <img src={editing.image.url} alt="" style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 8, marginTop: 8 }} />}
            </div>
            <button className="btn btn-primary" type="submit" disabled={saving} style={{ width: "100%", justifyContent: "center", padding: "12px" }}>
              {saving ? "Saving..." : editing ? "Update Food" : "Add Food"}
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};

// ─── ORDERS TAB ───────────────────────────────────────────────────────────────
const OrdersTab = ({ show }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const STATUSES = ["pending", "confirmed", "preparing", "ready", "delivered", "cancelled"];

  const load = () => {
    const q = filter ? `?status=${filter}&limit=50` : "?limit=50";
    setLoading(true);
    adminApi(`/orders${q}`)
      .then(d => setOrders(d.orders || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, [filter]); // eslint-disable-line

  const updateStatus = async (id, status) => {
    try { await adminApi(`/orders/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) }); show("Status updated!", "success"); load(); } catch (err) { show(err.message, "error"); }
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Orders</div>
        <select className="form-input" style={{ width: "auto" }} value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="">All Statuses</option>
          {STATUSES.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
        </select>
      </div>
      {loading ? <div className="empty"><div className="empty-icon">⏳</div><p>Loading...</p></div>
        : orders.length === 0 ? <div className="empty"><div className="empty-icon">📦</div><p>No orders found</p></div>
        : (
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead><tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Total</th><th>Payment</th><th>Status</th><th>Update</th><th>Date</th></tr></thead>
              <tbody>
                {orders.map(o => (
                  <tr key={o._id}>
                    <td style={{ fontWeight: 700, fontFamily: "monospace" }}>#{o._id.slice(-8).toUpperCase()}</td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div className="avatar">{o.customer?.name?.charAt(0) || "?"}</div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{o.customer?.name || "—"}</div>
                          <div style={{ color: "#64748b", fontSize: "0.8rem" }}>{o.customer?.email}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ color: "#64748b" }}>{o.items?.length} item(s)</td>
                    <td style={{ fontWeight: 700 }}>{formatPrice(o.totalAmount)}</td>
                    <td><span className={`badge badge-${o.paymentStatus}`}>{o.paymentStatus}</span></td>
                    <td><span className={`badge badge-${o.status}`}>{o.status}</span></td>
                    <td>
                      <select className="form-input" style={{ width: "auto", fontSize: "0.8rem", padding: "6px 10px" }} value={o.status} onChange={e => updateStatus(o._id, e.target.value)}>
                        {STATUSES.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
                      </select>
                    </td>
                    <td style={{ fontSize: "0.8rem", color: "#64748b" }}>{shortDate(o.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
    </div>
  );
};

// ─── RESERVATIONS TAB ─────────────────────────────────────────────────────────
const ReservationsTab = ({ show }) => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const STATUSES = ["pending", "confirmed", "cancelled", "completed"];

  const load = () => {
    setLoading(true);
    adminApi("/reservations?limit=50")
      .then(d => setReservations(d.reservations || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []); // eslint-disable-line

  const updateStatus = async (id, status) => {
    try { await adminApi(`/reservations/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) }); show("Status updated!", "success"); load(); } catch (err) { show(err.message, "error"); }
  };

  return (
    <div className="card">
      <div className="card-header"><div className="card-title">Reservations</div></div>
      {loading ? <div className="empty"><div className="empty-icon">⏳</div><p>Loading...</p></div>
        : reservations.length === 0 ? <div className="empty"><div className="empty-icon">📅</div><p>No reservations yet</p></div>
        : (
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead><tr><th>Customer</th><th>Date</th><th>Time</th><th>Guests</th><th>Status</th><th>Update</th></tr></thead>
              <tbody>
                {reservations.map(r => (
                  <tr key={r._id}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{r.customer?.name || "—"}</div>
                      <div style={{ color: "#64748b", fontSize: "0.8rem" }}>{r.customer?.email}</div>
                    </td>
                    <td>{shortDate(r.date)}</td>
                    <td>{r.time}</td>
                    <td>{r.guests}</td>
                    <td><span className={`badge badge-${r.status}`}>{r.status}</span></td>
                    <td>
                      <select className="form-input" style={{ width: "auto", fontSize: "0.8rem", padding: "6px 10px" }} value={r.status} onChange={e => updateStatus(r._id, e.target.value)}>
                        {STATUSES.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
    </div>
  );
};

// ─── REVIEWS TAB ──────────────────────────────────────────────────────────────
const ReviewsTab = ({ show }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [replyModal, setReplyModal] = useState(null);
  const [replyMsg, setReplyMsg] = useState("");
  const [replying, setReplying] = useState(false);

  const load = () => {
    setLoading(true);
    adminApi("/reviews/restaurant")
      .then(d => setReviews(d.reviews || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []); // eslint-disable-line

  const openReply = (r) => { setReplyModal(r); setReplyMsg(r.reply?.message || ""); };

  const submitReply = async () => {
    if (!replyMsg.trim()) { show("Please write a reply", "error"); return; }
    setReplying(true);
    try {
      await adminApi(`/reviews/${replyModal._id}/reply`, { method: "PATCH", body: JSON.stringify({ message: replyMsg }) });
      show("Reply sent!", "success");
      setReplyModal(null); setReplyMsg(""); load();
    } catch (err) { show(err.message, "error"); }
    setReplying(false);
  };

  const del = async (id) => {
    if (!window.confirm("Delete this review?")) return;
    try { await adminApi(`/reviews/${id}`, { method: "DELETE" }); show("Deleted", "success"); load(); } catch (err) { show(err.message, "error"); }
  };

  const stars = (n) => "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));

  return (
    <>
      <div className="card">
        <div className="card-header"><div className="card-title">Restaurant Reviews ({reviews.length})</div></div>
        {loading ? <div className="empty"><div className="empty-icon">⏳</div><p>Loading...</p></div>
          : reviews.length === 0 ? <div className="empty"><div className="empty-icon">⭐</div><p>No reviews yet</p></div>
          : reviews.map(r => (
            <div key={r._id} style={{ padding: "1.25rem 0", borderBottom: "1px solid #f1f5f9" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", flexWrap: "wrap", gap: 10 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div className="avatar">{r.customer?.name?.charAt(0) || "?"}</div>
                  <div>
                    <div style={{ fontWeight: 700 }}>{r.customer?.name || "Anonymous"}</div>
                    <div style={{ color: "#64748b", fontSize: "0.8rem" }}>{shortDate(r.createdAt)}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span className="stars">{stars(r.rating)}</span>
                  <button className="btn btn-ghost" onClick={() => openReply(r)}>💬 {r.reply?.message ? "Edit Reply" : "Reply"}</button>
                  <button className="btn btn-danger" onClick={() => del(r._id)}>🗑</button>
                </div>
              </div>
              {r.title && <div style={{ fontWeight: 700, marginTop: "0.75rem" }}>{r.title}</div>}
              <p style={{ color: "#555", fontSize: "0.9rem", marginTop: "0.5rem", lineHeight: 1.6 }}>{r.comment}</p>
              {r.reply?.message && (
                <div style={{ background: "#f8fafc", borderRadius: 8, padding: "10px 14px", marginTop: 10, borderLeft: "3px solid #D47C2F", fontSize: "0.85rem" }}>
                  <strong>Your reply:</strong> {r.reply.message}
                </div>
              )}
            </div>
          ))}
      </div>

      {replyModal && (
        <Modal title="Reply to Review" onClose={() => setReplyModal(null)}>
          <div style={{ background: "#f8fafc", borderRadius: 8, padding: "1rem", marginBottom: "1.25rem", fontSize: "0.9rem", lineHeight: 1.6, color: "#333" }}>
            <strong style={{ display: "block", marginBottom: 4, color: "#1a1a2e" }}>{replyModal.customer?.name} wrote:</strong>
            {replyModal.comment}
          </div>
          <div className="form-group">
            <label className="form-label">Your Reply</label>
            <textarea className="form-input" rows={5} value={replyMsg} onChange={e => setReplyMsg(e.target.value)} placeholder="Write a thoughtful reply..." style={{ resize: "vertical" }} />
          </div>
          <button className="btn btn-primary" onClick={submitReply} disabled={replying} style={{ width: "100%", justifyContent: "center", padding: "12px" }}>
            {replying ? "Sending..." : "Send Reply"}
          </button>
        </Modal>
      )}
    </>
  );
};

// ─── MESSAGES TAB ─────────────────────────────────────────────────────────────
const MessagesTab = ({ show }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  const load = () => {
    setLoading(true);
    adminApi("/contact?limit=50")
      .then(d => setMessages(d.messages || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []); // eslint-disable-line

  const markRead = async (id) => {
    try { await adminApi(`/contact/${id}/read`, { method: "PATCH" }); load(); } catch (err) { console.error(err); }
  };

  const del = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    try { await adminApi(`/contact/${id}`, { method: "DELETE" }); show("Deleted", "success"); setSelected(null); load(); } catch (err) { show(err.message, "error"); }
  };

  const open = (msg) => { setSelected(msg); if (!msg.isRead) markRead(msg._id); };

  return (
    <div style={{ display: "grid", gridTemplateColumns: selected ? "1fr 1fr" : "1fr", gap: "1.5rem" }}>
      <div className="card">
        <div className="card-header"><div className="card-title">Contact Messages ({messages.length})</div></div>
        {loading ? <div className="empty"><div className="empty-icon">⏳</div><p>Loading...</p></div>
          : messages.length === 0 ? <div className="empty"><div className="empty-icon">✉</div><p>No messages yet</p></div>
          : messages.map(m => (
            <div key={m._id} onClick={() => open(m)}
              style={{ padding: "1rem", borderBottom: "1px solid #f1f5f9", cursor: "pointer", background: selected?._id === m._id ? "#fdf6ec" : "white", borderRadius: 8, marginBottom: 4 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <div>
                  <div style={{ fontWeight: m.isRead ? 500 : 800, display: "flex", alignItems: "center", gap: 8 }}>
                    {!m.isRead && <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#D47C2F", display: "inline-block" }} />}
                    {m.name}
                  </div>
                  <div style={{ color: "#64748b", fontSize: "0.8rem" }}>{m.email}</div>
                  <div style={{ color: "#555", fontSize: "0.85rem", marginTop: 4 }}>{m.message?.slice(0, 70)}...</div>
                </div>
                <div style={{ color: "#64748b", fontSize: "0.75rem", flexShrink: 0, marginLeft: 8 }}>{shortDate(m.createdAt)}</div>
              </div>
            </div>
          ))}
      </div>

      {selected && (
        <div className="card">
          <div className="card-header">
            <div className="card-title">Message Detail</div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn btn-danger" onClick={() => del(selected._id)}>🗑</button>
              <button className="btn btn-ghost" onClick={() => setSelected(null)}>✕</button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.25rem" }}>
            {[["Name", selected.name], ["Email", selected.email], ["Phone", selected.phone || "—"], ["Date", formatDate(selected.createdAt)]].map(([l, v]) => (
              <div key={l} style={{ background: "#f8fafc", borderRadius: 8, padding: "10px 14px" }}>
                <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600, marginBottom: 4 }}>{l}</div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", wordBreak: "break-all" }}>{v}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "#f8fafc", borderRadius: 8, padding: "1rem", marginBottom: "1rem" }}>
            <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600, marginBottom: 8 }}>MESSAGE</div>
            <p style={{ lineHeight: 1.7, color: "#333" }}>{selected.message}</p>
          </div>
          <a href={`mailto:${selected.email}?subject=Re: Your message to Food Bite`} className="btn btn-primary"
            style={{ textDecoration: "none", justifyContent: "center", width: "100%", padding: "12px", display: "flex" }}>
            ✉ Reply via Email
          </a>
        </div>
      )}
    </div>
  );
};

// ─── MAIN ADMIN APP ───────────────────────────────────────────────────────────
export default function Admin() {
  const [user, setUser] = useState(() => {
    try {
      const u = localStorage.getItem("fb_user");
      const parsed = u ? JSON.parse(u) : null;
      return parsed?.role === "admin" ? parsed : null;
    } catch { return null; }
  });
  const [tab, setTab] = useState("dashboard");
  const { show, Toast } = useToast();

  const logout = () => {
    localStorage.removeItem("fb_token");
    localStorage.removeItem("fb_user");
    setUser(null);
  };

  if (!user) return <AdminLogin onLogin={setUser} />;

  // Inject a global style to kill any blur from App.css on the admin page
  const killBlur = `
    body { filter: none !important; backdrop-filter: none !important; }
    .modal-overlay, .modal-box { filter: none !important; backdrop-filter: none !important; }
  `;

  const NAV = [
    { key: "dashboard", icon: "📊", label: "Dashboard" },
    { key: "foods", icon: "🍽", label: "Menu Items" },
    { key: "orders", icon: "📦", label: "Orders" },
    { key: "reservations", icon: "📅", label: "Reservations" },
    { key: "reviews", icon: "⭐", label: "Reviews" },
    { key: "messages", icon: "✉", label: "Messages" },
  ];

  const TITLES = { dashboard: "Dashboard", foods: "Menu Management", orders: "Orders", reservations: "Reservations", reviews: "Customer Reviews", messages: "Contact Messages" };

  return (
    <>
      <style>{STYLES}</style>
      <style>{killBlur}</style>
      <Toast />
      <div className="admin-layout">
        <aside className="sidebar">
          <div className="sidebar-logo">🍔 Food<span>Bite</span></div>
          <nav className="sidebar-nav">
            {NAV.map(n => (
              <button key={n.key} className={`sidebar-item ${tab === n.key ? "active" : ""}`} onClick={() => setTab(n.key)}>
                <span>{n.icon}</span><span>{n.label}</span>
              </button>
            ))}
          </nav>
          <div className="sidebar-footer">
            <button className="sidebar-item" onClick={logout} style={{ color: "rgba(255,255,255,0.5)" }}>
              <span>🚪</span><span>Sign Out</span>
            </button>
          </div>
        </aside>
        <div className="main">
          <div className="topbar">
            <div className="topbar-title">{TITLES[tab]}</div>
            <div className="topbar-user">
              <div className="avatar" style={{ background: "#D47C2F" }}>{user.name?.charAt(0)}</div>
              <span>{user.name}</span>
            </div>
          </div>
          <div className="content">
            {tab === "dashboard" && <Dashboard />}
            {tab === "foods" && <FoodsTab show={show} />}
            {tab === "orders" && <OrdersTab show={show} />}
            {tab === "reservations" && <ReservationsTab show={show} />}
            {tab === "reviews" && <ReviewsTab show={show} />}
            {tab === "messages" && <MessagesTab show={show} />}
          </div>
        </div>
      </div>
    </>
  );
}