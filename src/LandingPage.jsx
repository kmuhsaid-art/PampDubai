import React, { useState, useEffect } from "react";
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

  export default function LandingPage() {
  const [lang, setLang] = useState("en");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formInvestment, setFormInvestment] = useState({
    name: "",
    address: "",
    phoneNumber: "",
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

const productsData = [
  {
    id: 'MintedBar-1g',
    name: 'Lady Fortuna™ Gold Minted Bar 1 g',
    weight: 1,
    // Sediakan array berisi link gambar Anda
    images: [
      '/images/1g.png', 
      '/images/1g2.png'
    ],
    description: `Lady Fortuna™ Gold Minted Bar - 1g
PAMP was the first precious metals brand to ever decorate the reverse sides of its minted bars. Introduced in 1979, the Lady Fortuna™ was the original of those artistic motifs and is today world-renowned as a trusted symbol assuring PAMP quality excellence and authenticity. With a distinctive proof-like finish, the Roman goddess of prosperity is portrayed with all her mythical attributes: Sheaves of wheat, poppies, horn of plenty, precious coins, and wheel of fortune. Undoubtedly, the iconic Lady Fortuna™ image is the most recognized and prestigious bullion bar design in the world. Accredited by the Swiss Federal Bureau, each bar is individually registered and sealed within protective CertiPAMP™ packaging with an integrated and official Assay Certificate that guarantees fine precious metal content and weight, protected with a removable film.
Metal:
Gold 999.9

Weight:
1 Gram

Thickness:
0.40mm

Design:
Lady Fortuna

SKU:
ZAUFS00067

Size (mm):
8.9 x 14.7`
  },
  {
    id: 'MintedBar-5g',
    name: 'Lady Fortuna™ Gold Minted Bar 5 g',
    weight: 5,
    // Sediakan array berisi link gambar Anda
    images: [
      '/images/5g.png', 
      '/images/5g2.png'
    ],
    description: `Lady Fortuna™ Gold Minted Bar - 5g
PAMP was the first precious metals brand to ever decorate the reverse sides of its minted bars. Introduced in 1979, the Lady Fortuna™ was the original of those artistic motifs and is today world-renowned as a trusted symbol assuring PAMP quality excellence and authenticity. With a distinctive proof-like finish, the Roman goddess of prosperity is portrayed with all her mythical attributes: Sheaves of wheat, poppies, horn of plenty, precious coins, and wheel of fortune. Undoubtedly, the iconic Lady Fortuna™ image is the most recognized and prestigious bullion bar design in the world. Accredited by the Swiss Federal Bureau, each bar is individually registered and sealed within protective CertiPAMP™ packaging with an integrated and official Assay Certificate that guarantees fine precious metal content and weight, protected with a removable film.
Metal:
Gold 999.9

Weight:
5 Grams

Thickness:
0.90 mm

Design:
Lady Fortuna

SKU:
ZAUFS00079

Size (mm):
13.1 x 22.1`
  },
  {
    id: 'Minted Bar 1oz',
    name: 'Lady Fortuna™ Gold Minted Bar 1 Oz',
    weight: 31.1,
    // Sediakan array berisi link gambar Anda
    images: [
      '/images/1ounce.png', 
      '/images/1ounce2.png'
    ],
    description: `Lady Fortuna™ Gold Minted Bar - 1oz (Carbon Reduced)
PAMP was the first precious metals brand to ever decorate the reverse sides of its minted bars. Introduced in 1979, the Lady Fortuna™ was the original of those artistic motifs and is today world-renowned as a trusted symbol assuring PAMP quality excellence and authenticity. With a distinctive proof-like finish, the Roman goddess of prosperity is portrayed with all her mythical attributes: Sheaves of wheat, poppies, horn of plenty, precious coins, and wheel of fortune. Undoubtedly, the iconic Lady Fortuna™ image is the most recognized and prestigious bullion bar design in the world. Accredited by the Swiss Federal Bureau, each bar is individually registered and sealed within protective CertiPAMP™ packaging with an integrated and official Assay Certificate that guarantees fine precious metal content and weight, protected with a removable film.
Metal:
Gold 999.9

Weight:
1 Ounce

Thickness:
1.73mm

Design:
Lady Fortuna

SKU:
ZAUFS00610 & ZAUFS00606

Size (mm):
24 x 41`
  },
  {
    id: 'MintedBar-10g',
    name: 'Lady Fortuna™ Gold Minted Bar 10 g',
    weight: 10,
    // Sediakan array berisi link gambar Anda
    images: [
      '/images/10g.png', 
      '/images/10g2.png'
    ],
    description: `Lady Fortuna™ Gold Minted Bar - 10g
PAMP was the first precious metals brand to ever decorate the reverse sides of its minted bars. Introduced in 1979, the Lady Fortuna™ was the original of those artistic motifs and is today world-renowned as a trusted symbol assuring PAMP quality excellence and authenticity. With a distinctive proof-like finish, the Roman goddess of prosperity is portrayed with all her mythical attributes: Sheaves of wheat, poppies, horn of plenty, precious coins, and wheel of fortune. Undoubtedly, the iconic Lady Fortuna™ image is the most recognized and prestigious bullion bar design in the world. Accredited by the Swiss Federal Bureau, each bar is individually registered and sealed within protective CertiPAMP™ packaging with an integrated and official Assay Certificate that guarantees fine precious metal content and weight, protected with a removable film.
Metal:
Gold 999.9

Weight:
10 Grams

Thickness:
1.25mm

Design:
Lady Fortuna

SKU:
ZAUFS00084

Size (mm):
15.8 x 26.5`
  },
  {
    id: 'MintedBar-20g',
    name: 'Lady Fortuna™ Gold Minted Bar 20 g',
    weight: 20,
    // Sediakan array berisi link gambar Anda
    images: [
      '/images/20g.png', 
      '/images/20g2.png'
    ],
    description: `Lady Fortuna™ Gold Minted Bar - 20g
PAMP was the first precious metals brand to ever decorate the reverse sides of its minted bars. Introduced in 1979, the Lady Fortuna™ was the original of those artistic motifs and is today world-renowned as a trusted symbol assuring PAMP quality excellence and authenticity. With a distinctive proof-like finish, the Roman goddess of prosperity is portrayed with all her mythical attributes: Sheaves of wheat, poppies, horn of plenty, precious coins, and wheel of fortune. Undoubtedly, the iconic Lady Fortuna™ image is the most recognized and prestigious bullion bar design in the world. Accredited by the Swiss Federal Bureau, each bar is individually registered and sealed within protective CertiPAMP™ packaging with an integrated and official Assay Certificate that guarantees fine precious metal content and weight, protected with a removable film.
Metal:
Gold 999.9

Weight:
20 Grams

Thickness:
1.88 mm

Design:
Lady Fortuna

SKU:
ZAUFS00089

Size (mm):
18 x 31`
  },
  {
    id: 'MintedBar-50g',
    name: 'Lady Fortuna™ Gold Minted Bar 50 g',
    weight: 50,
    // Sediakan array berisi link gambar Anda
    images: [
      '/images/50g.png', 
      '/images/50g2.png'
    ],
    description: `Lady Fortuna™ Gold Minted Bar - 50g
PAMP was the first precious metals brand to ever decorate the reverse sides of its minted bars. Introduced in 1979, the Lady Fortuna™ was the original of those artistic motifs and is today world-renowned as a trusted symbol assuring PAMP quality excellence and authenticity. With a distinctive proof-like finish, the Roman goddess of prosperity is portrayed with all her mythical attributes: Sheaves of wheat, poppies, horn of plenty, precious coins, and wheel of fortune. Undoubtedly, the iconic Lady Fortuna™ image is the most recognized and prestigious bullion bar design in the world. Accredited by the Swiss Federal Bureau, each bar is individually registered and sealed within protective CertiPAMP™ packaging with an integrated and official Assay Certificate that guarantees fine precious metal content and weight, protected with a removable film.
Metal:
Gold 999.9

Weight:
50 Grams

Thickness:
2.06mm

Design:
Lady Fortuna

SKU:
ZAUFS00614 & ZAUFS00093

Size (mm):
27 x 47`
  },
  {
    id: 'MintedBar-100g',
    name: 'Lady Fortuna™ Gold Minted Bar 100 g',
    weight: 100,
    // Sediakan array berisi link gambar Anda
    images: [
      '/images/100g.png', 
      '/images/100g2.png'
    ],
    description: `Lady Fortuna™ Gold Minted Bar - 100g
PAMP was the first precious metals brand to ever decorate the reverse sides of its minted bars. Introduced in 1979, the Lady Fortuna™ was the original of those artistic motifs and is today world-renowned as a trusted symbol assuring PAMP quality excellence and authenticity. With a distinctive proof-like finish, the Roman goddess of prosperity is portrayed with all her mythical attributes: Sheaves of wheat, poppies, horn of plenty, precious coins, and wheel of fortune. Undoubtedly, the iconic Lady Fortuna™ image is the most recognized and prestigious bullion bar design in the world. Accredited by the Swiss Federal Bureau, each bar is individually registered and sealed within protective CertiPAMP™ packaging with an integrated and official Assay Certificate that guarantees fine precious metal content and weight, protected with a removable film.
Metal:
Gold 999.9

Weight:
100 Grams

Thickness:
4.12mm

Design:
Lady Fortuna

SKU:
ZAUFS00615 & ZAUFS00476

Size (mm):
27 x 47`
  },
  {
    id: 'MintedBar-250g',
    name: 'Lady Fortuna™ Gold Minted Bar 250 g',
    weight: 250,
    // Sediakan array berisi link gambar Anda
    images: [
      '/images/250g.png', 
      '/images/250g2.png'
    ],
    description: `Lady Fortuna™ Gold Minted Bar - 250g
PAMP was the first precious metals brand to ever decorate the reverse sides of its minted bars. Introduced in 1979, the Lady Fortuna™ was the original of those artistic motifs and is today world-renowned as a trusted symbol assuring PAMP quality excellence and authenticity. With a distinctive proof-like finish, the Roman goddess of prosperity is portrayed with all her mythical attributes: Sheaves of wheat, poppies, horn of plenty, precious coins, and wheel of fortune. Undoubtedly, the iconic Lady Fortuna™ image is the most recognized and prestigious bullion bar design in the world. Accredited by the Swiss Federal Bureau, each bar is individually registered and sealed within protective CertiPAMP™ packaging with an integrated and official Assay Certificate that guarantees fine precious metal content and weight, protected with a removable film.
Metal:
Gold 999.9

Weight:
250 Grams

Thickness:
6.94 mm

Design:
Lady Fortuna

SKU:
ZAUFS00105

Size (mm):
35 x 60`
  },
  {
    id: 'MintedBar-500g',
    name: 'Lady Fortuna™ Gold Minted Bar 500 g',
    weight: 500,
    // Sediakan array berisi link gambar Anda
    images: [
      '/images/500g.png', 
      '/images/500g2.png'
    ],
    description: `Lady Fortuna™ Gold Minted Bar - 500g
PAMP was the first precious metals brand to ever decorate the reverse sides of its minted bars. Introduced in 1979, the Lady Fortuna™ was the original of those artistic motifs and is today world-renowned as a trusted symbol assuring PAMP quality excellence and authenticity. With a distinctive proof-like finish, the Roman goddess of prosperity is portrayed with all her mythical attributes: Sheaves of wheat, poppies, horn of plenty, precious coins, and wheel of fortune. Undoubtedly, the iconic Lady Fortuna™ image is the most recognized and prestigious bullion bar design in the world. Accredited by the Swiss Federal Bureau, each bar is individually registered and sealed within protective CertiPAMP™ packaging with an integrated and official Assay Certificate that guarantees fine precious metal content and weight, protected with a removable film.
Metal:
Gold 999.9

Weight:
500 Grams

Thickness:
5.62 mm

Design:
Lady Fortuna

SKU:
ZAUFS00106

Size (mm):
54 x 85.5`
  },
  {
    id: 'MintedBar-1kg',
    name: 'Lady Fortuna™ Gold Minted Bar 1 kg',
    weight: 1000,
    // Sediakan array berisi link gambar Anda
    images: [
      '/images/1kg.png', 
      '/images/1kg2.png'
    ],
    description: `Lady Fortuna™ Gold Minted Bar - 1 KG
PAMP was the first precious metals brand to ever decorate the reverse sides of its minted bars. Introduced in 1979, the Lady Fortuna™ was the original of those artistic motifs and is today world-renowned as a trusted symbol assuring PAMP quality excellence and authenticity. With a distinctive proof-like finish, the Roman goddess of prosperity is portrayed with all her mythical attributes: Sheaves of wheat, poppies, horn of plenty, precious coins, and wheel of fortune. Undoubtedly, the iconic Lady Fortuna™ image is the most recognized and prestigious bullion bar design in the world. Accredited by the Swiss Federal Bureau, each bar is individually registered and sealed within protective CertiPAMP™ packaging with an integrated and official Assay Certificate that guarantees fine precious metal content and weight, protected with a removable film.
Metal:
Gold 999.9

Weight:
1000 Grams

Thickness:
8.38 mm

Design:
Lady Fortuna

SKU:
ZAUFS00107

Size (mm):
52.5 x 118`
  },
];

// State untuk melacak produk mana yang sedang dibuka galeri fotonya
const [activeGalleryProduct, setActiveGalleryProduct] = useState(null);
// State untuk melacak indeks foto yang sedang aktif di dalam pop-up (foto ke-1 atau ke-2)
const [currentImageIndex, setCurrentImageIndex] = useState(0);

const calculateDiscountedPrice = (weightInGrams, currentLivePrice) => {
  // 1. Validasi: jika harga live belum siap, gunakan harga default AED 378.00
  const price = parseFloat(currentLivePrice) || 378.00;
  
  // 2. Tentukan persentase potongan berdasarkan tier berat emas
  let discount = 0;
  if (weightInGrams >= 1000) {
    discount = 0.05; // Diskon 5% untuk 1kg ke atas
  } else if (weightInGrams >= 50) {
    discount = 0.03; // Diskon 3% untuk 50g - 500g (termasuk 1 Ounce / 31.1g)
  } else if (weightInGrams >= 1) {
    discount = 0.015; // Diskon 1.5% untuk 1g - 25g
  }

  // 3. Kembalikan nilai harga satu gram setelah dipotong diskon
  return price * (1 - discount);
};

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

const updateQuantity = (productId, newQuantity) => {
  // Hapus item jika kuantiti habis atau kurang dari 1
  if (newQuantity < 1) {
    return;
  }
  setCart(prevCart =>
    prevCart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    )
  );
};

const removeFromCart = (productId) => {
   setCart(prevCart => prevCart.filter(item => item.id !== productId));
};

const [investmentPlan, setInvestmentPlan] = useState("");

const investmentDetails = {
  "Classic (2.5g)": { buying: 945, sales: 1225, spread: 280, percentage: "30%" },
  "Standard (5g)": { buying: 1870, sales: 2500, spread: 630, percentage: "34%" },
  "Premium (10g)": { buying: 3700, sales: 5100, spread: 1400, percentage: "38%" },
  "Elite (25g)": { buying: 9150, sales: 12750, spread: 3600, percentage: "40%" },
  "Prestige (50g)": { buying: 18000, sales: 26500, spread: 8500, percentage: "47%" },
  "Royal (100g)": { buying: 35400, sales: 54000, spread: 18600, percentage: "52%" }
};

const [isInvestOpen, setIsInvestOpen] = useState(false);

const [isMenuOpen, setIsMenuOpen] = useState(false);

const [goldPrice, setGoldPrice] = useState("378.00"); // Harga default/fallback

const [loadingPrice, setLoadingPrice] = useState(true);

useEffect(() => {

  const apiKey = "goldapi-49eb014d7742b04ddb59eaa44f44e07b-io";

  fetch("https://www.goldapi.io/api/XAU/AED", {

    headers: {

      "x-access-token": apiKey,

      "Content-Type": "application/json",

    },

  })

    .then(async (response) => {

      const data = await response.json();



      if (!response.ok) {

        throw new Error(data.error || "Failed");

      }



      return data;

    })

    .then((data) => {

      const calculatedPrice = (data.price / 31.1035).toFixed(2);

      setGoldPrice(calculatedPrice);

    })

    .catch((error) => {

      console.error("GoldAPI Error:", error);



      // harga cadangan

      setGoldPrice("410.00");

    })

    .finally(() => {

      setLoadingPrice(false);

    });

}, []);
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
          <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            {/* Efek Glow di belakang gambar */}
            <div className="absolute inset-0 bg-[#D4AF37] opacity-10 blur-[120px] rounded-full"></div>
            <img 
              src="/minted.png" 
              alt="PAMP Lady Fortuna" 
              className="relative w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
         </div>

      </div>
  </div>

<div className="bg-gray-800/80 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-5 shadow-xl max-w-sm w-full text-center mx-auto my-6">
      <h4 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">
        Live Gold Price (AED/Gram)
      </h4>
      {loadingPrice ? (
        <div className="text-2xl font-black text-gray-300 animate-pulse py-2">
          Updating price...
        </div>
      ) : (
        <div className="text-4xl font-extrabold text-yellow-500 tracking-tight">
          AED {goldPrice}
        </div>
      )}
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
      {productsData.map((product) => {
        // 1. JALANKAN RUMUS HITUNG HARGA DI SINI (SEBELUM RETURN HTML)
        const hargaPerGramSetelahDiskon = calculateDiscountedPrice(product.weight, goldPrice);
        const totalHargaProduk = hargaPerGramSetelahDiskon * product.weight;

        // 2. KEMBALIKAN (RETURN) TAMPILAN KOTAK KATALOG KE LAYAR
        return (
          <div
            key={product.id}
            className="bg-[#111] border border-gray-800 hover:border-yellow-600/50 rounded-sm p-10 group transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-3 right-2 text-[10px] text-gray-500 uppercase tracking-widest border border-gray-800 px-2 py-1 rounded-sm">
              {product.type}
            </div>

            {/* Gambar Produk dengan Fitur Klik Pop-up Galeri */}
            <div className="h-55 w-full mb-10 flex items-center justify-center">
              <img
                src={product.images ? product.images[0] : product.image}
                alt={product.name}
                className="w-full h-48 object-contain cursor-pointer hover:scale-105 transition-transform"
                onClick={() => {
                  setActiveGalleryProduct(product);
                  setCurrentImageIndex(0);
                }}
              />
            </div>

            <h4 className="text-lg font-medium text-white mb-1 group-hover:text-yellow-500 transition-colors">
              {product.name}
            </h4>

            <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
              <span dir="ltr">{product.weight}g</span>
              <span>•</span>
              <span dir="ltr">
                {translations[lang].purityText}
              </span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">
                  {translations[lang].estPrice}
                </p>
                {/* MENAMPILKAN HARGA LIVE SETELAH DISKON AUTOMATIS */}
                <p className="text-xl font-bold text-white">
                  AED {totalHargaProduk.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>

              <button
                onClick={() => addToCart({ ...product, computedPrice: totalHargaProduk })}
                className="mt-8 w-10 bg-yellow-600 hover:bg-yellow-500 text-black py-3 rounded-sm flex items-center transition-colors shadow-sm cursor-pointer"
              >
                <ShoppingCart size={35} />
              </button>
            </div>
          </div>
        );
      })}
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
    <div className="bg-[#111111] border border-gray-800 rounded-lg max-w-md w-full p-6 relative shadow-2xl my-auto min-h-[50vh]">
     
      {/* Tombol Close */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl cursor-pointer z-10"
      >
        &times;
      </button>

      <h2 className="text-xl font-serif text-white mb-4 font-bold border-b border-gray-800 pb-2">
        {lang === 'en' ? 'Investment Account Form' : lang === 'ar' ? 'نموذج فتح حساب استثماري' :  'Investment Account Form'}
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
         
          // 1. Ambil data plan yang dipilih investor saat ini
          const selectedPlan = formInvestment.totalInvestment;
          const planData = investmentDetails[selectedPlan];

          // 2. Format Dasar Data Diri & Perbankan
          let message = "📋 PAMP GOLD DUBAI INVESTMENT ACCOUNT FORM%0A%0A";
          message += `👤 Full Name: ${formInvestment.name}%0A`;
          message += `🏠 Address: ${formInvestment.address}%0A`;
          message += `📱 Phone Number: \u200E${formInvestment.phoneNumber}%0A%0A`;
          message += `🏦 Bank Name: ${formInvestment.bankName}%0A`;
          message += `💳 IBAN: ${formInvestment.iban}%0A`;
          message += `🔢 Bank Account Number: ${formInvestment.bankAccount}%0A%0A`;
          
          // 3. DETAIL INVESTMENT PLAN YANG TERKIRIM OTOMATIS KE TELEGRAM ADMIN
          message += `🏅 Chosen Investment Plan: ${selectedPlan || "-"}%0A`;
          
          if (planData) {
            // Memformat angka ribuan tanpa desimal agar sinkron rapi
            const capitalFormatted = `AED ${planData.buying.toLocaleString()}`;
            const returnsFormatted = `AED ${planData.sales.toLocaleString()}`;
            const profitFormatted = `AED ${planData.spread.toLocaleString()} (${planData.percentage})`;

            message += `💰 Capital (Purchase): ${capitalFormatted}%0A`;
            message += `📈 Estimated Returns: ${returnsFormatted}%0A`;
            message += `💎 Net Profit (Spread): ${profitFormatted}`;
          }
         
          // 4. Kirim ke Telegram Admin
          window.open(`https://t.me/m_asfanraza?text=${message}`, '_blank');
          setIsModalOpen(false);
        }}

        className="space-y-3 text-sm"
      >
        <div>
          <label className="block text-xs text-gray-400 mb-1">Full Name</label>
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
          <label className="block text-xs text-gray-400 mb-1">Address</label>
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
          <label className="block text-xs text-gray-400 mb-1">Phone Number</label>
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
          <label className="block text-xs text-gray-400 mb-1">Bank Name</label>
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
          <label className="block text-xs text-gray-400 mb-1">Bank Account Number</label>
          <input
            type="text"
            name="bankAccount"
            required
            className="w-full bg-black/50 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500"
            value={formInvestment.bankAccount}
            onChange={handleChange}
          />
        </div>

        {/* DROPDOWN INVESTMENT PLAN */}
<div className="flex flex-col mb-4">
  <label className="block text-xs text-gray-400 mb-1 uppercase font-semibold tracking-wider">
    Investment Plan
  </label>
  <select
    name="totalInvestment" 
    required
    value={formInvestment.totalInvestment}
    onChange={handleChange} 
    className="w-full bg-black/50 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-500 cursor-pointer appearance-none"
    style={{
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23888888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 12px center',
      backgroundSize: '16px'
    }}
  >
    <option value="" disabled className="text-gray-500">Select your investment plan...</option>
    <option value="Classic (2.5g)">Classic (2.5g)</option>
    <option value="Standard (5g)">Standard (5g)</option>
    <option value="Premium (10g)">Premium (10g)</option>
    <option value="Elite (25g)">Elite (25g)</option>
    <option value="Prestige (50g)">Prestige (50g)</option>
    <option value="Royal (100g)">Royal (100g)</option>
  </select>
</div>

{/* BOX RINGKASAN MODAL & UNTUNG (Otomatis Muncul) */}
{formInvestment.totalInvestment && investmentDetails[formInvestment.totalInvestment] && (
  <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-4 space-y-2 mb-4 animate-in fade-in slide-in-from-top-1 duration-300">
    <div className="flex justify-between items-center">
      <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Capital (Purchase)</span>
      <span className="text-sm text-white font-bold">AED {investmentDetails[formInvestment.totalInvestment].buying.toLocaleString()}</span>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Estimated Returns</span>
      <span className="text-sm text-white font-bold">AED {investmentDetails[formInvestment.totalInvestment].sales.toLocaleString()}</span>
    </div>
    <div className="flex justify-between items-center pt-2 border-t border-yellow-600/20">
      <span className="text-[10px] text-yellow-600 uppercase font-black tracking-widest">Net Profit (Spread)</span>
      <span className="text-sm text-yellow-500 font-black">
        AED {investmentDetails[formInvestment.totalInvestment].spread.toLocaleString()} ({investmentDetails[formInvestment.totalInvestment].percentage})
      </span>
    </div>
  </div>
)}

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
{/* MODAL POP-UP GALERI & DESKRIPSI PRODUK (RESPONSIF HP & LAPTOP) */}
{activeGalleryProduct && (
  <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-[60]">
    <div className="bg-[#1a2238] border border-gray-700 max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl relative text-white flex flex-col md:flex-row h-[92vh] md:h-auto max-h-[92vh] md:max-h-[85vh]">
      
      {/* Tombol Close (X) - Di HP posisinya tetap aman di pojok kanan atas */}
      <button 
        onClick={() => setActiveGalleryProduct(null)}
        className="absolute top-4 right-4 text-gray-400 hover:text-white z-50 p-2 cursor-pointer bg-black/40 md:bg-transparent rounded-full"
      >
        <X size={20} />
      </button>

      {/* SISI ATAS (HP) / SISI KIRI (LAPTOP): GALERI FOTO */}
      <div className="w-full md:w-1/2 bg-[#111625] p-6 md:p-8 flex flex-col items-center justify-center relative min-h-[220px] md:min-h-[350px] shrink-0">
        <img 
          src={activeGalleryProduct.images ? activeGalleryProduct.images[currentImageIndex] : activeGalleryProduct.image} 
          alt={activeGalleryProduct.name}
          className="max-h-44 md:max-h-64 object-contain transition-all duration-300 transform hover:scale-105"
        />
        
        {/* Tombol Navigasi Gambar (Prev / Next) */}
        {activeGalleryProduct.images && activeGalleryProduct.images.length > 1 && (
          <div className="flex items-center space-x-4 mt-4">
            <button 
              onClick={() => setCurrentImageIndex(prev => prev === 0 ? activeGalleryProduct.images.length - 1 : prev - 1)}
              className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded-sm text-[10px] md:text-xs cursor-pointer select-none"
            >
              ◀ Prev
            </button>
            <span className="text-[10px] md:text-xs text-gray-400">{currentImageIndex + 1} / {activeGalleryProduct.images.length}</span>
            <button 
              onClick={() => setCurrentImageIndex(prev => prev === activeGalleryProduct.images.length - 1 ? 0 : prev + 1)}
              className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded-sm text-[10px] md:text-xs cursor-pointer select-none"
            >
              Next ▶
            </button>
          </div>
        )}
      </div>

      {/* SISI BAWAH (HP) / SISI KANAN (LAPTOP): DETAIL & DESKRIPSI (Bisa Di-scroll) */}
      <div className="w-full md:w-1/2 p-5 md:p-8 flex flex-col justify-between overflow-y-auto bg-[#161d30] flex-grow">
        <div>
          <span className="text-[10px] md:text-xs text-yellow-500 font-bold tracking-widest uppercase">PRODUCT DETAILS</span>
          <h2 className="text-lg md:text-2xl font-bold font-serif text-white mt-1 mb-1.5 uppercase leading-tight">{activeGalleryProduct.name}</h2>
          <p className="text-xs md:text-sm text-gray-400 mb-4 md:mb-6">Weight: <strong className="text-white">{activeGalleryProduct.weight}g</strong></p>
          
          {/* Teks Deskripsi Otomatis Rapi & Ada Scrollbar Internal jika Teks Kepanjangan di HP */}
          <div className="text-[11px] md:text-xs text-gray-300 space-y-3 leading-relaxed pr-1 whitespace-pre-line text-justify max-h-[25vh] md:max-h-[40vh] overflow-y-auto scrollbar-thin">
            {activeGalleryProduct.description}
          </div>
        </div>

        {/* AREA TOMBOL BELI - Nempel statis di bawah modal */}
        <div className="mt-5 md:mt-8 pt-4 border-t border-gray-700/50 shrink-0">
          <button
            onClick={() => {
              const hargaPerGram = calculateDiscountedPrice(activeGalleryProduct.weight, goldPrice);
              const totalHarga = hargaPerGram * activeGalleryProduct.weight;
              
              addToCart({ ...activeGalleryProduct, computedPrice: totalHarga });
              setActiveGalleryProduct(null); // Menutup modal setelah berhasil masuk keranjang
            }}
            className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-3 rounded-sm uppercase tracking-wider text-[11px] md:text-xs transition-colors duration-300 cursor-pointer flex items-center justify-center space-x-2 shadow-lg active:scale-[0.98]"
          >
            <ShoppingCart size={14} />
            <span>{translations[lang].addToCartText || "Add to Cart"}</span>
          </button>
        </div>

      </div>

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
            {cart.map((item) => (
  <div key={item.id} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg mb-3 border border-gray-800">
    
    {/* 1. GAMBAR PRODUK */}
    <img 
      src={item.images ? item.images[0] : item.image} 
      alt={item.name} 
      className="w-16 h-16 object-contain bg-black rounded-sm p-1" 
    />

    {/* 2. DETAIL NAMA, BERAT, & HARGA */}
    <div className="flex-1 ml-4">
      <h4 className="text-sm font-medium text-white leading-snug">{item.name}</h4>
      <p className="text-xs text-gray-500 mt-0.5">{item.weight}g</p>
      
      <p className="text-sm text-yellow-500 font-bold mt-1">
        AED {((item.computedPrice || 0) * item.quantity).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>

      {/* 3. TOMBOL QUANTITY (- / +) */}
      <div className="flex items-center space-x-2 mt-2">
        {/* Tombol Minus */}
        <button 
          onClick={() => updateQuantity(item.id, item.quantity - 1)} // <-- Pakai item.id, BUKAN product.id
          className="bg-gray-800 hover:bg-gray-700 text-white w-6 h-6 rounded-sm text-xs flex items-center justify-center cursor-pointer"
        >
          -
        </button>
        
        <span className="text-xs px-2 text-white font-medium">{item.quantity}</span>
        
        {/* Tombol Plus */}
        <button 
          onClick={() => updateQuantity(item.id, item.quantity + 1)} // <-- Pakai item.id, BUKAN product.id
          className="bg-gray-800 hover:bg-gray-700 text-white w-6 h-6 rounded-sm text-xs flex items-center justify-center cursor-pointer"
        >
          +
        </button>
      </div>
    </div>

    {/* 4. TOMBOL HAPUS (IKON SAMPAH) */}
    <button
      onClick={() => removeFromCart(item.id)} // <-- Pakai item.id, BUKAN product.id atau product
      className="text-red-500 hover:text-red-400 p-2 cursor-pointer transition-colors"
    >
      <Trash2 size={16} />
    </button>

  </div>
))}
          </div>

          {/* Tombol Checkout Telegram */}
          <div className="mt-6 pt-4 border-t border-gray-800">
            <button 
              onClick={() => {
            let message = "";

            // 1. HEADER FORMAT PEMESANAN BARU
            message = "📋 PAMP GOLD DUBAI PURCHASE ORDER%0A%0A%0A";
            message += "👤 Full Name: %0A%0A";
            
            // 2. DIUBAH JADI LEBIH PROFESIONAL
            message += "📦 Ordered Items:%0A";
            
            let grandTotal = 0;
            cart.forEach((item, idx) => {
              const totalHargaItem = (item.computedPrice || 0) * item.quantity;
              grandTotal += totalHargaItem;

              const hargaFormatted = `AED ${totalHargaItem.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
              
              message += `   • ${item.name} (${item.weight}g) x ${item.quantity} -> ${hargaFormatted}%0A`;
            });

            const totalSemuaFormatted = `AED ${grandTotal.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
            message += `💰 Grand Total: ${totalSemuaFormatted}%0A%0A`;

            // 3. SISA FORMAT PEMESANAN
            message += "🏠 Delivery Address: %0A%0A";
            message += "📱 Phone Number: %0A%0A";
            message += "⚠️ IMPORTANT: Please complete your personal details below before sending the message!%0A%0A";

            window.open(`https://t.me/m_asfanraza?text=${message}`, '_blank');
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
          <div className="bg-[#f9c5d1] text-gray-900 rounded-3xl overflow-hidden shadow-xl border-4 border-gray-800 max-w-sm mx-auto w-full flex flex-col">
            <div className="bg-[#9c2770] text-white py-4 text-center font-bold text-2xl tracking-wider uppercase">Classic</div>
            <div className="bg-[#d4af37] text-gray-900 py-6 text-center">
          <div className="text-5xl font-extrabold tracking-tight">2,5<span className="text-2xl ml-1 font-bold">g</span></div>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD BUYING PRICE</span>
              <span className="font-black text-lg">AED 378/g</span>
            </div>
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD SELLING PRICE</span>
              <span className="font-black text-lg">AED 490/g</span>
            </div>
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD PURCHASE VALUE</span>
              <span className="font-black text-lg">AED 945</span>
            </div>
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD SALES VALUE</span>
              <span className="font-black text-lg">AED 1,225</span>
            </div>
          </div>
          <div className="pt-4">
            <button className="w-full bg-[#ff7e00] hover:bg-orange-600 text-white font-black text-base py-3.5 px-4 rounded-full shadow-md transition-all tracking-wide uppercase">
              SPREAD 30% AED 280
            </button>
          </div>
       </div>
      </div>
          <div className="bg-[#f9c5d1] text-gray-900 rounded-3xl overflow-hidden shadow-xl border-4 border-gray-800 max-w-sm mx-auto w-full flex flex-col">
        <div className="bg-[#88147f] text-white py-4 text-center font-bold text-2xl tracking-wider uppercase">Standard</div>
        <div className="bg-[#d4af37] text-gray-900 py-6 text-center">
          <div className="text-5xl font-extrabold tracking-tight">5<span className="text-2xl ml-1 font-bold">g</span></div>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD BUYING PRICE</span>
              <span className="font-black text-lg">AED 374/g</span>
            </div>
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD SELLING PRICE</span>
              <span className="font-black text-lg">AED 500/g</span>
            </div>
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD PURCHASE VALUE</span>
              <span className="font-black text-lg">AED 1,870</span>
            </div>
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD SALES VALUE</span>
              <span className="font-black text-lg">AED 2,500</span>
            </div>
          </div>
          <div className="pt-4">
            <button className="w-full bg-[#ff7e00] hover:bg-orange-600 text-white font-black text-base py-3.5 px-4 rounded-full shadow-md transition-all tracking-wide uppercase">
              SPREAD 34% AED 630
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#f9c5d1] text-gray-900 rounded-3xl overflow-hidden shadow-xl border-4 border-gray-800 max-w-sm mx-auto w-full flex flex-col">
        <div className="bg-[#600e5c] text-white py-4 text-center font-bold text-2xl tracking-wider uppercase">Premium</div>
        <div className="bg-[#ff8c00] text-gray-900 py-6 text-center">
          <div className="text-5xl font-extrabold tracking-tight">10<span className="text-2xl ml-1 font-bold">g</span></div>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD BUYING PRICE</span>
              <span className="font-black text-lg">AED 370/g</span>
            </div>
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD SELLING PRICE</span>
              <span className="font-black text-lg">AED 510/g</span>
            </div>
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD PURCHASE VALUE</span>
              <span className="font-black text-lg">AED 3,700</span>
            </div>
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD SALES VALUE</span>
              <span className="font-black text-lg">AED 5,100</span>
            </div>
          </div>
          <div className="pt-4">
            <button className="w-full bg-[#ff7e00] hover:bg-orange-600 text-white font-black text-base py-3.5 px-4 rounded-full shadow-md transition-all tracking-wide uppercase">
              SPREAD 38% AED 1,400
            </button>
          </div>
        </div>
      </div>

      {/* 4. ELITE */}
      <div className="bg-[#f9c5d1] text-gray-900 rounded-3xl overflow-hidden shadow-xl border-4 border-gray-800 max-w-sm mx-auto w-full flex flex-col">
        <div className="bg-[#6a1b82] text-white py-4 text-center font-bold text-2xl tracking-wider uppercase">Elite</div>
        <div className="bg-[#d4af37] text-gray-900 py-6 text-center">
          <div className="text-5xl font-extrabold tracking-tight">25<span className="text-2xl ml-1 font-bold">g</span></div>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD BUYING PRICE</span>
              <span className="font-black text-lg">AED 366/g</span>
            </div>
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD SELLING PRICE</span>
              <span className="font-black text-lg">AED 520/g</span>
            </div>
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD PURCHASE VALUE</span>
              <span className="font-black text-lg">AED 9,150</span>
            </div>
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD SALES VALUE</span>
              <span className="font-black text-lg">AED 12,750</span>
            </div>
          </div>
          <div className="pt-4">
            <button className="w-full bg-[#ff7e00] hover:bg-orange-600 text-white font-black text-base py-3.5 px-4 rounded-full shadow-md transition-all tracking-wide uppercase">
              SPREAD 40% AED 3,600
            </button>
          </div>
        </div>
      </div>

      {/* 5. PRESTIGE */}
      <div className="bg-[#f9c5d1] text-gray-900 rounded-3xl overflow-hidden shadow-xl border-4 border-gray-800 max-w-sm mx-auto w-full flex flex-col">
        <div className="bg-[#4a0d61] text-white py-4 text-center font-bold text-2xl tracking-wider uppercase">Prestige</div>
        <div className="bg-[#d4af37] text-gray-900 py-6 text-center">
          <div className="text-5xl font-extrabold tracking-tight">50<span className="text-2xl ml-1 font-bold">g</span></div>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD BUYING PRICE</span>
              <span className="font-black text-lg">AED 360/g</span>
            </div>
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD SELLING PRICE</span>
              <span className="font-black text-lg">AED 530/g</span>
            </div>
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD PURCHASE VALUE</span>
              <span className="font-black text-lg">AED 18,000</span>
            </div>
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD SALES VALUE</span>
              <span className="font-black text-lg">AED 26,500</span>
            </div>
          </div>
          <div className="pt-4">
            <button className="w-full bg-[#ff7e00] hover:bg-orange-600 text-white font-black text-base py-3.5 px-4 rounded-full shadow-md transition-all tracking-wide uppercase">
              SPREAD 47% AED 8,500
            </button>
          </div>
        </div>
      </div>

      {/* 6. ROYAL */}
      <div className="bg-[#f9c5d1] text-gray-900 rounded-3xl overflow-hidden shadow-xl border-4 border-gray-800 max-w-sm mx-auto w-full flex flex-col">
        <div className="bg-[#1e1b4b] text-white py-4 text-center font-bold text-2xl tracking-wider uppercase">Royal</div>
        <div className="bg-[#d4af37] text-gray-900 py-6 text-center">
          <div className="text-5xl font-extrabold tracking-tight">100<span className="text-2xl ml-1 font-bold">g</span></div>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD BUYING PRICE</span>
              <span className="font-black text-lg">AED 354/g</span>
            </div>
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD SELLING PRICE</span>
              <span className="font-black text-lg">AED 540/g</span>
            </div>
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD PURCHASE VALUE</span>
              <span className="font-black text-lg">AED 35,400</span>
            </div>
            <div className="border-b-2 border-gray-400 pb-2 flex justify-between.»items-center">
              <span className="font-bold text-xs text-gray-800 tracking-wider">GOLD SALES VALUE</span>
              <span className="font-black text-lg">AED 54,000</span>
            </div>
          </div>
          <div className="pt-4">
            <button className="w-full bg-[#ff7e00] hover:bg-orange-600 text-white font-black text-base py-3.5 px-4 rounded-full shadow-md transition-all tracking-wide uppercase">
              SPREAD 52% AED 18,600
            </button>
          </div>
        </div>
      </div>

    </div>
   </div>
  </div>
 </div>
)}
</div>
);
}
