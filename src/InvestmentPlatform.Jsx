import React, { useState, useEffect } from 'react';
// 1. IMPORT KONEKSI SUPABASE YANG BARU LO BUAT
import { supabase } from './supabaseClient';

const investmentPlans = {
  "Classic (2.5g)": { buying: 945, netProfit: 280 },
  "Standard (5g)": { buying: 1870, netProfit: 630 },
  "Premium (10g)": { buying: 3700, netProfit: 1400 },
  "Elite (25g)": { buying: 9150, netProfit: 3600 },
  "Prestige (50g)": { buying: 18000, netProfit: 8500 },
  "Royal (100g)": { buying: 35400, netProfit: 18600 }
};

// LOGIKA HITUNG LIVE ROI (TETAP SAMA)
function calculateLiveROI(investment) {
  if (!investment.plan_name) return { currentProfit: 0, totalBalance: 0, progressPercent: 0 };

  if (investment.mode === "manual") {
    return {
      currentProfit: Number(investment.manual_profit || 0),
      totalBalance: Number(investment.capital) + Number(investment.manual_profit || 0),
      progressPercent: ((Number(investment.manual_profit || 0) / Number(investment.net_profit)) * 100).toFixed(1)
    };
  }

  const startTime = new Date(investment.created_at);
  const now = new Date();
  const diffHours = Math.abs(now - startTime) / (1000 * 60 * 60);

  const totalCycles = 30 * 6; 
  const cyclesPassed = Math.floor(diffHours / 4);
  const activeCycles = Math.min(cyclesPassed, totalCycles);

  const profitPerCycle = Number(investment.net_profit) / totalCycles;
  const currentProfit = profitPerCycle * activeCycles;

  return {
    currentProfit: Math.floor(currentProfit),
    totalBalance: Number(investment.capital) + Math.floor(currentProfit),
    progressPercent: ((activeCycles / totalCycles) * 100).toFixed(1)
  };
}

export default function InvestmentPlatform() {
  const [view, setView] = useState('login');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  // STATE UNTUK MENAMPUNG DATA MEMBER YANG BERHASIL LOGIN DARI SUPABASE
  const [activeMemberData, setActiveMemberData] = useState(null);

  // STATE FORM INPUT ADMIN CONTROL
  const [adminForm, setAdminForm] = useState({
    username: "",
    password: "",
    clientName: "",
    capital: 0,
    planName: "",
    netProfit: 0,
    mode: "auto",
    manualProfit: 0
  });

  const [displayStats, setDisplayStats] = useState({});

  useEffect(() => {
    if (view === 'member_dashboard' && activeMemberData) {
      setDisplayStats(calculateLiveROI(activeMemberData));
    }
  }, [view, activeMemberData]);

  // ==========================================
  // ACTION 1: LOGIKA LOGIN MEMBACA DATABASE SUPABASE
  // ==========================================
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");
    setLoading(true);
    
    // DETEKSI LOGIN ADMIN UTAMA
    if (username === "admin_pamp" && password === "superadmin77") {
      setView('admin_panel');
      setLoading(false);
      return;
    }

    try {
      // CEK KE TABEL 'investments' DI SUPABASE
      const { data, error } = await supabase
        .from('investments')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .single(); // Ambil 1 baris data yang cocok data member

      if (error || !data) {
        setLoginError("⚠️ Invalid credentials. Access denied.");
      } else {
        setActiveMemberData(data); // Simpan data asli dari database ke state
        setView('member_dashboard');
      }
    } catch (err) {
      setLoginError("⚠️ Connection timeout. Check database connectivity.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdminPlanSelect = (plan) => {
    const selected = investmentPlans[plan];
    if (selected) {
      setAdminForm({
        ...adminForm,
        planName: plan,
        capital: selected.buying,
        netProfit: selected.netProfit
      });
    }
  };

  // ==========================================
  // ACTION 2: ADMIN DEPLOY (INSERT DATA KE SUPABASE)
  // ==========================================
  const handleAdminSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // KIRIM DATA FORM KE TABEL 'investments'
      const { error } = await supabase
        .from('investments')
        .insert([
          {
            username: adminForm.username,
            password: adminForm.password,
            client_name: adminForm.clientName,
            capital: Number(adminForm.capital),
            plan_name: adminForm.planName,
            net_profit: Number(adminForm.netProfit),
            mode: adminForm.mode,
            manual_profit: Number(adminForm.manualProfit || 0)
          }
        ]);

      if (error) throw error;

      alert(`🎉 Account for ${adminForm.clientName} successfully DEPLOYED to Database!`);
      
      // Reset Form Admin
      setAdminForm({ username: "", password: "", clientName: "", capital: 0, planName: "", netProfit: 0, mode: "auto", manualProfit: 0 });
      setView('login');
    } catch (err) {
      alert(`❌ Failed to save to database: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // VIEW 1: PORTAL LOGIN
  // ==========================================
  if (view === 'login') {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-sm bg-[#0d0d0d] border border-gray-900 rounded-sm p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-xl font-serif text-white tracking-[0.25em] uppercase">PAMP GOLD</h2>
            <p className="text-[9px] text-yellow-600 tracking-[0.3em] uppercase mt-1">Secure Investor Portal</p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-5 text-sm">
            {loginError && (
              <div className="text-[11px] text-red-500 bg-red-950/20 border border-red-900/30 px-3 py-2 text-center rounded">{loginError}</div>
            )}
            <div>
              <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1.5 font-bold">Account ID / Username</label>
              <input 
                type="text" required value={username} onChange={e => setUsername(e.target.value)}
                className="w-full bg-black/60 border border-gray-800 rounded px-3 py-2.5 text-white focus:outline-none focus:border-yellow-600 font-mono"
                placeholder="Enter ID"
              />
            </div>
            <div>
              <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1.5 font-bold">Access Password</label>
              <input 
                type="password" required value={password} onChange={e => setPassword(e.target.value)}
                className="w-full bg-black/60 border border-gray-800 rounded px-3 py-2.5 text-white focus:outline-none focus:border-yellow-600 font-mono"
                placeholder="••••••••"
              />
            </div>
            <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-black text-xs py-3.5 tracking-widest uppercase hover:brightness-110 cursor-pointer disabled:opacity-50">
              {loading ? "AUTHENTICATING..." : "Secure Login →"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: PANEL CONTROL ADMINISTRATOR
  // ==========================================
  if (view === 'admin_panel') {
    return (
      <div className="min-h-[80vh] text-white p-4">
        <div className="max-w-lg mx-auto bg-[#0d0d0d] border border-gray-900 p-6 rounded shadow-2xl space-y-5">
          <div className="flex justify-between items-center border-b border-gray-900 pb-3">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-yellow-500">🛠️ Admin Central Station</h2>
              <p className="text-[9px] text-gray-500 uppercase mt-0.5">Setup New Active Client</p>
            </div>
            <button onClick={() => setView('login')} className="text-[10px] uppercase font-bold tracking-wider text-red-500 cursor-pointer bg-transparent border-none">Exit Panel ✕</button>
          </div>

          <form onSubmit={handleAdminSave} className="space-y-4 text-xs">
            <div className="space-y-2">
              <label className="text-gray-400 block font-bold uppercase tracking-wider text-[9px]">Investor Full Name</label>
              <input type="text" required placeholder="e.g. John Doe" className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-white"
                value={adminForm.clientName} onChange={e => setAdminForm({...adminForm, clientName: e.target.value})} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-gray-400 block font-bold uppercase tracking-wider text-[9px]">Set Username ID</label>
                <input type="text" required placeholder="member77" className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-white font-mono"
                  value={adminForm.username} onChange={e => setAdminForm({...adminForm, username: e.target.value})} />
              </div>
              <div>
                <label className="text-gray-400 block font-bold uppercase tracking-wider text-[9px]">Set Access Password</label>
                <input type="text" required placeholder="pass123" className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-white font-mono"
                  value={adminForm.password} onChange={e => setAdminForm({...adminForm, password: e.target.value})} />
              </div>
            </div>

            <div>
              <label className="text-gray-400 block font-bold uppercase tracking-wider text-[9px]">Assign Investment Plan</label>
              <select className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-white cursor-pointer"
                value={adminForm.planName} onChange={e => handleAdminPlanSelect(e.target.value)}>
                <option value="">-- Click to choose plan --</option>
                {Object.keys(investmentPlans).map(name => <option key={name} value={name}>{name}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-gray-400 block font-bold uppercase tracking-wider text-[9px]">Manual Capital Input (AED)</label>
                <input type="number" className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-yellow-500 font-bold"
                  value={adminForm.capital} onChange={e => setAdminForm({...adminForm, capital: Number(e.target.value)})} />
              </div>
              <div>
                <label className="text-gray-400 block font-bold uppercase tracking-wider text-[9px]">Manual Net Profit Target (AED)</label>
                <input type="number" className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-white font-bold"
                  value={adminForm.netProfit} onChange={e => setAdminForm({...adminForm, netProfit: Number(e.target.value)})} />
              </div>
            </div>

            <div>
              <label className="text-gray-400 block font-bold uppercase tracking-wider text-[9px] mb-2">ROI Operational Mode</label>
              <div className="flex gap-2">
                <button type="button" onClick={() => setAdminForm({...adminForm, mode: 'auto'})}
                  className={`flex-1 py-2 text-[10px] font-bold tracking-wider uppercase rounded ${adminForm.mode === 'auto' ? 'bg-green-600 text-white' : 'bg-black text-gray-500 border border-gray-800'}`}>
                  Autopilot (4 Hours)
                </button>
                <button type="button" onClick={() => setAdminForm({...adminForm, mode: 'manual'})}
                  className={`flex-1 py-2 text-[10px] font-bold tracking-wider uppercase rounded ${adminForm.mode === 'manual' ? 'bg-blue-600 text-white' : 'bg-black text-gray-500 border border-gray-800'}`}>
                  Manual Inject
                </button>
              </div>
            </div>

            {adminForm.mode === 'manual' && (
              <div className="bg-blue-950/20 border border-blue-900/30 p-3 rounded">
                <label className="text-blue-400 block font-bold uppercase tracking-wider text-[9px] mb-1">Inject Live Profit Balance (AED)</label>
                <input type="number" className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-white font-mono"
                  value={adminForm.manualProfit} onChange={e => setAdminForm({...adminForm, manualProfit: Number(e.target.value)})} />
              </div>
            )}

            <button type="submit" disabled={loading} className="w-full bg-yellow-500 text-black font-black py-3 rounded text-[11px] tracking-widest uppercase hover:brightness-110 cursor-pointer disabled:opacity-50">
              {loading ? "STORING DATA CONTRACT..." : "Deploy & Start Investment Contract"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 3: MEMBER DASHBOARD DYNAMIC
  // ==========================================
  return (
    <div className="min-h-[80vh] text-white p-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="border-b border-gray-900 pb-4 flex justify-between items-end">
          <div>
            <h1 className="text-lg font-serif tracking-widest uppercase text-white">{activeMemberData?.client_name}</h1>
            <p className="text-[9px] text-gray-500 uppercase tracking-wider mt-1">
              Contract Status: <span className="text-yellow-600 font-bold">{activeMemberData?.plan_name} Running</span>
            </p>
          </div>
          <button onClick={() => setView('login')} className="text-[10px] uppercase font-bold tracking-widest text-gray-500 hover:text-white bg-transparent border-none cursor-pointer">
            Logout ✕
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#0d0d0d] border border-gray-900 rounded p-6 shadow-xl">
            <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-2">Total Account Value</p>
            <p className="text-3xl font-black text-yellow-500 tracking-tight">AED {displayStats.totalBalance?.toLocaleString()}</p>
            <div className="mt-4 pt-4 border-t border-gray-950 flex justify-between text-[11px] text-gray-400">
              <span>Deposited Capital</span>
              <span className="font-bold text-white">AED {Number(activeMemberData?.capital || 0).toLocaleString()}</span>
            </div>
          </div>

          <div className="bg-[#0d0d0d] border border-gray-900 rounded p-6 shadow-xl">
            <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-2">Accumulated Live ROI</p>
            <p className="text-3xl font-black text-white tracking-tight">AED {displayStats.currentProfit?.toLocaleString()}</p>
            <div className="mt-4 pt-4 border-t border-gray-950 flex justify-between text-[11px] text-gray-400">
              <span>Contract Target Cap (Spread)</span>
              <span className="font-bold text-gray-400">AED {Number(activeMemberData?.net_profit || 0).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-[#0d0d0d] border border-gray-900 rounded p-5 shadow-xl">
          <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest mb-2.5">
            <span className="text-gray-500">Investment Maturity Progress</span>
            <span className="text-yellow-500 font-mono">{displayStats.progressPercent}%</span>
          </div>
          <div className="w-full bg-black h-1.5 rounded-full overflow-hidden border border-gray-950">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 h-full transition-all duration-700 ease-out" style={{ width: `${displayStats.progressPercent}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}