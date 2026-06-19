import React, { useState } from 'react';
// Mengimport 2 file yang sudah kita siapkan di atas
import LandingPage from './LandingPage'; 
import InvestmentPlatform from './InvestmentPlatform';

export default function App() {
  // Pengatur lalu lintas halaman: 'public_web' atau 'investor_portal'
  const [currentSection, setCurrentSection] = useState('public_web');

  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased">
      
      {/* JIKA AKSES PUBLIC: Tampilkan Web Utama Lo yang Lama */}
      {currentSection === 'public_web' && (
        <div className="animate-in fade-in duration-300">
          {/* BAR PREMIUM DI ATAS WEB UTAMA UNTUK TOMBOL MASUK PORTAL */}
          <nav className="flex justify-between items-center p-6 border-b border-gray-900 bg-[#070707] sticky top-0 z-50">
            <div className="font-serif text-xl tracking-[0.2em] font-bold text-white">PAMP GOLD</div>
            <button 
              onClick={() => setCurrentSection('investor_portal')}
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black text-xs font-black px-5 py-2.5 rounded-sm tracking-widest uppercase cursor-pointer hover:brightness-110 transition-all shadow-lg"
            >
              Investor Portal VIP →
            </button>
          </nav>

          {/* Memanggil Website Utama Anda */}
          <LandingPage /> 
        </div>
      )}

      {/* JIKA KLIK PORTAL: Sembunyikan Web Utama, Tampilkan Portal Investor */}
      {currentSection === 'investor_portal' && (
        <div className="animate-in fade-in duration-300">
          {/* TOMBOL KEMBALI KE WEB DEPAN */}
          <div className="bg-[#070707] px-6 pt-4">
            <button 
              onClick={() => setCurrentSection('public_web')}
              className="text-[10px] text-gray-500 hover:text-white uppercase font-black tracking-widest bg-transparent border-none cursor-pointer transition-colors"
            >
              ← Back to Main Website
            </button>
          </div>
          
          {/* Memanggil Dashboard & Admin Control */}
          <InvestmentPlatform />
        </div>
      )}

    </div>
  );
}