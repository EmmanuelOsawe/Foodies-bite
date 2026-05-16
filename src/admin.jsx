import { useState, useEffect } from "react";

const API = "http://localhost:5000/api";

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
  :root{
    --brand:#D47C2F;--brand-dark:#3B1F0A;--green:#2D6A4F;--red:#C0392B;
    --sidebar:220px;--white:#fff;--gray:#64748b;--light:#F4F6F9;
    --shadow:0 2px 12px rgba(0,0,0,0.08);--radius:12px;
  }
  .admin-layout{display:flex;min-height:100vh}
  .sidebar{width:var(--sidebar);background:var(--brand-dark);color:white;display:flex;flex-direction:column;position:fixed;top:0;left:0;bottom:0;z-index:100}
  .sidebar-logo{padding:1.5rem;border-bottom:1px solid rgba(255,255,255,0.1);font-family:'Playfair Display',serif;font-size:1.3rem;font-weight:800}
  .sidebar-logo span{color:var(--brand)}
  .sidebar-nav{flex:1;padding:1rem 0;overflow-y:auto}
  .sidebar-item{display:flex;align-items:center;gap:12px;padding:12px 1.5rem;cursor:pointer;color:rgba(255,255,255,0.7);font-size:0.9rem;font-weight:500;border:none;background:none;width:100%;text-align:left;transition:all 0.15s;font-family:'DM Sans',sans-serif}
  .sidebar-item:hover{background:rgba(255,255,255,0.08);color:white}
  .sidebar-item.active{background:var(--brand);color:white;border-radius:0 8px 8px 0;margin-right:1rem}
  .sidebar-item .icon{font-size:1.1rem;width:20px;text-align:center}
  .sidebar-footer{padding:1rem 1.5rem;border-top:1px solid rgba(255,255,255,0.1)}
  .main{margin-left:var(--sidebar);flex:1;display:flex;flex-direction:column;min-height:100vh}
  .topbar{background:white;padding:1rem 2rem;display:flex;justify-content:space-between;align-items:center;box-shadow:var(--shadow);position:sticky;top:0;z-index:50}
  .topbar-title{font-family:'Playfair Display',serif;font-size:1.4rem;font-weight:800;color:var(--brand-dark)}
  .topbar-user{display:flex;align-items:center;gap:10px;font-size:0.9rem;font-weight:600}
  .content{padding:2rem;flex:1}
  .stats-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1.25rem;margin-bottom:2rem}
  .stat-card{background:white;border-radius:var(--radius);padding:1.5rem;box-shadow:var(--shadow)}
  .stat-icon{font-size:2rem;margin-bottom:0.75rem}
  .stat-num{font-family:'Playfair Display',serif;font-size:2rem;font-weight:800;color:var(--brand-dark)}
  .stat-label{color:var(--gray);font-size:0.85rem;margin-top:4px}
  .card{background:white;border-radius:var(--radius);padding:1.5rem;box-shadow:var(--shadow);margin-bottom:1.5rem}
  .card-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;flex-wrap:wrap;gap:10px}
  .card-title{font-family:'Playfair Display',serif;font-size:1.2rem;font-weight:800;color:var(--brand-dark)}
  table{width:100%;border-collapse:collapse;font-size:0.9rem}
  th{text-align:left;padding:10px 12px;background:#f8fafc;color:var(--gray);font-weight:600;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e2e8f0}
  td{padding:12px;border-bottom:1px solid #f1f5f9;vertical-align:middle}
  tr:hover td{background:#fafafa}
  .badge{display:inline-flex;align-items:center;padding:3px 10px;border-radius:50px;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px}
  .badge-pending{background:#FFF3CD;color:#856404}
  .badge-confirmed{background:#D1ECF1;color:#0C5460}
  .badge-preparing{background:#FFE5B4;color:#7B5800}
  .badge-ready{background:#D4EDDA;color:#155724}
  .badge-delivered{background:#E8F5E9;color:#1B5E20}
  .badge-cancelled{background:#F8D7DA;color:#721C24}
  .badge-paid{background:#D4EDDA;color:#155724}
  .badge-unpaid{background:#FFF3CD;color:#856404}
  .badge-refunded{background:#F8D7DA;color:#721C24}
  .badge-available{background:#D4EDDA;color:#155724}
  .badge-out{background:#F8D7DA;color:#721C24}
  .btn{border:none;border-radius:8px;cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:600;padding:8px 16px;font-size:0.85rem;transition:all 0.2s;display:inline-flex;align-items:center;gap:6px}
  .btn-primary{background:var(--brand);color:white}
  .btn-primary:hover{background:var(--brand-dark)}
  .btn-danger{background:var(--red);color:white}
  .btn-danger:hover{opacity:0.85}
  .btn-green{background:var(--green);color:white}
  .btn-green:hover{opacity:0.85}
  .btn-ghost{background:#f1f5f9;color:var(--brand-dark)}
  .btn-ghost:hover{background:#e2e8f0}
  .btn:disabled{opacity:0.5;cursor:not-allowed}
  .form-group{margin-bottom:1rem}
  .form-label{display:block;font-size:0.85rem;font-weight:600;color:var(--brand-dark);margin-bottom:6px}
  .form-input{width:100%;padding:10px 14px;border:1.5px solid #e2e8f0;border-radius:8px;font-family:'DM Sans',sans-serif;font-size:0.9rem;color:#1a1a2e;background:white;outline:none;transition:border-color 0.2s}
  .form-input:focus{border-color:var(--brand)}
  .form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
  .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:200;display:flex;align-items:center;justify-content:center;padding:1rem;backdrop-filter:blur(4px)}
  .modal{background:white;border-radius:16px;width:min(540px,100%);max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,0.2)}
  .modal-header{padding:1.5rem 1.5rem 0;display:flex;justify-content:space-between;align-items:center}
  .modal-title{font-family:'Playfair Display',serif;font-size:1.4rem;font-weight:800}
  .modal-body{padding:1.25rem 1.5rem 1.5rem}
  .modal-close{background:#f1f5f9;border:none;border-radius:50%;width:32px;height:32px;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center}
  .toast{position:fixed;bottom:1.5rem;right:1.5rem;z-index:999;background:#1a1a2e;color:white;padding:12px 18px;border-radius:8px;font-size:0.9rem;font-weight:600;box-shadow:0 8px 24px rgba(0,0,0,0.2);max-width:320px;animation:slideIn 0.3s ease}
  .toast.success{background:var(--green)}
  .toast.error{background:var(--red)}
  @keyframes slideIn{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
  .empty{text-align:center;padding:3rem;color:var(--gray)}
  .empty-icon{font-size:3rem;margin-bottom:1rem}
  .search-input{padding:8px 14px;border:1.5px solid #e2e8f0;border-radius:8px;font-family:'DM Sans',sans-serif;font-size:0.9rem;outline:none;width:240px}
  .search-input:focus{border-color:var(--brand)}
  .avatar{width:32px;height:32px;border-radius:50%;background:var(--brand);color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.8rem;flex-shrink:0;overflow:hidden}
  .avatar img{width:100%;height:100%;object-fit:cover}
  .food-img{width:48px;height:48px;border-radius:8px;object-fit:cover;background:#f1f5f9;display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0;overflow:hidden}
  .food-img img{width:100%;height:100%;object-fit:cover}
  select.form-input{cursor:pointer}
  .stars{color:#F4A716}
  .divider{height:1px;background:#f1f5f9;margin:1rem 0}
  .toggle{position:relative;display:inline-block;width:44px;height:24px}
  .toggle input{opacity:0;width:0;height:0}
  .toggle-slider{position:absolute;cursor:pointer;inset:0;background:#e2e8f0;border-radius:24px;transition:0.3s}
  .toggle-slider:before{content:'';position:absolute;height:18px;width:18px;left:3px;bottom:3px;background:white;border-radius:50%;transition:0.3s}
  input:checked + .toggle-slider{background:var(--green)}
  input:checked + .toggle-slider:before{transform:translateX(20px)}
  @media(max-width:768px){.sidebar{width:60px}.sidebar-item span{display:none}.sidebar-logo{font-size:0.9rem;padding:1rem}.main{margin-left:60px}}
`;

// ─── TOAST ────────────────────────────────────────────────────────────────────
const Toast = ({ toast }) => toast ? (
  <div className={`toast ${toast.type}`}>{toast.type === "success" ? "✓ " : "⚠ "}{toast.msg}</div>
) : null;

// ─── LOGIN GATE ───────────────────────────────────────────────────────────────
const AdminLogin = ({ onLogin }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      const data = await adminApi("/auth/login", { method: "POST", body: JSON.stringify(form) });
      if (data.user.role !== "admin") throw new Error("Access denied. Admin accounts only.");
      localStorage.setItem("fb_token", data.token);
      localStorage.setItem("fb_user", JSON.stringify(data.user));
      onLogin(data.user);
    } catch (err) { setError(err.message); }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#3B1F0A", fontFamily: "'DM Sans',sans-serif" }}>
      <style>{STYLES}</style>
      <div style={{ background: "white", borderRadius: 20, padding: "2.5rem", width: "min(420px,90vw)", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🍔</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", fontWeight: 800, color: "#3B1F0A" }}>Admin Portal</h2>
          <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Food Bite Restaurant</p>
        </div>
        {error && <div style={{ background: "#FFF3F3", border: "1px solid #FFCDD2", color: "#C0392B", padding: "10px 14px", borderRadius: 8, fontSize: "0.9rem", marginBottom: "1rem" }}>⚠ {error}</div>}
        <form onSubmit={submit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input className="form-input" type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="admin@foodbite.ng" required />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-input" type="password" value={form.password} onChange={e => setForm(p => ({ ...p, password: e.target.value }))} placeholder="••••••••" required />
          </div>
          <button className="btn btn-primary" type="submit" disabled={loading} style={{ width: "100%", justifyContent: "center", padding: "12px", marginTop: "0.5rem", fontSize: "1rem" }}>
            {loading ? "Signing in..." : "Sign In to Admin"}
          </button>
        </form>
      </div>
    </div>
  );
};

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
const Dashboard = () => {
  const [stats, setStats] = useState({ foods: 0, orders: 0, reservations: 0, messages: 0, revenue: 0 });

  useEffect(() => {
    Promise.all([
      adminApi("/foods?limit=1"),
      adminApi("/orders?limit=1"),
      adminApi("/reservations?limit=1"),
      adminApi("/contact?limit=1"),
    ]).then(([f, o, r, c]) => {
      const revenue = o.orders?.reduce((s, ord) => s + (ord.paymentStatus === "paid" ? ord.totalAmount : 0), 0) || 0;
      setStats({ foods: f.total || 0, orders: o.total || 0, reservations: r.total || 0, messages: c.unread || 0, revenue });
    }).catch(() => {});
  }, []);

  return (
    <div>
      <div className="stats-grid">
        {[
          { icon: "🍽", num: stats.foods, label: "Total Menu Items" },
          { icon: "📦", num: stats.orders, label: "Total Orders" },
          { icon: "📅", num: stats.reservations, label: "Reservations" },
          { icon: "✉", num: stats.messages, label: "Unread Messages" },
        ].map(s => (
          <div className="stat-card" key={s.label}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="card">
        <div className="card-header"><div className="card-title">Welcome to Food Bite Admin</div></div>
        <p style={{ color: "#64748b", lineHeight: 1.7 }}>Use the sidebar to manage your menu, view orders, handle reservations, reply to reviews, and read customer messages. All changes reflect live on your website instantly.</p>
      </div>
    </div>
  );
};

// ─── FOODS MANAGEMENT ─────────────────────────────────────────────────────────
const FoodsTab = ({ showToast }) => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", description: "", price: "", category: "lunch", ingredients: "", prepTime: "" });
  const [image, setImage] = useState(null);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    setLoading(true);
    try { const d = await adminApi("/foods?limit=100"); setFoods(d.foods || []); } catch { }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openAdd = () => { setEditing(null); setForm({ name: "", description: "", price: "", category: "lunch", ingredients: "", prepTime: "" }); setImage(null); setModal(true); };
  const openEdit = (f) => { setEditing(f); setForm({ name: f.name, description: f.description, price: f.price, category: f.category, ingredients: f.ingredients?.join(", ") || "", prepTime: f.prepTime }); setImage(null); setModal(true); };

  const save = async (e) => {
    e.preventDefault(); setSaving(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (image) fd.append("image", image);
      if (editing) {
        await fetch(`${API}/foods/${editing._id}`, { method: "PUT", headers: { Authorization: `Bearer ${localStorage.getItem("fb_token")}` }, body: fd });
        showToast("Food updated!", "success");
      } else {
        await fetch(`${API}/foods`, { method: "POST", headers: { Authorization: `Bearer ${localStorage.getItem("fb_token")}` }, body: fd });
        showToast("Food added!", "success");
      }
      setModal(false); load();
    } catch (err) { showToast(err.message, "error"); }
    setSaving(false);
  };

  const toggleAvail = async (id) => {
    try { await adminApi(`/foods/${id}/availability`, { method: "PATCH" }); load(); showToast("Availability updated!", "success"); } catch (err) { showToast(err.message, "error"); }
  };

  const deleteFood = async (id, name) => {
    if (!window.confirm(`Delete "${name}"?`)) return;
    try { await adminApi(`/foods/${id}`, { method: "DELETE" }); showToast("Food deleted", "success"); load(); } catch (err) { showToast(err.message, "error"); }
  };

  const CATEGORIES = ["breakfast", "lunch", "dinner", "drinks", "desserts", "snacks", "sides"];

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <div className="card-title">Menu Items ({foods.length})</div>
          <button className="btn btn-primary" onClick={openAdd}>+ Add New Food</button>
        </div>
        {loading ? <div className="empty"><div className="empty-icon">⏳</div><p>Loading...</p></div>
          : foods.length === 0 ? <div className="empty"><div className="empty-icon">🍽</div><p>No food items yet</p></div>
          : (
            <div style={{ overflowX: "auto" }}>
              <table>
                <thead><tr><th>Item</th><th>Category</th><th>Price</th><th>Rating</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                  {foods.map(f => (
                    <tr key={f._id}>
                      <td>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <div className="food-img">{f.image?.url ? <img src={f.image.url} alt={f.name} /> : "🍽"}</div>
                          <div>
                            <div style={{ fontWeight: 600 }}>{f.name}</div>
                            <div style={{ color: "#64748b", fontSize: "0.8rem" }}>{f.description?.slice(0, 40)}...</div>
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
                          <button className="btn btn-danger" onClick={() => deleteFood(f._id, f.name)}>🗑</button>
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
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && setModal(false)}>
          <div className="modal">
            <div className="modal-header">
              <div className="modal-title">{editing ? "Edit Food" : "Add New Food"}</div>
              <button className="modal-close" onClick={() => setModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <form onSubmit={save}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Name *</label>
                    <input className="form-input" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="e.g. Jollof Rice" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Category *</label>
                    <select className="form-input" value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}>
                      {CATEGORIES.map(c => <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Description *</label>
                  <textarea className="form-input" rows={3} value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} placeholder="Describe the dish..." required style={{ resize: "vertical" }} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Price (₦) *</label>
                    <input className="form-input" type="number" value={form.price} onChange={e => setForm(p => ({ ...p, price: e.target.value }))} placeholder="2500" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Prep Time (mins) *</label>
                    <input className="form-input" type="number" value={form.prepTime} onChange={e => setForm(p => ({ ...p, prepTime: e.target.value }))} placeholder="30" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Ingredients (comma-separated)</label>
                  <input className="form-input" value={form.ingredients} onChange={e => setForm(p => ({ ...p, ingredients: e.target.value }))} placeholder="rice, tomato, pepper, onion" />
                </div>
                <div className="form-group">
                  <label className="form-label">{editing ? "Replace Image (optional)" : "Food Image"}</label>
                  <input className="form-input" type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} style={{ padding: "8px 14px" }} />
                </div>
                <button className="btn btn-primary" type="submit" disabled={saving} style={{ width: "100%", justifyContent: "center", padding: "12px" }}>
                  {saving ? "Saving..." : editing ? "Update Food" : "Add Food"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── ORDERS TAB ───────────────────────────────────────────────────────────────
const OrdersTab = ({ showToast }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const load = async () => {
    setLoading(true);
    try { const d = await adminApi(`/orders${filter ? `?status=${filter}` : ""}?limit=50`); setOrders(d.orders || []); } catch { }
    setLoading(false);
  };

  useEffect(() => { load(); }, [filter]);

  const updateStatus = async (id, status) => {
    try { await adminApi(`/orders/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) }); showToast("Status updated!", "success"); load(); } catch (err) { showToast(err.message, "error"); }
  };

  const STATUSES = ["pending", "confirmed", "preparing", "ready", "delivered", "cancelled"];

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
                    <td style={{ fontSize: "0.85rem", color: "#64748b" }}>{o.items?.length} item(s)</td>
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
const ReservationsTab = ({ showToast }) => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try { const d = await adminApi("/reservations?limit=50"); setReservations(d.reservations || []); } catch { }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const updateStatus = async (id, status) => {
    try { await adminApi(`/reservations/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) }); showToast("Status updated!", "success"); load(); } catch (err) { showToast(err.message, "error"); }
  };

  const STATUSES = ["pending", "confirmed", "cancelled", "completed"];

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
const ReviewsTab = ({ showToast }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [replyModal, setReplyModal] = useState(null);
  const [replyMsg, setReplyMsg] = useState("");
  const [replying, setReplying] = useState(false);

  const load = async () => {
    setLoading(true);
    try { const d = await adminApi("/reviews/restaurant"); setReviews(d.reviews || []); } catch { }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const submitReply = async () => {
    if (!replyMsg.trim()) return;
    setReplying(true);
    try {
      await adminApi(`/reviews/${replyModal._id}/reply`, { method: "PATCH", body: JSON.stringify({ message: replyMsg }) });
      showToast("Reply sent!", "success");
      setReplyModal(null); setReplyMsg(""); load();
    } catch (err) { showToast(err.message, "error"); }
    setReplying(false);
  };

  const deleteReview = async (id) => {
    if (!window.confirm("Delete this review?")) return;
    try { await adminApi(`/reviews/${id}`, { method: "DELETE" }); showToast("Review deleted", "success"); load(); } catch (err) { showToast(err.message, "error"); }
  };

  const stars = (n) => "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));

  return (
    <div>
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
                  <span className="stars" style={{ fontSize: "1rem" }}>{stars(r.rating)}</span>
                  <button className="btn btn-ghost" onClick={() => { setReplyModal(r); setReplyMsg(r.reply?.message || ""); }}>💬 Reply</button>
                  <button className="btn btn-danger" onClick={() => deleteReview(r._id)}>🗑</button>
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
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && setReplyModal(null)}>
          <div className="modal">
            <div className="modal-header">
              <div className="modal-title">Reply to Review</div>
              <button className="modal-close" onClick={() => setReplyModal(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div style={{ background: "#f8fafc", borderRadius: 8, padding: "1rem", marginBottom: "1rem", fontSize: "0.9rem" }}>
                <strong>{replyModal.customer?.name}:</strong> {replyModal.comment}
              </div>
              <div className="form-group">
                <label className="form-label">Your Reply</label>
                <textarea className="form-input" rows={4} value={replyMsg} onChange={e => setReplyMsg(e.target.value)} placeholder="Write a reply..." style={{ resize: "vertical" }} />
              </div>
              <button className="btn btn-primary" onClick={submitReply} disabled={replying} style={{ width: "100%", justifyContent: "center" }}>
                {replying ? "Sending..." : "Send Reply"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── MESSAGES TAB ─────────────────────────────────────────────────────────────
const MessagesTab = ({ showToast }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  const load = async () => {
    setLoading(true);
    try { const d = await adminApi("/contact?limit=50"); setMessages(d.messages || []); } catch { }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const markRead = async (id) => {
    try { await adminApi(`/contact/${id}/read`, { method: "PATCH" }); load(); } catch { }
  };

  const deleteMsg = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    try { await adminApi(`/contact/${id}`, { method: "DELETE" }); showToast("Message deleted", "success"); setSelected(null); load(); } catch (err) { showToast(err.message, "error"); }
  };

  const open = (msg) => {
    setSelected(msg);
    if (!msg.isRead) markRead(msg._id);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: selected ? "1fr 1fr" : "1fr", gap: "1.5rem" }}>
      <div className="card">
        <div className="card-header"><div className="card-title">Contact Messages ({messages.length})</div></div>
        {loading ? <div className="empty"><div className="empty-icon">⏳</div><p>Loading...</p></div>
          : messages.length === 0 ? <div className="empty"><div className="empty-icon">✉</div><p>No messages yet</p></div>
          : messages.map(m => (
            <div key={m._id} onClick={() => open(m)}
              style={{ padding: "1rem", borderBottom: "1px solid #f1f5f9", cursor: "pointer", background: selected?._id === m._id ? "#fdf6ec" : "white", borderRadius: 8, marginBottom: 4, transition: "background 0.15s" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <div>
                  <div style={{ fontWeight: m.isRead ? 500 : 800, display: "flex", alignItems: "center", gap: 8 }}>
                    {!m.isRead && <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#D47C2F", display: "inline-block" }} />}
                    {m.name}
                  </div>
                  <div style={{ color: "#64748b", fontSize: "0.8rem" }}>{m.email}</div>
                  <div style={{ color: "#555", fontSize: "0.85rem", marginTop: 4 }}>{m.message?.slice(0, 60)}...</div>
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
              <button className="btn btn-danger" onClick={() => deleteMsg(selected._id)}>🗑 Delete</button>
              <button className="btn btn-ghost" onClick={() => setSelected(null)}>✕ Close</button>
            </div>
          </div>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.25rem" }}>
              {[["Name", selected.name], ["Email", selected.email], ["Phone", selected.phone || "—"], ["Date", formatDate(selected.createdAt)]].map(([l, v]) => (
                <div key={l} style={{ background: "#f8fafc", borderRadius: 8, padding: "10px 14px" }}>
                  <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600, marginBottom: 4 }}>{l}</div>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 8, padding: "1rem" }}>
              <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600, marginBottom: 8 }}>MESSAGE</div>
              <p style={{ lineHeight: 1.7, color: "#333" }}>{selected.message}</p>
            </div>
            <a href={`mailto:${selected.email}`} className="btn btn-primary" style={{ marginTop: "1rem", textDecoration: "none" }}>
              ✉ Reply via Email
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── ADMIN APP ────────────────────────────────────────────────────────────────
export default function Admin() {
  const [user, setUser] = useState(() => {
    const u = localStorage.getItem("fb_user");
    const parsed = u ? JSON.parse(u) : null;
    return parsed?.role === "admin" ? parsed : null;
  });
  const [tab, setTab] = useState("dashboard");
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const logout = () => {
    localStorage.removeItem("fb_token");
    localStorage.removeItem("fb_user");
    setUser(null);
  };

  if (!user) return <AdminLogin onLogin={setUser} />;

  const NAV = [
    { key: "dashboard", icon: "📊", label: "Dashboard" },
    { key: "foods", icon: "🍽", label: "Menu Items" },
    { key: "orders", icon: "📦", label: "Orders" },
    { key: "reservations", icon: "📅", label: "Reservations" },
    { key: "reviews", icon: "⭐", label: "Reviews" },
    { key: "messages", icon: "✉", label: "Messages" },
  ];

  const TITLES = { dashboard: "Dashboard", foods: "Menu Management", orders: "Order Management", reservations: "Reservations", reviews: "Customer Reviews", messages: "Contact Messages" };

  return (
    <>
      <style>{STYLES}</style>
      <Toast toast={toast} />
      <div className="admin-layout">
        <aside className="sidebar">
          <div className="sidebar-logo">🍔 Food<span>Bite</span></div>
          <nav className="sidebar-nav">
            {NAV.map(n => (
              <button key={n.key} className={`sidebar-item ${tab === n.key ? "active" : ""}`} onClick={() => setTab(n.key)}>
                <span className="icon">{n.icon}</span>
                <span>{n.label}</span>
              </button>
            ))}
          </nav>
          <div className="sidebar-footer">
            <button className="sidebar-item" onClick={logout} style={{ color: "rgba(255,255,255,0.5)" }}>
              <span className="icon">🚪</span><span>Sign Out</span>
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
            {tab === "foods" && <FoodsTab showToast={showToast} />}
            {tab === "orders" && <OrdersTab showToast={showToast} />}
            {tab === "reservations" && <ReservationsTab showToast={showToast} />}
            {tab === "reviews" && <ReviewsTab showToast={showToast} />}
            {tab === "messages" && <MessagesTab showToast={showToast} />}
          </div>
        </div>
      </div>
    </>
  );
}