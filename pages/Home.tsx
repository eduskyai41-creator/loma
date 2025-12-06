
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard.tsx';
import { Product, Page } from '../types.ts';

interface HomeProps {
    onNavigate: (page: Page) => void;
    onSelectProduct: (product: Product) => void;
    onQuickView: (product: Product) => void;
    allProducts: Product[];
    onCategorySelect: (category: string) => void;
}

const CategoryIcon: React.FC<{ name: string }> = ({ name }) => {
    // Marketplace style simple icons
    const icons: { [key: string]: React.ReactElement } = {
        'อาหาร': (
            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
        ),
        'เครื่องแต่งกาย': (
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
        ),
        'ของใช้': (
            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
        ),
        'ของตกแต่ง': (
             <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
        ),
        'เครื่องประดับ': (
            <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
        ),
    };
    return icons[name] || <div className="w-12 h-12 rounded-2xl bg-gray-100 mb-2" />;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onSelectProduct, onQuickView, allProducts, onCategorySelect }) => {

    const categories = [
        { name: 'อาหาร' },
        { name: 'เครื่องแต่งกาย' },
        { name: 'ของใช้' },
        { name: 'ของตกแต่ง' },
        { name: 'เครื่องประดับ' },
    ];

    const [timeLeft, setTimeLeft] = useState(7200); // 2 hours in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 7200));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return { h, m, s };
    };

    const time = formatTime(timeLeft);

    const flashSaleProducts = [...allProducts].sort(() => 0.5 - Math.random()).slice(0, 6);
    const recommendedProducts = [...allProducts].sort(() => 0.5 - Math.random());

    return (
        <div className="bg-gray-100 pb-10">
            {/* Hero Section - Marketplace Banner Style */}
            <section className="bg-white">
                <div className="container mx-auto px-0 md:px-4 lg:px-8 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 h-auto md:h-80">
                        {/* Main Banner */}
                        <div className="md:col-span-2 relative rounded-none md:rounded-lg overflow-hidden bg-gray-200 group cursor-pointer" onClick={() => onNavigate('all-products')}>
                            <img src="https://www.nairobroo.com/wp-content/uploads/2019/03/13.2B.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Main Banner" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 md:p-10">
                                <h2 className="text-white text-3xl font-bold mb-2">Loma Exclusive</h2>
                                <p className="text-white/90 text-sm md:text-lg mb-4">รวมสินค้าฮาลาลคุณภาพดีที่สุด จาก 270 ผู้ประกอบการ</p>
                                <button className="w-fit bg-red-600 text-white px-6 py-2 rounded-sm font-medium hover:bg-red-700 transition">ช้อปเลย</button>
                            </div>
                        </div>
                        {/* Side Banners (Desktop only) */}
                        <div className="hidden md:grid grid-rows-2 gap-2 h-full">
                            <div className="relative rounded-lg overflow-hidden bg-cyan-100 cursor-pointer group" onClick={() => onCategorySelect('ของใช้')}>
                                <img src="https://www.pattanicity.go.th/tmp/3424fd943452912b493e06f297f79bfb.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Sub Banner 1" />
                                <div className="absolute inset-0 flex flex-col justify-center p-6 bg-black/20 hover:bg-black/10 transition-colors">
                                    <span className="bg-yellow-400 text-xs font-bold px-2 py-0.5 rounded w-fit mb-2">แนะนำ</span>
                                    <h3 className="text-white font-bold text-xl drop-shadow-md">ของดีปัตตานี</h3>
                                    <p className="text-white text-sm drop-shadow-md">ส่งตรงจากแหล่งผลิต</p>
                                </div>
                            </div>
                            <div className="relative rounded-lg overflow-hidden bg-orange-100 cursor-pointer group" onClick={() => onCategorySelect('อาหาร')}>
                                <img src="https://yalapao.go.th/th/wp-content/uploads/S__46784516-768x1024.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Sub Banner 2" />
                                <div className="absolute inset-0 flex flex-col justify-center p-6 bg-black/20 hover:bg-black/10 transition-colors">
                                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded w-fit mb-2">FLASH DEAL</span>
                                    <h3 className="text-white font-bold text-xl drop-shadow-md">กาแฟทุเรียน</h3>
                                    <p className="text-white text-sm drop-shadow-md">ลดพิเศษ 50% วันนี้</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Category Icons Grid */}
            <section className="bg-white pt-6 pb-2 mb-4 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-5 gap-2 md:gap-8">
                        {categories.map(cat => (
                            <button key={cat.name} onClick={() => onCategorySelect(cat.name)} className="flex flex-col items-center group transition-all hover:-translate-y-1">
                                <div className="transition-transform group-hover:scale-105 shadow-sm">
                                   <CategoryIcon name={cat.name} />
                                </div>
                                <span className="text-xs md:text-sm text-gray-700 mt-1 font-medium group-hover:text-cyan-600">{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Banner Strip */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-4 flex items-center justify-between shadow-md cursor-pointer" onClick={() => onNavigate('login')}>
                    <div className="flex items-center gap-4">
                        <div className="bg-red-600 text-white font-bold px-3 py-1 rounded text-sm animate-pulse">ใหม่</div>
                        <span className="text-white font-medium text-sm md:text-base truncate">สมัครสมาชิก Loma Card วันนี้ รับส่วนลดเพิ่มทันที 150 บาท</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                </div>
            </div>

            {/* Flash Sale Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                        <div className="flex items-center gap-4">
                            <h2 className="text-xl font-extrabold text-red-600 italic uppercase tracking-wider">Flash Sale</h2>
                            <div className="hidden md:flex items-center gap-1">
                                <span className="bg-black text-white px-2 py-0.5 text-xs font-bold rounded">{time.h}</span>
                                <span className="text-black font-bold">:</span>
                                <span className="bg-black text-white px-2 py-0.5 text-xs font-bold rounded">{time.m}</span>
                                <span className="text-black font-bold">:</span>
                                <span className="bg-black text-white px-2 py-0.5 text-xs font-bold rounded">{time.s}</span>
                            </div>
                        </div>
                        <button onClick={() => onNavigate('all-products')} className="text-red-600 text-sm font-medium hover:underline flex items-center">
                            ดูทั้งหมด
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                        </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {flashSaleProducts.map(product => (
                            <ProductCard key={`flash-${product.id}`} product={product} onSelect={onSelectProduct} onQuickView={onQuickView} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Daily Discover (Infinite Grid Style) */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-6 py-2 bg-gray-100 text-lg font-bold text-cyan-700 uppercase tracking-wide">สินค้าแนะนำประจำวัน</span>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
                    {recommendedProducts.map(product => (
                        <ProductCard key={product.id} product={product} onSelect={onSelectProduct} onQuickView={onQuickView} />
                    ))}
                </div>
                
                <div className="mt-8 text-center">
                    <button onClick={() => onNavigate('all-products')} className="bg-white border border-gray-300 text-gray-700 font-medium py-2 px-10 rounded hover:bg-gray-50 hover:text-cyan-600 hover:border-cyan-600 transition-all">
                        ดูเพิ่มเติม
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;
