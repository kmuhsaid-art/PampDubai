import React, { useState } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  User,
  ShieldCheck,
  Gem,
  BarChart3,
  ChevronRight,
  Phone,
  Mail,
  Trash2,
  MapPin,
  Lock,
} from "lucide-react";

export default function App() {
  const [lang, setLang] = useState("en");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formInvestment, setFormInvestment] = useState({
    name: "",
    company: "",
    address: "",
    phoneNumber: "",
    email: "",
    bankName: "",
    iban: "",
    bankAccount: "",
    totalInvestment: "",
  });

  const handleChange = (e) => {
    setFormInvestment({
      ...formInvestment,
      [e.target.name]: e.target.value,
    });
  };

const translations = {  
  en: {    
    navBeli: "Buy Gold",    
    navInvest: "Investment Programs",    
    navVault: "Secure Vaulting",    
    navAbout: "About Us",    
    navBtn: "Start Investing",         
    heroBadge: "Official PAMP Suisse Partner in Dubai",    
    heroTitle1: "Protect Your Wealth with",    
    heroTitle2: "Swiss Pure Gold",    
    heroDesc: "Buy, sell, and store 999.9 pure PAMP gold bars. Tax-free storage facility in DMCC Dubai with high-security standards.",    
    heroBtn1: "View Products",    
    heroBtn2: "Institutional Account",         
    uspTax: "0% TAX (UAE)",    
    uspInsurance: "100% FULL INSURANCE",    
    uspLbma: "LBMA CERTIFIED",         
    sectionTitle: "Popular PAMP Products",    
    linkKatalog: "VIEW FULL CATALOG",    
    estPrice: "Estimated Price",
    purityText: "999.9 Pure Gold",    
    addToCart: "Add to cart",
    telegramMsg: "Hello Admin, I want to open an Institutional Account.%0A%0AName: {name}%0ACompany: {company}%0AAddress: {address}%0APhone: {phone}%0AEmail: {email}%0ABank: {bankName}%0AIBAN: {iban}%0ABank Account: {bankAccount}%0AEst. Purchase: {totalKilo}",
    // Why PAMP Section
    whyTitle: "Why PAMP Gold Dubai?",
    whyDesc: "The perfect combination of Swiss precision and Dubai's financial excellence to secure your investment portfolio.",
    why1Title: "Swiss Precision & LBMA",
    why1Desc: "Each PAMP gold bar is produced in Switzerland with a 999.9 purity standard. Globally recognized by the LBMA (London Bullion Market Association).",
    why2Title: "DMCC Secure Storage",
    why2Desc: "Option to store your physical gold in a high-standard vault in the DMCC Dubai area. Fully guaranteed by world-class insurance.",
    why3Title: "Tax-Free & Liquid",
    why3Desc: "Take advantage of tax-free status for gold investments in the UAE. Our platform allows you to instantly resell your gold 24/7.",
    footerDesc: "Official distributor and vaulting partner for PAMP Suisse precious metal products in the Middle East region. Securing generational wealth.",
    prodTitle: "Gold Products",
    prod1: "Minted Bars (Lady Fortuna)",
    prod2: "Cast Bars",
    prod3: "Lunar Series",
    prod4: "Sovereign Gold Coins",
    prod5: "Live Spot Price",
    
    servTitle: "Our Services",
    serv1: "DMCC Vault Storage",
    serv2: "Guaranteed Delivery",
    serv3: "Gold Savings Program",
    serv4: "Buyback Services",
    serv5: "B2B Institutional Accounts",
    
    legalTitle: "Legal & Support",
    legal1: "About Us",
    legal2: "Terms & Conditions",
    legal3: "Privacy Policy",
    legal4: "FAQ",
    legal5: "Contact Us",
    cart1: "Your shopping cart is empty",
    cart2: "Shop More",
    cart3: "Shopping Cart",
    cert1: "LBMA Certified",
    cert2: "DMCC Member",

    menu1: "Investment Plans",
    menu2: "Exclusive Gold Program",
    menu3: "The safest asset for the future is gold. Choose an investment program that matches your risk profile.",
    menu4: "Consult via Telegram",
    menu5: "All investment programs are professionally managed. The security of your assets is our top priority.",
    menu6: "",
    menu7: "",
    menu8: "",
    menu9: "",
    menu10: "",
    menu11: ""
  },  
 
  id: {    
    navBeli: "Beli Emas",    
    navInvest: "Program Investasi",    
    navVault: "Penyimpanan Aman",    
    navAbout: "Tentang Kami",    
    navBtn: "Mulai Investasi",         
    heroBadge: "Mitra Resmi PAMP Suisse di Dubai",    
    heroTitle1: "Lindungi Kekayaan Anda dengan",    
    heroTitle2: "Emas Murni Swiss",    
    heroDesc: "Beli, jual, dan simpan emas batangan PAMP berkualitas 999.9. Fasilitas penyimpanan bebas pajak di brankas DMCC Dubai dengan standar keamanan tingkat tinggi.",    
    heroBtn1: "Lihat Produk",    
    heroBtn2: "Buka Akun Institusi",         
    uspTax: "0% PAJAK (UEA)",    
    uspInsurance: "100% ASURANSI PENUH",    
    uspLbma: "LBMA SERTIFIKASI",         
    sectionTitle: "Produk PAMP Terpopuler",    
    linkKatalog: "LIHAT KATALOG LENGKAP",    
    estPrice: "Harga Estimasi",
    purityText: "999.9 Emas Murni",    
    addToCart: "Tambah ke keranjang",
    telegramMsg: "Halo Admin, saya ingin membuka Akun Institusi.%0A%0ANama: {name}%0APerusahaan: {company}%0AAlamat: {address}%0ATelepon: {phone}%0AEmail: {email}%0ANama Bank: {bankName}%0AIBAN: {iban}%0ANo Rekening: {bankAccount}%0AEstimasi Pembelian: {totalKilo}",
    // Why PAMP Section
    whyTitle: "Mengapa PAMP Gold Dubai?",
    whyDesc: "Kombinasi sempurna antara presisi Swiss dan keunggulan finansial Dubai untuk mengamankan portofolio investasi Anda.",
    why1Title: "Presisi Swiss & LBMA",
    why1Desc: "Setiap batangan emas PAMP diproduksi di Swiss dengan standar kemurnian 999.9. Diakui secara global oleh LBMA (London Bullion Market Association).",
    why2Title: "Penyimpanan Aman DMCC",
    why2Desc: "Pilihan untuk menyimpan fisik emas Anda di brankas berstandar tinggi di kawasan DMCC Dubai. Dijamin penuh oleh asuransi kelas dunia.",
    why3Title: "Bebas Pajak & Likuid",
    why3Desc: "Manfaatkan status bebas pajak untuk investasi emas di UEA. Platform kami memungkinkan Anda untuk menjual kembali emas Anda secara instan 24/7.",
    footerDesc: "Distributor dan mitra penyimpanan resmi untuk produk logam mulia PAMP Suisse di wilayah Timur Tengah. Mengamankan kekayaan generasi.",
    prodTitle: "Produk Emas",
    prod1: "Minted Bars (Lady Fortuna)",
    prod2: "Cast Bars",
    prod3: "Lunar Series",
    prod4: "Koin Emas Sovereign",
    prod5: "Harga Spot Live",
    
    servTitle: "Layanan Kami",
    serv1: "Penyimpanan Vault DMCC",
    serv2: "Pengiriman Terjamin",
    serv3: "Program Tabungan Emas",
    serv4: "Jual Kembali (Buyback)",
    serv5: "Akun Institusi B2B",
    
    legalTitle: "Legal & Bantuan",
    legal1: "Tentang Kami",
    legal2: "Syarat & Ketentuan",
    legal3: "Kebijakan Privasi",
    legal4: "FAQ",
    legal5: "Hubungi Kami",
    cart1: "Keranjang Anda Masih Kosong",
    cart2: "Belanja Lagi",
    cart3: "Keranjang Belanja",
    cert1: "Sertifikasi LBMA",
    cert2: "Anggota DMCC",

    menu1: "Program Investasi",
    menu2: "Program Emas Eksklusif",
    menu3: "Aset masa depan yang paling aman adalah emas. Pilih program yang sesuai dengan profil risiko Anda",
    menu4: "Konsultasi via Telegram",
    menu5: "Semua program investasi dikelola secara profesional. Keamanan aset Anda adalah prioritas utama kami",
    menu6: "",
    menu7: "",
    menu8: "",
    menu9: "",
    menu10: "",
    menu11: ""
  },

  ar: {    
    navBeli: "شراء الذهب",    
    navInvest: "برامج الاستثمار",    
    navVault: "الخزنة الآمنة",    
    navAbout: "من نحن",    
    navBtn: "ابدأ الاستثمار",         
    heroBadge: "شريك رسمي لـ PAMP Suisse في دبي",    
    heroTitle1: "احمِ ثروتك بـ",    
    heroTitle2: "الذهب الخالص السويسري",    
    heroDesc: "شراء وبيع وتخزين سبائك الذهب الخالص عيار 999.9 PAMP. منشأة تخزين خالية من الضرائب في مركز دبي للسلع المتعددة (DMCC) بمعايير أمان عالية.",    
    heroBtn1: "عرض المنتجات",    
    heroBtn2: "حساب مؤسسي",         
    uspTax: "٠٪ ضريبة (الإمارات)",    
    uspInsurance: "تأمين كامل ١٠٠٪",    
    uspLbma: "شهادة LBMA",         
    sectionTitle: "منتجات PAMP الشهيرة",    
    linkKatalog: "عرض الكتالوج الكامل",    
    estPrice: "السعر التقديري",
    purityText: "الذهب الخالص عيار 999.9",    
    addToCart: "أضف إلى السلة",
    telegramMsg: "مرحباً مدير النظام، أود فتح حساب مؤسسي.%0A%0Aالاسم: {name}%0Aالشركة: {company}%0Aالعنوان: {address}%0Aالهاتف: {phone}%0Aالبريد الإلكتروني: {email}%0Aاسم البنك: {bankName}%0AIBAN: {iban}%0Aرقم الحساب: {bankAccount}%0Aتقدير الشراء: {totalKilo}",
    // Why PAMP Section
    whyTitle: "لماذا PAMP Gold Dubai؟",
    whyDesc: "المزيج المثالي بين الدقة السويسرية والتميز المالي في دبي لتأمين محفظتك الاستثمارية.",
    why1Title: "الدقة السويسرية وشهادة LBMA",
    why1Desc: "يتم إنتاج كل سبائك ذهب PAMP في سويسرا بمعيار نقاء 999.9. معترف بها عالمياً من قبل LBMA (رابطة سوق سبائك لندن).",
    why2Title: "تخزين آمن في مركز دبي للسلع المتعددة (DMCC)",
    why2Desc: "خيار تخزين الذهب المادي الخاص بك في خزنة عالية المستوى في منطقة مركز دبي للسلع المتعددة. مضمون بالكامل من قبل تأمين عالمي.",
    why3Title: "معفاة من الضرائب وسائلة",
    why3Desc: "استفد من حالة الإعفاء الضريبي للاستثمار في الذهب في الإمارات العربية المتحدة. تتيح لك منصتنا إعادة بيع ذهبك فورياً 24/7.",
  footerDesc: "موزع وشريك رسمي لمنتجات المعادن الثمينة PAMP Suisse في منطقة الشرق الأوسط. تأمين ثروة الأجيال.",
    prodTitle: "منتجات الذهب",
    prod1: "سبائك مسكوك (ليدي فورتونا)",
    prod2: "سبائك مصبوبة",
    prod3: "سلسلة لونا",
    prod4: "العملات الذهبية السيادية",
    prod5: "سعر السوق المباشر",
    
    servTitle: "خدماتنا",
    serv1: "تخزين الخزنة في DMCC",
    serv2: "التوصيل المضمون",
    serv3: "برنامج توفير الذهب",
    serv4: "خدمات إعادة الشراء (Buyback)",
    serv5: "حسابات مؤسسية B2B",
    
    legalTitle: "القانون والدعم",
    legal1: "من نحن",
    legal2: "الشروط والأحكام",
    legal3: "سياسة الخصوصية",
    legal4: "الأسئلة الشائعة",
    legal5: "اتصل بنا",
    cart1: "سلة التسوق فارغة.",
  cart2: "مواصلة التسوق",
  cart3: "سلة التسوق",
    cert1: "شهادة LBMA",
    cert2: "عضو في DMCC",

    menu1: "خطط الاستثمار",
    menu2: "برنامج الذهب الحصري",
    menu3: "أكثر الأصول أماناً للمستقبل هو الذهب. اختر برنامج الاستثمار الذي يتناسب مع مستوى المخاطر الخاص بك.",
    menu4: "استشارة عبر تيليجرام",
    menu5: "تتم إدارة جميع برامج الاستثمار باحترافية. أمن أصولكم هو أولويتنا القصوى.",
    menu6: "",
    menu7: "",
    menu8: "",
    menu9: "",
    menu10: "",
    menu11: ""
  }
};

const products = [
  { id: 1, name: 'PAMP Lady Fortuna', weight: '1 oz', purity: '999.9 Emas Murni', price: '$2,410.00', type: 'Minted Bar', image: '/images/pamp1oz.png' },
  { id: 2, name: 'PAMP Cast Bar', weight: '100 g', purity: '999.9 Emas Murni', price: '$7,650.00', type: 'Cast Bar', image: '/images/pamp100g.png' }, 
  { id: 3, name: 'PAMP Lady Fortuna', weight: '10 g', purity: '999.9 Emas Murni', price: '$805.00', type: 'Minted Bar', image: '/images/pamp5g.png' },
  { id: 4, name: 'PAMP Cast Bar', weight: '1 kg', purity: '999.9 Emas Murni', price: '$76,200.00', type: 'Cast Bar', image: '/images/pamp1kg.png' },
  { id: 5, name: 'PAMP Lady Fortuna', weight: "1 g", purity: '999.9 Emas Murni', price: '$90.00', type: 'Minted Bar', image: '/images/pamp5g.png' },
  { id: 6, name: 'PAMP Lady Fortuna', weight: "5 g", purity: '999.9 Emas Murni', price: '$420.00', type: 'Minted Bar', image: '/images/pamp5g.png' },
];

const [selectedImage, setSelectedImage] = useState(null);

const [cart, setCart] = useState([]);
const [isCartOpen, setIsCartOpen] = useState(false); // State untuk pop-up keranjang

const addToCart = (product) => {
  const existingIndex = cart.findIndex(item => item.id === product.id);
  if (existingIndex >= 0) {
    // Jika produk sudah ada, tambah kuantitinya
    const updatedCart = [...cart];
    updatedCart[existingIndex].quantity += 1;
    setCart(updatedCart);
  } else {
    // Jika belum ada, tambahkan dengan kuantiti 1
    setCart([...cart, { ...product, quantity: 1 }]);
  }
  setIsCartOpen(true); // Buka pop-up otomatis saat produk dimasukkan
};

const updateQuantity = (index, change) => {
  const updatedCart = [...cart];
  updatedCart[index].quantity += change;
  
  // Hapus item jika kuantiti habis atau kurang dari 1
  if (updatedCart[index].quantity <= 1) {
    updatedCart[index].quantity = 1;
  }
  setCart(updatedCart);
};

const removeFromCart = (index) => {
  const newCart = cart.filter((_, i) => i !== index);
  setCart(newCart);
};

const [isInvestOpen, setIsInvestOpen] = useState(false);

const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
  <div
    dir={lang === "ar" ? "rtl" : "ltr"}
    className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-yellow-600 selection:text-white"
  >

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-gray-800/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      
      {/* Kiri: Logo & Tombol Menu Mobile */}
      <div className="flex items-center space-x-3">
        {/* Tombol Hamburger / Menu HP */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none cursor-pointer bg-transparent border-none p-0"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="flex flex-col cursor-pointer">
          <span className="text-2xl font-serif font-bold tracking-wider bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
            PAMP
          </span>
          <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mt-[-4px]">
            Gold Dubai
          </span>
        </div>
      </div>

      {/* Tengah: Menu Desktop (Disembunyikan di HP) */}
      <div className="hidden md:flex space-x-8 items-center">
        <a href="#products" className="text-sm font-medium hover:text-yellow-500 transition-colors text-gray-300">
          {translations[lang].navBeli}
        </a>
        <button 
          onClick={() => setIsInvestOpen(true)}
          className="text-sm font-medium hover:text-yellow-500 transition-colors bg-transparent border-none p-0 cursor-pointer text-gray-300"
        >
          {translations[lang].navInvest}
        </button>
        <a href="#storage" className="text-sm font-medium hover:text-yellow-500 transition-colors text-gray-300">
          {translations[lang].navVault}
        </a>
        <a href="#about" className="text-sm font-medium hover:text-yellow-500 transition-colors text-gray-300">
          {translations[lang].navAbout}
        </a>
      </div>

      {/* Kanan: Aksi (Keranjang & Translate) */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setIsCartOpen(true)}
          className="text-gray-300 hover:text-yellow-500 transition-colors relative cursor-pointer bg-transparent border-none p-0"
        >
          <ShoppingCart size={20} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
          className="text-xs font-bold uppercase tracking-wider border border-gray-700 text-gray-300 hover:text-yellow-500 rounded-sm px-3 py-1 cursor-pointer transition-colors bg-transparent"
        >
          {lang === 'en' ? 'EN' : 'AR'}
        </button>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-5 py-2.5 rounded-sm text-sm font-bold hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-all uppercase tracking-wide cursor-pointer"
        >
          {translations[lang].navBtn}
        </button>
      </div>
    </div>

    {/* Menu Dropdown Mobile (Hanya muncul jika isMenuOpen true) */}
    {isMenuOpen && (
      <div className="md:hidden py-4 border-t border-gray-800/50 flex flex-col space-y-4 animate-fadeIn">
        <a 
          href="#products" 
          onClick={() => setIsMenuOpen(false)}
          className="text-sm font-medium text-gray-300 hover:text-yellow-500 py-2 border-b border-gray-800/30"
        >
          {translations[lang].navBeli}
        </a>
        <button 
          onClick={() => {
            setIsMenuOpen(false);
            setIsInvestOpen(true);
          }}
          className="text-sm font-medium text-gray-300 hover:text-yellow-500 py-2 border-b border-gray-800/30 text-left bg-transparent border-none p-0 cursor-pointer"
        >
          {translations[lang].navInvest}
        </button>
        <a 
          href="#storage" 
          onClick={() => setIsMenuOpen(false)}
          className="text-sm font-medium text-gray-300 hover:text-yellow-500 py-2 border-b border-gray-800/30"
        >
          {translations[lang].navVault}
        </a>
        <a 
          href="#about" 
          onClick={() => setIsMenuOpen(false)}
          className="text-sm font-medium text-gray-300 hover:text-yellow-500 py-2"
        >
          {translations[lang].navAbout}
        </a>
      </div>
    )}
  </div>
</nav>

      {/* Hero Section */}
<div className="relative overflow-hidden bg-[#0a0a0a] py-16 md:py-24">
  {/* Background Gradient */}
  <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12">
    
    {/* Bagian Kiri: Teks */}
    <div className="w-full lg:w-1/2 space-y-6">
      <div className="inline-flex items-center space-x-2 bg-yellow-900/20 border border-yellow-600/20 px-4 py-1.5 rounded backdrop-blur-sm">
      <ShieldCheck size={16} className="text-yellow-500 flex-shrink-0" />
        <span className="text-xs font-medium text-yellow-500 tracking-wider uppercase">{translations[lang].heroBadge}</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-white">
        {translations[lang].heroTitle1} <br />
        <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent italic">
          {translations[lang].heroTitle2}
        </span>
      </h1>
      
      <p className="text-gray-400 text-base md:text-lg max-w-lg font-light leading-relaxed">
        {translations[lang].heroDesc}
      </p>
      
      <div className="flex flex-wrap gap-4 pt-2">
        <a href="#products"
           className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-8 py-3 rounded font-bold flex items-center transition-all shadow-lg shadow-yellow-500/10 cursor-pointer justify-center">
          {translations[lang].heroBtn1}
        </a>
      </div>

      {/* USP / Keunggulan Bawah */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
  <div className="bg-gray-800 p-4 rounded-lg text-center">
    <h3 className="text-xl font-bold text-yellow-500">0%</h3>
    <p className="text-gray-300 text-sm">{translations[lang].uspTax}</p>
  </div>
  <div className="bg-gray-800 p-4 rounded-lg text-center">
    <h3 className="text-xl font-bold text-yellow-500">100%</h3>
    <p className="text-gray-300 text-sm">{translations[lang].uspInsurance}</p>
  </div>
  <div className="bg-gray-800 p-4 rounded-lg text-center">
    <h3 className="text-xl font-bold text-yellow-500">LBMA</h3>
    <p className="text-gray-300 text-sm">{translations[lang].uspLbma}</p>
  </div>
</div>
    </div>

          <div className="lg:w-2/5 mt-16 lg:mt-0 relative perspective-1000">
            <div className="relative w-72 h-[450px] mx-auto transform rotate-y-12 rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
              <div className="absolute inset-0 bg-yellow-500 rounded-lg blur-[80px] opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-700 rounded-md shadow-2xl p-1 flex flex-col justify-between overflow-hidden border border-yellow-300/50">
                <div className="w-full h-full bg-gradient-to-b from-[#e6c27a] via-[#cfa34b] to-[#a67c00] rounded-sm flex flex-col items-center p-8 relative">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/30 to-transparent skew-x-12 translate-x-[-150%] animate-[shimmer_5s_infinite]"></div>
                  
                  <div className="mt-4 text-center">
                    <h3 className="text-black font-serif text-2xl font-bold tracking-widest mb-1">PAMP</h3>
                    <p className="text-yellow-900 text-xs tracking-widest font-bold">SUISSE</p>
                  </div>
                  
                  <div className="my-auto text-center border-t border-b border-yellow-800/30 py-4 w-full">
                    <p className="text-black font-bold text-lg tracking-widest">1 OUNCE</p>
                    <p className="text-black font-medium tracking-widest mt-2">FINE GOLD</p>
                    <p className="text-black font-bold tracking-widest text-xl">999.9</p>
                  </div>
                  
                  <div className="mt-auto text-center w-full">
                    <p className="text-yellow-900 text-[10px] tracking-widest font-bold mb-1">ESSAYEUR FONDEUR</p>
                    <div className="w-full h-10 border border-yellow-800/20 rounded flex items-center justify-center mt-2 bg-yellow-900/5">
                      <span className="text-black font-mono text-xs font-bold tracking-widest">C 048291</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="py-24 bg-[#0a0a0a]">
        <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-sm text-yellow-500 font-bold tracking-widest uppercase mb-2">{translations[lang].navBeli}</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-white">{translations[lang].sectionTitle}</h3>
            </div>
            <a href="#" className="text-yellow-500 hover:text-yellow-400 flex items-center text-sm font-medium mt-4 md:mt-0 transition-colors uppercase tracking-wide">
              {translations[lang].linkKatalog} <ChevronRight size={16} className="ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-[#111] border border-gray-800 hover:border-yellow-600/50 rounded-sm p-10 group transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-3 right-2 text-[10px] text-gray-500 uppercase tracking-widest border border-gray-800 px-2 py-1 rounded-sm">
                  {product.type}
                </div>
                
                <div className="h-55 w-full mb-10 flex items-center justify-center">
  <img 
     src={product.image} 
     alt={product.name} 
     onClick={() => setSelectedImage(product.image)}
     className="w-full h-60 object-contain cursor-pointer transition-transform duration-300 hover:scale-105" />
</div>

                <h4 className="text-lg font-medium text-white mb-1 group-hover:text-yellow-500 transition-colors">{product.name}</h4>
                <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
                  <span dir="ltr">{product.weight}</span>
                  <span>•</span>
                  <span dir="ltr">{translations[lang].purityText}</span>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">{translations[lang].estPrice}</p>
                    <p className="text-xl font-bold text-white">{product.price}</p>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="mt-8 w-10 bg-yellow-600 hover:bg-yellow-500 text-black py-3 rounded-sm flex items-center transition-colors shadow-sm cursor-pointer">
                    <ShoppingCart size={35} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Dubai & PAMP Features */}
<div className="py-24 bg-[#050505] border-y border-gray-800/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">{translations[lang].whyTitle}</h2>
      <p className="text-gray-400">{translations[lang].whyDesc}</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="bg-[#0a0a0a] p-8 border border-gray-800 rounded-sm hover:-translate-y-2 transition-transform duration-300">
        <div className="w-14 h-14 bg-yellow-900/20 rounded-full flex items-center justify-center mb-6">
          <Gem size={28} className="text-yellow-500" />
        </div>
        <h3 className="text-xl font-medium text-white mb-3">{translations[lang].why1Title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {translations[lang].why1Desc}
        </p>
      </div>

      <div className="bg-[#0a0a0a] p-8 border border-gray-800 rounded-sm hover:-translate-y-2 transition-transform duration-300">
        <div className="w-14 h-14 bg-yellow-900/20 rounded-full flex items-center justify-center mb-6">
          <Lock size={28} className="text-yellow-500" />
        </div>
        <h3 className="text-xl font-medium text-white mb-3">{translations[lang].why2Title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {translations[lang].why2Desc}
        </p>
      </div>

      <div className="bg-[#0a0a0a] p-8 border border-gray-800 rounded-sm hover:-translate-y-2 transition-transform duration-300">
        <div className="w-14 h-14 bg-yellow-900/20 rounded-full flex items-center justify-center mb-6">
          <BarChart3 size={28} className="text-yellow-500" />
        </div>
        <h3 className="text-xl font-medium text-white mb-3">{translations[lang].why3Title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {translations[lang].why3Desc}
        </p>
      </div>
    </div>
  </div>
</div>

      {/* Footer */}
      <footer className="bg-[#000000] pt-20 pb-10 border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
      <div className="lg:col-span-2">
        <div className="flex flex-col mb-6">
          <span className="text-2xl font-serif font-bold tracking-wider text-yellow-500">PAMP</span>
          <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mt-[-4px]">Gold Dubai</span>
        </div>
        <p className="text-gray-500 text-sm mb-8 max-w-sm leading-relaxed">
          {translations[lang].footerDesc}
        </p>
        <div className="space-y-3 text-gray-400 text-sm">
          <div className="flex items-start">
            <MapPin size={18} className="mr-3 text-yellow-600 shrink-0 mt-0.5" />
            <span>Almas Tower, Jumeirah Lakes Towers (JLT),<br/>Dubai, United Arab Emirates</span>
          </div>
          <div className="flex items-center">
            <Phone size={18} className="mr-3 text-yellow-600 shrink-0" />
            <span dir="ltr">+971 4 123 4567</span>
          </div>
          <div className="flex items-center">
            <Mail size={18} className="mr-3 text-yellow-600 shrink-0" />
            <span>invest@pampdubai.com</span>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">{translations[lang].prodTitle}</h4>
        <ul className="space-y-4 text-sm text-gray-500">
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{translations[lang].prod1}</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{translations[lang].prod2}</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{translations[lang].prod3}</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{translations[lang].prod4}</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{translations[lang].prod5}</a></li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">{translations[lang].servTitle}</h4>
        <ul className="space-y-4 text-sm text-gray-500">
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{translations[lang].serv1}</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{translations[lang].serv2}</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{translations[lang].serv3}</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{translations[lang].serv4}</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{translations[lang].serv5}</a></li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">{translations[lang].legalTitle}</h4>
        <ul className="space-y-4 text-sm text-gray-500">
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{translations[lang].legal1}</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{translations[lang].legal2}</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{translations[lang].legal3}</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{translations[lang].legal4}</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">{translations[lang].legal5}</a></li>
        </ul>
      </div>
    </div>
    
    <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
      <p>&copy; {new Date().getFullYear()} PAMP Gold Dubai. All rights reserved.</p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <span className="border border-gray-800 px-3 py-1 rounded-sm">{translations[lang].cert1}</span>
        <span className="border border-gray-800 px-3 py-1 rounded-sm">{translations[lang].cert2}</span>
      </div>
    </div>
  </div>
</footer>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% {
            transform: translateX(100%) skewX(12deg);
          }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

{isModalOpen && (
  <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
    {/* Tambahkan min-h-screen dan my-auto agar form selalu proporsional dan tidak terpotong atasnya */}
    <div className="bg-[#111111] border border-gray-800 rounded-lg max-w-md w-full p-6 relative shadow-2xl my-auto min-h-[50vh]">
      
      {/* Tombol Close */}
      <button 
        onClick={() => setIsModalOpen(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl cursor-pointer z-10"
      >
        &times;
      </button>

      <h2 className="text-xl font-serif text-white mb-4 font-bold border-b border-gray-800 pb-2">
        {lang === 'id' ? 'Form Akun Investment' : lang === 'ar' ? 'نموذج فتح حساب استثماري' : 'Investment Account Form'}
      </h2>

      <form 
        onSubmit={(e) => {
          e.preventDefault();
          
          let message = "";
          if (lang === "id") {
            message = `Halo Admin, saya ingin berinvestasi.%0A%0ANama: ${formInvestment.name}%0APerusahaan: ${formInvestment.company}%0AAlamat: ${formInvestment.address}%0ATelepon: \u200E${formInvestment.phoneNumber}%0AEmail: ${formInvestment.email}%0ANama Bank: ${formInvestment.bankName}%0AIBAN: ${formInvestment.iban}%0ANo Rekening: ${formInvestment.bankAccount}%0AEstimasi Pembelian: ${formInvestment.totalInvestment}`;
          } else if (lang === "ar") {
            message = `مرحباً، أرغب في الاستثمار.%0A%0Aالاسم: ${formInvestment.name}%0Aالشركة: ${formInvestment.company}%0Aالعنوان: ${formInvestment.address}%0Aالهاتف: \u200E${formInvestment.phoneNumber}%0Aالبريد الإلكتروني: ${formInvestment.email}%0Aاسم البنك: ${formInvestment.bankName}%0AIBAN: \u200E${formInvestment.iban}%0Aرقم الحساب: \u200E${formInvestment.bankAccount}%0Aتقدير الشراء: ${formInvestment.totalInvestment}`;
          } else {
            message = `مرحباً، أرغب في الاستثمار.%0A%0Aالاسم: ${formInvestment.name}%0Aالشركة: ${formInvestment.company}%0Aالعنوان: ${formInvestment.address}%0Aالهاتف: ${formInvestment.phoneNumber}%0Aالبريد الإلكتروني: ${formInvestment.email}%0Aاسم البنك: ${formInvestment.bankName}%0Aرقم الآيبان (IBAN): ${formInvestment.iban}%0Aرقم الحساب البنكي: ${formInvestment.bankAccount}%0Aقيمة الاستثمار التقديرية: ${formInvestment.totalInvestment}`;
          }
          
          window.open(`https://t.me/Pampgolddubai?text=${message}`, '_blank');
          setIsModalOpen(false);
        }} 
        className="space-y-3 text-sm"
      >
        <div>
          <label className="block text-xs text-gray-400 mb-1">
            {lang === 'en' ? 'Full Name' : lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}
          </label>
          <input 
            type="text" 
            name="name"
            required
            className="w-full bg-black/50 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500"
            value={formInvestment.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-1">
            {lang === 'en' ? 'Company Name' : lang === 'ar' ? 'اسم الشركة' : 'Company Name'}
          </label>
          <input 
            type="text" 
            name="company"
            required
            className="w-full bg-black/50 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500"
            value={formInvestment.company}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-1">
            {lang === 'en' ? 'Address' : lang === 'ar' ? 'العنوان' : 'Address'}
          </label>
          <input 
            type="text" 
            name="address"
            required
            className="w-full bg-black/50 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500"
            value={formInvestment.address}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-1">
            {lang === 'en' ? 'Phone Number' : lang === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
          </label>
          <input 
            type="text" 
            name="phoneNumber"
            required
            className="w-full bg-black/50 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500"
            value={formInvestment.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-1">Email</label>
          <input 
            type="email" 
            name="email"
            required
            className="w-full bg-black/50 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500"
            value={formInvestment.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-1">
            {lang === 'en' ? 'Bank Name' : lang === 'ar' ? 'اسم البنك' : 'Bank Name'}
          </label>
          <input 
            type="text" 
            name="bankName"
            required
            className="w-full bg-black/50 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500"
            value={formInvestment.bankName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-1">IBAN</label>
          <input 
            type="text" 
            name="iban"
            required
            className="w-full bg-black/50 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500"
            value={formInvestment.iban}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-1">
            {lang === 'en' ? 'Bank Account Number' : lang === 'ar' ? 'رقم الحساب' : 'Bank Account Number'}
          </label>
          <input 
            type="text" 
            name="bankAccount"
            required
            className="w-full bg-black/50 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500"
            value={formInvestment.bankAccount}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-1">
            {lang === 'en' ? 'Estimated Purchase' : lang === 'ar' ? 'تقدير الشراء' : 'Estimated Purchase'}
          </label>
          <input 
            type="text" 
            name="totalInvestment"
            placeholder={lang === 'en' ? 'Example: 50 Kg' : lang === 'ar' ? 'مثال: 50 كجم' : 'Example: 50 Kg'}
            required
            className="w-full bg-black/50 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500"
            value={formInvestment.totalInvestment}
            onChange={handleChange}
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold py-3 rounded transition-all mt-4 cursor-pointer"
        >
          {lang === 'en' ? 'Send Request via Telegram' : lang === 'ar' ? 'إرسال الطلب عبر تليجرام' : 'Send Request via Telegram'}
        </button>
      </form>
   </div>
  </div>
)}
{isCartOpen && (
  <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
    {/* Panel pop-up keranjang (mengambil sisi kanan layar) */}
    <div className="w-full max-w-md bg-[#0a0a0a] h-full shadow-2xl p-6 overflow-y-auto border-l border-gray-800 flex flex-col relative">
      
      {/* Header Pop-up */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-800">
        <h3 className="text-xl font-serif text-white tracking-wider">{translations[lang].cart3}</h3>
        <button 
          onClick={() => setIsCartOpen(false)}
          className="text-gray-400 hover:text-white cursor-pointer p-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Isi Keranjang */}
      {cart.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-500">
          <p className="mb-4">{translations[lang].cart1}</p>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="border border-gray-700 px-6 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded cursor-pointer"
          >
            {translations[lang].cart2}
          </button>
        </div>
      ) : (
        <>
          <div className="flex-1 space-y-4 overflow-y-auto pr-1">
            {cart.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-[#141414] p-3 border border-gray-800 rounded-sm">
                {/* Foto Produk */}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 object-contain bg-black rounded border border-gray-700/50 p-1"
                />
                
                {/* Detail Produk */}
                <div className="flex-1">
                  <h4 className="text-white text-sm font-medium leading-tight">{item.name}</h4>
                  <p className="text-gray-400 text-xs mt-0.5">{item.weight} | {item.price}</p>
                  
                  {/* Kontrol Kuantiti */}
                  <div className="flex items-center gap-3 mt-2">
                    <button 
                      onClick={() => updateQuantity(index, -1)}
                      className="text-gray-400 hover:text-white bg-gray-800 px-2 py-0.5 rounded text-xs cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-white text-xs font-bold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(index, 1)}
                      className="text-gray-400 hover:text-white bg-gray-800 px-2 py-0.5 rounded text-xs cursor-pointer"
                    >
                      +
                    </button>
                    <button
    onClick={() => removeFromCart(index)}
    className="ml-auto text-red-500 hover:text-red-400 transition cursor-pointer"
  >
    <Trash2 size={18} />
  </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Checkout Telegram */}
          <div className="mt-6 pt-4 border-t border-gray-800">
            <button 
              onClick={() => {
  let message = "";

  if (lang === "id") {
    message = "Halo Admin, saya ingin memesan produk berikut:%0A%0A";
  } else if (lang === "ar") {
    message = "مرحباً، أود طلب المنتجات التالية:%0A%0A";
  } else {
    message = "Hello Admin, I would like to order the following products:%0A%0A";
  }

  cart.forEach((item, idx) => {
    message += `${idx + 1}. ${item.name} (${item.weight}) x ${item.quantity} - ${item.price}%0A`;
  });
                // Ganti username_admin dengan username telegram Anda
                window.open(`https://t.me/Pampgolddubai?text=${message}`, '_blank');
              }}
              className="w-full bg-yellow-600 hover:bg-yellow-500 text-black py-4 rounded-sm font-bold tracking-wide transition-colors cursor-pointer text-sm"
            >
              Checkout via Telegram
            </button>
          </div>
        </>
      )}

    </div>
  </div>
)}

{isInvestOpen && (
  <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
    <div 
      className="absolute inset-0 bg-black/80 backdrop-blur-md"
      onClick={() => setIsInvestOpen(false)}
    ></div>
    <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-gray-800 rounded-sm shadow-2xl flex flex-col max-h-[90vh]">
      <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-[#0d0d0d]">
        <div>
          <h3 className="text-xl font-serif text-white tracking-widest uppercase">{translations[lang].menu1}</h3>
          <p className="text-[10px] text-yellow-600 tracking-[0.2em] uppercase mt-1">{translations[lang].menu2}</p>
        </div>
        <button 
          onClick={() => setIsInvestOpen(false)}
          className="text-gray-500 hover:text-white transition-colors p-2 cursor-pointer bg-transparent border-none"
        >
          ✕
        </button>
      </div>
      <div className="p-6 overflow-y-auto space-y-6">
        <p className="text-gray-400 text-sm leading-relaxed text-center italic">
          {translations[lang].menu3}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#141414] border border-gray-800 p-5 rounded-sm flex flex-col">
            <h4 className="text-yellow-500 font-serif text-lg mb-1 tracking-wide">Starter Plan</h4>
            <span className="text-[10px] text-gray-500 mb-4 italic">Estimated return 5-7% p.a</span>
            <div className="text-2xl font-bold text-white mb-4">$1,000 <span className="text-xs text-gray-500 font-normal">min. deposit</span></div>
            <ul className="text-[11px] text-gray-400 space-y-2 mb-6 flex-1">
              <li>• Physical Gold Certificate</li>
              <li>• 24/7 Digital Monitoring</li>
              <li>• Buy-back Guarantee</li>
            </ul>
            <button 
              onClick={() => window.open(`https://t.me/Pampgolddubai?text=Halo admin, saya tertarik dengan Starter Plan ($1,000)`, '_blank')}
              className="w-full bg-yellow-600 hover:bg-yellow-500 text-black py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer"
            >
              {translations[lang].menu4}
            </button>
          </div>
          <div className="bg-[#141414] border border-yellow-900/30 p-5 rounded-sm flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-600 text-black text-[8px] font-bold px-2 py-1 uppercase">Best Seller</div>
            <h4 className="text-yellow-500 font-serif text-lg mb-1 tracking-wide">Elite Plan</h4>
            <span className="text-[10px] text-gray-500 mb-4 italic">Estimated return 8-12% p.a</span>
            <div className="text-2xl font-bold text-white mb-4">$10,000 <span className="text-xs text-gray-500 font-normal">min. deposit</span></div>
            <ul className="text-[11px] text-gray-400 space-y-2 mb-6 flex-1">
              <li>• Priority Vault Storage</li>
              <li>• Monthly Portfolio Report</li>
              <li>• Dedicated Account Manager</li>
              <li>• Physical Delivery Option</li>
            </ul>
            <button 
              onClick={() => window.open(`https://t.me/Pampgolddubai?text=Halo admin, saya tertarik dengan Elite Plan ($10,000)`, '_blank')}
              className="w-full bg-yellow-600 hover:bg-yellow-500 text-black py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer"
            >
              {translations[lang].menu4}
            </button>
          </div>
        </div>
        <div className="p-4 bg-yellow-950/10 border border-yellow-900/20 rounded-sm">
          <p className="text-[10px] text-yellow-600 text-center leading-relaxed">
            {translations[lang].menu5}
          </p>
        </div>
      </div>
    </div>
  </div>
)}
</div>
);
}
