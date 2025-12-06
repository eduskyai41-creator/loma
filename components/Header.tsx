
import React, { useState, useRef, useEffect } from 'react';
import { Page, User } from '../types.ts';

interface HeaderProps {
    onNavigate: (page: Page) => void;
    cartItemCount: number;
    onSearch: (query: string) => void;
    user: User | null;
    onLogout: () => void;
}

const SearchBar: React.FC<{ onSearch: (query: string) => void, onFocus?: () => void }> = ({ onSearch, onFocus }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full flex shadow-sm rounded-md overflow-hidden">
            <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={onFocus}
                placeholder="ค้นหาสินค้า, ผู้ผลิต, หรือหมวดหมู่..."
                className="block w-full pl-4 pr-14 py-2.5 border-none leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
            />
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6 flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </button>
        </form>
    );
};

const Header: React.FC<HeaderProps> = ({ onNavigate, cartItemCount, onSearch, user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotifOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setIsProfileOpen(false);
    setIsNotifOpen(false);
  }
  
  const handleSearch = (query: string) => {
    onSearch(query);
    setIsMenuOpen(false);
  }

  const handleLogoutClick = () => {
      onLogout();
      setIsProfileOpen(false);
      handleNavigate('home');
  }

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Utility Bar */}
      <div className="bg-gradient-to-r from-cyan-700 to-cyan-600 text-white text-xs py-1.5 hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex space-x-4">
                <button onClick={() => handleNavigate('seller')} className="hover:text-cyan-100 transition-colors">Seller Centre</button>
                <button onClick={() => handleNavigate('seller')} className="border-l border-cyan-500 pl-4 hover:text-cyan-100 transition-colors">ขายสินค้ากับ Loma</button>
                <a href="#" onClick={(e) => e.preventDefault()} className="border-l border-cyan-500 pl-4 hover:text-cyan-100 transition-colors">ดาวน์โหลดแอพ</a>
            </div>
            <div className="flex space-x-4 items-center">
                <button onClick={() => handleNavigate('help')} className="hover:text-cyan-100 flex items-center gap-1 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                    ช่วยเหลือ
                </button>
                
                {/* User Account Top Bar Link (simplified) */}
                {user ? (
                   <div className="flex items-center gap-2 cursor-pointer hover:text-cyan-100" onClick={() => handleNavigate('profile')}>
                        <span className="font-bold">{user.name}</span>
                   </div>
                ) : (
                    <div className="flex items-center gap-2">
                         <button onClick={() => handleNavigate('login')} className="hover:text-cyan-100 font-bold">สมัครสมาชิก</button>
                         <span className="text-cyan-400">|</span>
                         <button onClick={() => handleNavigate('login')} className="hover:text-cyan-100 font-bold">เข้าสู่ระบบ</button>
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-100 py-3 md:py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4 md:gap-8">
                {/* Logo */}
                <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigate('home')}>
                    <div className="flex flex-col items-start">
                        <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 tracking-tighter">
                            Loma
                        </span>
                        <span className="text-[10px] uppercase font-bold text-cyan-600 tracking-widest -mt-1">Marketplace</span>
                    </div>
                </div>

                {/* Search Bar - Center */}
                <div className="hidden md:flex flex-1 max-w-2xl bg-gray-100 rounded-md p-0.5 border border-gray-200 focus-within:ring-2 focus-within:ring-cyan-500/50 focus-within:border-cyan-500 transition-all">
                    <SearchBar onSearch={handleSearch} />
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-3 md:space-x-6">
                    {/* Cart */}
                    <button onClick={() => handleNavigate('cart')} className="relative group p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-600 group-hover:text-cyan-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {cartItemCount > 0 && (
                        <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center ring-2 ring-white">
                            {cartItemCount}
                        </span>
                        )}
                        <span className="hidden lg:block text-xs text-gray-500 mt-1 font-medium group-hover:text-cyan-600">ตะกร้า</span>
                    </button>

                    {/* Notification Dropdown */}
                    <div className="relative hidden md:block" ref={notifRef}>
                        <button 
                            onClick={() => setIsNotifOpen(!isNotifOpen)}
                            className="flex flex-col items-center group p-1 focus:outline-none"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-600 group-hover:text-cyan-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="text-xs text-gray-500 mt-1 font-medium group-hover:text-cyan-600">แจ้งเตือน</span>
                        </button>
                        
                        {isNotifOpen && (
                            <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200 animate-fade-in-down">
                                <div className="px-4 py-2 border-b border-gray-100 text-sm font-semibold text-gray-700">การแจ้งเตือนล่าสุด</div>
                                <div className="max-h-64 overflow-y-auto">
                                    <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50 cursor-pointer">
                                        <p className="text-sm font-bold text-gray-800">โปรโมชั่นพิเศษ!</p>
                                        <p className="text-xs text-gray-500">ลด 50% สินค้าหมวดผลไม้ วันนี้วันเดียว</p>
                                    </div>
                                    <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50 cursor-pointer">
                                        <p className="text-sm font-bold text-gray-800">Loma Live</p>
                                        <p className="text-xs text-gray-500">ชมไลฟ์สดจากกลุ่มแม่บ้านปัตตานี แจกโค้ดส่วนลดเพียบ</p>
                                    </div>
                                    <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                                        <p className="text-sm font-bold text-gray-800">ยินดีต้อนรับสู่ Loma</p>
                                        <p className="text-xs text-gray-500">ขอบคุณที่ร่วมเป็นส่วนหนึ่งของชุมชนของเรา</p>
                                    </div>
                                </div>
                                <div className="px-4 py-2 bg-gray-50 text-center border-t border-gray-100">
                                    <button className="text-xs text-cyan-600 font-medium hover:underline">ดูทั้งหมด</button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Account Dropdown */}
                    <div className="relative hidden md:block" ref={profileRef}>
                         <button 
                             onClick={() => setIsProfileOpen(!isProfileOpen)}
                             className="flex flex-col items-center group p-1 focus:outline-none"
                         >
                            {user?.avatar ? (
                                <img src={user.avatar} alt="Profile" className="h-7 w-7 rounded-full object-cover border border-gray-200" />
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-600 group-hover:text-cyan-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            )}
                             <span className="text-xs text-gray-500 mt-1 font-medium group-hover:text-cyan-600">บัญชีของฉัน</span>
                         </button>

                         {isProfileOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200 animate-fade-in-down">
                                {user ? (
                                    <>
                                        <div className="px-4 py-3 border-b border-gray-100">
                                            <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                                            <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                        </div>
                                        <button onClick={() => handleNavigate('profile')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">โปรไฟล์ของฉัน</button>
                                        <button onClick={() => handleNavigate('cart')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">คำสั่งซื้อของฉัน</button>
                                        <button onClick={handleLogoutClick} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">ออกจากระบบ</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => handleNavigate('login')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold">เข้าสู่ระบบ</button>
                                        <button onClick={() => handleNavigate('login')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">สมัครสมาชิก</button>
                                    </>
                                )}
                            </div>
                         )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="p-2 text-gray-600 hover:bg-gray-100 rounded-md"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
             {/* Mobile Search - Visible only on mobile */}
             <div className="md:hidden mt-3 pb-2">
                <SearchBar onSearch={handleSearch} />
             </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out border-b border-gray-200 ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {user && (
            <div className="px-3 py-2 border-b border-gray-100 mb-2">
                 <p className="font-bold text-gray-800">สวัสดี, {user.name}</p>
            </div>
          )}
          <button onClick={() => handleNavigate('home')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50">หน้าแรก</button>
          <button onClick={() => handleNavigate('all-products')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50">สินค้าทั้งหมด</button>
          <button onClick={() => handleNavigate('stories')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50">เรื่องราวชุมชน</button>
          <button onClick={() => handleNavigate('seller')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50">ขายสินค้ากับ Loma</button>
          <button onClick={() => handleNavigate('help')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50">ช่วยเหลือ</button>
          
          <div className="border-t border-gray-100 my-2 pt-2">
              {user ? (
                   <>
                    <button onClick={() => handleNavigate('profile')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50">บัญชีของฉัน</button>
                    <button onClick={handleLogoutClick} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50">ออกจากระบบ</button>
                   </>
              ) : (
                  <button onClick={() => handleNavigate('login')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-cyan-600 hover:bg-cyan-50">เข้าสู่ระบบ / สมัครสมาชิก</button>
              )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
