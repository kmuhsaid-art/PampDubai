import React, { useState, useEffect } from 'react';
// 1. IMPORT KONEKSI SUPABASE YANG BARU LO BUAT
import { supabase } from './supabaseClient';

import jsPDF from 'jspdf';

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

  // DEFINISIKAN VARIABEL DI SINI
  const totalDurationHours = 24; 
  
  const startTime = new Date(investment.created_at);
  const now = new Date();
  
  const diffHours = Math.abs(now - startTime) / (1000 * 60 * 60);
  const elapsedHours = Math.min(diffHours, totalDurationHours);

  const profitPerHour = Number(investment.net_profit) / totalDurationHours;
  const currentProfit = profitPerHour * elapsedHours;

  return {
    currentProfit: Math.floor(currentProfit),
    totalBalance: Number(investment.capital) + Math.floor(currentProfit),
    progressPercent: ((elapsedHours / totalDurationHours) * 100).toFixed(1)
  };
}

export default function InvestmentPlatform() {
  const [view, setView] = useState('login');
  const [memberDatabase, setMemberDatabase] = useState([]);
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
    
  const fetchMembers = async () => {
    const { data, error } = await supabase
      .from('investments')
      .select('*');
  if (data) setMemberDatabase(data);
  };
  // Panggil fetchMembers saat Admin Panel dibuka
useEffect(() => {
  if (view === 'admin_panel') {
    fetchMembers();
  }
}, [view]);

const handleWithdrawRequest = () => {
  const message = `Halo Admin, saya ingin mengajukan Withdrawal.%0A%0A` +
                  `Nama: ${activeMemberData.client_name}%0A` +
                  `ID: ${activeMemberData.account_id}%0A` +
                  `Plan: ${activeMemberData.plan_name}%0A` +
                  `Capital: AED ${activeMemberData.capital}%0A` +
                  `Profit: AED ${displayStats.currentProfit}`;
  
  window.open(`https://t.me/m_asfanraza?text=${message}`, '_blank');
};

  const downloadContract = () => {
  // Inisialisasi PDF
  const doc = new jsPDF('portrait', 'mm', 'a4');
  
  // 1. TAMBAHAN WATERMARK (Ganti logoBase64 dengan string Base64 dari foto Anda)
  // Untuk mendapatkan base64, cari "image to base64 converter" di Google
  const watermarkPath = "./minted.png"; 
  
  doc.setGState(new doc.GState({ opacity: 0.1 })); // Opacity 10% agar halus
  doc.addImage(watermarkPath, 'PNG', 50, 80, 110, 110);
  doc.setGState(new doc.GState({ opacity: 1 })); // Kembalikan ke 100%

  // 2. HEADER SERTIFIKAT
  doc.setFillColor(197, 179, 88); // Warna Emas
  doc.rect(0, 0, 210, 30, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text("PAMP GOLD DUBAI", 105, 18, { align: 'center' });

  // 3. JUDUL & KONTEN
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(16);
  doc.text("INVESTMENT CERTIFICATE", 105, 50, { align: 'center' });
  
  doc.setDrawColor(197, 179, 88);
  doc.line(60, 55, 150, 55);

  // 4. DATA INVESTASI
  doc.setFontSize(12);
  const data = [
    { label: "Client Name", value: activeMemberData?.client_name || '-' },
    { label: "Account ID", value: activeMemberData?.username || '-' },
    { label: "Investment Plan", value: activeMemberData?.plan_name || '-' },
    { label: "Capital Invested", value: `AED ${Number(activeMemberData?.capital || 0).toLocaleString()}` },
    { label: "Net Profit Target", value: `AED ${Number(activeMemberData?.net_profit || 0).toLocaleString()}` },
    { label: "Status", value: "ACTIVE" }
  ];

  let startY = 75;
  data.forEach((item, index) => {
    doc.setFont("helvetica", "bold");
    doc.text(`${item.label}:`, 30, startY + (index * 12));
    doc.setFont("helvetica", "normal");
    doc.text(`${item.value}`, 90, startY + (index * 12));
  });

  // 5. FOOTER / LEGAL
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text("This document is a formal digital certificate of participation in the PAMP GOLD secure ledger.", 105, 260, { align: 'center' });
  doc.text("PAMP GOLD GROUP © 2026", 105, 270, { align: 'center' });

  // 6. DOWNLOAD
  doc.save(`PampGold_Certificate_${activeMemberData?.client_name}.pdf`);
};

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

  const handleAdminPlanSelect = (e) => {
  const planName = e.target.value;
  setAdminForm(prev => ({
    ...prev,
    planName: planName,
    // Jika user pilih "Select Plan" (kosong), reset angka ke 0
    capital: investmentPlans[planName]?.buying || 0,
    netProfit: investmentPlans[planName]?.netProfit || 0
  }));
};

  // ==========================================
  // ACTION 2: ADMIN DEPLOY (INSERT DATA KE SUPABASE)
  // ==========================================
  const handleAdminSave = async (e) => {
  e.preventDefault();
  setLoading(true);
  
const handleAdminPlanSelect = (e) => {
  const planName = e.target.value;
  setAdminForm(prev => ({
    ...prev,
    planName: planName,
    // Jika user pilih "Select Plan" (kosong), reset angka ke 0
    capital: investmentPlans[planName]?.buying || 0,
    netProfit: investmentPlans[planName]?.netProfit || 0
  }));
};

  // Pakai .upsert() supaya kalau username sudah ada, dia otomatis update
  const { error } = await supabase
    .from('investments')
    .upsert([
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
    ], { onConflict: 'username' }); // Pastikan kolom username diset sebagai Primary Key/Unique di Supabase

  if (error) {
    alert("Gagal: " + error.message);
  } else {
    alert("Berhasil!");
    fetchMembers(); // Refresh daftar member setelah simpan
    setAdminForm({ username: '', password: '', clientName: '', capital: 0, netProfit: 0, mode: 'auto', manualProfit: 0 });
  }
  setLoading(false);
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
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* BAGIAN 1: LIST MEMBER (Kiri) */}
        <div className="bg-[#0d0d0d] border border-gray-900 p-6 rounded shadow-2xl">
          <h2 className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-4">Daftar Member</h2>
          <div className="space-y-2">
            {memberDatabase.map((m, idx) => (
              <div key={idx} className="flex justify-between items-center bg-black p-3 border border-gray-800 rounded">
                <div>
                  <p className="text-xs font-bold">{m.clientName}</p>
                  <p className="text-[9px] text-gray-500">{m.username}</p>
                </div>
                <button 
                  onClick={() => setAdminForm(m)} // Mengisi form dengan data member yang diklik
                  className="bg-gray-800 hover:bg-yellow-600 text-[10px] px-3 py-1 rounded transition"
                >
                  EDIT
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* BAGIAN 2: FORM INPUT (Kanan) */}
<div className="bg-[#0d0d0d] border border-gray-900 p-6 rounded shadow-2xl">
  <h2 className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-4">
    {adminForm.username ? `Editing: ${adminForm.username}` : "Create New Member"}
  </h2>
  
  <form onSubmit={handleAdminSave} className="space-y-3 text-[11px]">
    <div className="grid grid-cols-2 gap-3">
      <div>
        <label className="text-gray-500 uppercase font-bold text-[9px] block mb-1">Full Name</label>
        <input type="text" placeholder="Investor Name" className="w-full bg-black border border-gray-800 p-2 text-white focus:border-yellow-600 outline-none"
          value={adminForm.clientName} onChange={e => setAdminForm({...adminForm, clientName: e.target.value})} />
      </div>
      <div>
        <label className="text-gray-500 uppercase font-bold text-[9px] block mb-1">Investment Plan</label>
        <select 
          className="w-full bg-black border border-gray-800 p-2 text-white focus:border-yellow-600 outline-none"
          value={adminForm.planName} 
          onChange={handleAdminPlanSelect}
        >
          <option value="">-- Select Plan --</option>
          {Object.keys(investmentPlans).map(plan => (
            <option key={plan} value={plan}>{plan}</option>
          ))}
        </select>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-3">
      <div>
        <label className="text-gray-500 uppercase font-bold text-[9px] block mb-1">Account ID</label>
        <input type="text" placeholder="Username" className="w-full bg-black border border-gray-800 p-2 text-white focus:border-yellow-600 outline-none"
          value={adminForm.username} onChange={e => setAdminForm({...adminForm, username: e.target.value})} />
      </div>
      <div>
        <label className="text-gray-500 uppercase font-bold text-[9px] block mb-1">Access Key</label>
        <input type="text" placeholder="Password" className="w-full bg-black border border-gray-800 p-2 text-white focus:border-yellow-600 outline-none"
          value={adminForm.password} onChange={e => setAdminForm({...adminForm, password: e.target.value})} />
      </div>
    </div>

    <div className="grid grid-cols-2 gap-3">
      <div>
        <label className="text-gray-500 uppercase font-bold text-[9px] block mb-1">Capital (AED)</label>
        <input type="number" className="w-full bg-black border border-gray-800 p-2 text-yellow-500 font-bold"
          value={adminForm.capital} onChange={e => setAdminForm({...adminForm, capital: e.target.value})} />
      </div>
      <div>
        <label className="text-gray-500 uppercase font-bold text-[9px] block mb-1">Net Profit (AED)</label>
        <input type="number" className="w-full bg-black border border-gray-800 p-2 text-white"
          value={adminForm.netProfit} onChange={e => setAdminForm({...adminForm, netProfit: e.target.value})} />
      </div>
    </div>

    <div className="grid grid-cols-2 gap-3">
      <div>
        <label className="text-gray-500 uppercase font-bold text-[9px] block mb-1">ROI Mode</label>
        <select className="w-full bg-black border border-gray-800 p-2 text-white"
          value={adminForm.mode} onChange={e => setAdminForm({...adminForm, mode: e.target.value})}>
          <option value="auto">AUTOMATIC</option>
          <option value="manual">MANUAL INJECT</option>
        </select>
      </div>
      <div>
        <label className="text-gray-500 uppercase font-bold text-[9px] block mb-1">Live Balance Inject</label>
        <input type="number" disabled={adminForm.mode === 'auto'} className="w-full bg-black border border-gray-800 p-2 text-white disabled:opacity-30"
          value={adminForm.manualProfit} onChange={e => setAdminForm({...adminForm, manualProfit: e.target.value})} />
      </div>
    </div>

    <button type="submit" className="w-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-black py-3 rounded mt-4 tracking-widest uppercase">
      {adminForm.username ? "CONFIRM UPDATE" : "SUBMIT"}
    </button>
    
    <button type="button" onClick={() => setAdminForm({username: '', password: '', clientName: '', capital: 0, planName: '', netProfit: 0, mode: 'auto', manualProfit: 0})}
      className="w-full text-gray-500 py-1 text-[9px] uppercase tracking-widest hover:text-white transition">
      ✕ Clear Form / Reset
    </button>
  </form>
</div>
      </div>
    </div>
  );
}


  // ==========================================
  // VIEW 3: MEMBER DASHBOARD DYNAMIC
  // ==========================================
  return (
  <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans">
    <div className="max-w-5xl mx-auto space-y-8">
      
      {/* Header Section Di-update */}
      <div className="flex justify-between items-center border-b border-gray-800 pb-8">
        <div className="flex items-center gap-4">
          <img src="/avatar-placeholder.png" alt="Profile" className="w-12 h-12 rounded-full border border-gray-700" />
        <div>
        <h1 className="text-xl font-bold text-white">{activeMemberData?.client_name}</h1>
        <p className="text-[10px] text-yellow-600 mb-1">Active Plan = {activeMemberData?.plan_name}</p>
      </div>
      </div>
       <div className="text-right">
         <p className="text-[10px] text-gray-500 uppercase tracking-widest">Welcome | {activeMemberData?.username}</p>
        <button onClick={() => setView('login')} className="text-[9px] uppercase border border-gray-800 px-3 py-1 hover:bg-gray-900">Logout</button>
       </div>
    </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0a0a0a] border border-gray-900 p-6">
          <p className="text-[9px] text-gray-500 uppercase tracking-widest">Total Value</p>
          <p className="text-2xl font-black mt-2 text-white">AED {displayStats.totalBalance?.toLocaleString()}</p>
        </div>
        <div className="bg-[#0a0a0a] border border-gray-900 p-6">
          <p className="text-[9px] text-gray-500 uppercase tracking-widest">Live ROI</p>
          <p className="text-2xl font-black mt-2 text-yellow-500">AED {displayStats.currentProfit?.toLocaleString()}</p>
        </div>
        <div className="bg-[#0a0a0a] border border-gray-900 p-6">
          <p className="text-[9px] text-gray-500 uppercase tracking-widest">Invested</p>
          <p className="text-2xl font-black mt-2 text-gray-400">AED {Number(activeMemberData?.capital || 0).toLocaleString()}</p>
        </div>
      </div>

      {/* PROGRESS BAR SECTION */}
      <div className="bg-[#0a0a0a] border border-gray-900 p-8">
        <div className="flex justify-between text-[10px] uppercase tracking-widest mb-4">
          <span className="text-gray-500">Investment Maturity</span>
          <span className="text-yellow-600">{displayStats.progressPercent}%</span>
        </div>
        <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden">
          <div className="bg-yellow-600 h-full transition-all duration-1000" style={{ width: `${displayStats.progressPercent}%` }}></div>
        </div>
      </div>

      {/* --- BARU: STATUS ALERT --- */}
{displayStats.progressPercent >= 90 && (
  <div className="bg-yellow-950/30 border border-yellow-700/50 p-4 mb-6 animate-pulse">
    <p className="text-yellow-500 text-[10px] uppercase font-bold tracking-widest text-center">
      ⚠️ Contract near maturity. Contact Admin for profit withdrawal or rollover.
    </p>
  </div>
)}

{/* --- BARU: FITUR UTAMA --- */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  
  {/* Left: Riwayat Transaksi */}
  <div className="border border-gray-900 p-6 bg-[#0a0a0a]">
    <h3 className="text-white uppercase tracking-widest mb-4 font-bold text-xs border-b border-gray-900 pb-2">Transaction History</h3>
    <div className="text-[10px] text-gray-500 space-y-3">
      <div className="flex justify-between"><span>Deployment</span> <span>AED {Number(activeMemberData?.capital).toLocaleString()}</span></div>
      <div className="flex justify-between text-yellow-600"><span>ROI Credit (Hourly)</span> <span>+AED 231.00</span></div>
      <div className="flex justify-between text-yellow-600"><span>ROI Credit (Hourly)</span> <span>+AED 231.00</span></div>
    </div>
  </div>

  {/* Right: WD Request & Summary */}
  <div className="flex flex-col gap-4">
    <button 
      onClick={handleWithdrawRequest}
      className="w-full bg-white text-black font-black py-4 uppercase tracking-widest text-xs hover:bg-yellow-500 transition"
    >
      Request Withdrawal
    </button>
    <button 
      onClick={downloadContract}
      className="w-full border border-gray-700 text-gray-400 py-4 uppercase tracking-widest text-xs hover:text-white transition"
    >
      Download Contract Summary (PDF)
    </button>
   </div>
  </div>
 </div>
</div>
);
};


