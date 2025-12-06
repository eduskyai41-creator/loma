
import React from 'react';
import { Page } from '../types';
import { useToast } from '../hooks/useToast.ts';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const addToast = useToast();

  const handleNotImplemented = (e: React.MouseEvent) => {
    e.preventDefault();
    addToast({
        type: 'info',
        title: 'Coming Soon',
        message: 'ฟีเจอร์นี้กำลังอยู่ในระหว่างการพัฒนา',
    });
  };

  return (
    <footer className="bg-white border-t-4 border-cyan-600 pt-10 text-gray-600 text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            {/* Column 1: Customer Service */}
            <div>
                <h4 className="font-bold text-gray-900 uppercase mb-4">ศูนย์ช่วยเหลือ</h4>
                <ul className="space-y-2">
                    <li><button onClick={() => onNavigate('help')} className="hover:text-cyan-600 text-left">วิธีสั่งซื้อสินค้า</button></li>
                    <li><button onClick={() => onNavigate('help')} className="hover:text-cyan-600 text-left">การชำระเงิน</button></li>
                    <li><button onClick={() => onNavigate('help')} className="hover:text-cyan-600 text-left">การจัดส่งสินค้า</button></li>
                    <li><button onClick={() => onNavigate('help')} className="hover:text-cyan-600 text-left">การคืนสินค้า</button></li>
                    <li><button onClick={() => onNavigate('help')} className="hover:text-cyan-600 text-left">ติดต่อเรา</button></li>
                </ul>
            </div>

            {/* Column 2: About Loma */}
            <div>
                <h4 className="font-bold text-gray-900 uppercase mb-4">เกี่ยวกับ Loma</h4>
                <ul className="space-y-2">
                    <li><button onClick={() => onNavigate('about')} className="hover:text-cyan-600 text-left">เกี่ยวกับเรา</button></li>
                    <li><button onClick={() => onNavigate('stories')} className="hover:text-cyan-600 text-left">เรื่องราวชุมชน</button></li>
                    <li><a href="#" onClick={handleNotImplemented} className="hover:text-cyan-600">นโยบายความเป็นส่วนตัว</a></li>
                    <li><a href="#" onClick={handleNotImplemented} className="hover:text-cyan-600">Flash Sale</a></li>
                    <li><button onClick={() => onNavigate('seller')} className="hover:text-cyan-600 text-left">สมัครเป็นผู้ขาย</button></li>
                </ul>
            </div>

            {/* Column 3: Payment */}
            <div>
                 <h4 className="font-bold text-gray-900 uppercase mb-4">การชำระเงิน</h4>
                 <div className="flex flex-wrap gap-2">
                    <div className="bg-white border border-gray-200 p-1 rounded w-12 h-8 flex items-center justify-center shadow-sm"><span className="text-[10px] font-bold">VISA</span></div>
                    <div className="bg-white border border-gray-200 p-1 rounded w-12 h-8 flex items-center justify-center shadow-sm"><span className="text-[10px] font-bold">Master</span></div>
                    <div className="bg-white border border-gray-200 p-1 rounded w-12 h-8 flex items-center justify-center shadow-sm"><span className="text-[10px] font-bold">PromptPay</span></div>
                    <div className="bg-white border border-gray-200 p-1 rounded w-12 h-8 flex items-center justify-center shadow-sm"><span className="text-[10px] font-bold">COD</span></div>
                 </div>
            </div>

             {/* Column 4: Logistics */}
             <div>
                 <h4 className="font-bold text-gray-900 uppercase mb-4">ขนส่ง</h4>
                 <div className="flex flex-wrap gap-2">
                    <div className="bg-white border border-gray-200 p-1 rounded w-14 h-8 flex items-center justify-center shadow-sm"><span className="text-[10px] font-bold text-red-600">ThaiPost</span></div>
                    <div className="bg-white border border-gray-200 p-1 rounded w-14 h-8 flex items-center justify-center shadow-sm"><span className="text-[10px] font-bold text-orange-500">Kerry</span></div>
                    <div className="bg-white border border-gray-200 p-1 rounded w-14 h-8 flex items-center justify-center shadow-sm"><span className="text-[10px] font-bold text-yellow-500">Flash</span></div>
                 </div>
            </div>

            {/* Column 5: Download App & Social */}
            <div>
                <h4 className="font-bold text-gray-900 uppercase mb-4">ดาวน์โหลดแอป</h4>
                <div className="flex gap-3">
                    <div className="w-20 h-20 bg-gray-200 flex items-center justify-center text-xs text-center p-1 border border-gray-300">QR Code</div>
                    <div className="flex flex-col gap-2 justify-center">
                        <div className="w-24 h-8 bg-black text-white rounded flex items-center justify-center text-[10px]">App Store</div>
                        <div className="w-24 h-8 bg-black text-white rounded flex items-center justify-center text-[10px]">Google Play</div>
                    </div>
                </div>
                <h4 className="font-bold text-gray-900 uppercase mt-4 mb-2">ติดตามเรา</h4>
                <div className="flex space-x-3">
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-blue-600"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-pink-600"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.072 3.252.158 5.867 2.773 6.025 6.025.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-2.754 5.866-6.025 6.024-1.266.058-1.644.069-4.849.069-3.204 0-3.584-.011-4.849-.069-3.26-.159-5.867-2.774-6.025-6.024-.059-1.265-.069-1.644-.069-4.849 0-3.204.011-3.583.069-4.849.149-3.226 2.754-5.867 6.025-6.024 1.265-.059 1.644-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-7.78 3.621-7.98 7.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 3.622 7.78 7.98 7.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 7.782-3.621 7.98-7.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-3.622-7.78-7.98-7.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                </div>
            </div>
        </div>

        <div className="border-t border-gray-200 py-6 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} Loma Marketplace. สงวนลิขสิทธิ์.</p>
                <div className="mt-2 md:mt-0 flex space-x-4">
                    <span>ประเทศ: ไทย</span>
                    <span className="border-l border-gray-300 pl-4">สิงคโปร์</span>
                    <span className="border-l border-gray-300 pl-4">อินโดนีเซีย</span>
                    <span className="border-l border-gray-300 pl-4">มาเลเซีย</span>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
