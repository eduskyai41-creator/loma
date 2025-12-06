
import React from 'react';
import { Page } from '../types.ts';

interface SellerCentreProps {
    onNavigate: (page: Page) => void;
}

const SellerCentre: React.FC<SellerCentreProps> = ({ onNavigate }) => {
    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="relative bg-cyan-900 py-24 sm:py-32">
                 <div className="absolute inset-0 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" alt="" className="w-full h-full object-cover opacity-20" />
                 </div>
                 <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">เริ่มต้นธุรกิจของคุณกับ Loma</h1>
                    <p className="mt-6 text-xl text-cyan-100 max-w-3xl mx-auto">
                        เข้าร่วมเป็นหนึ่งในผู้ประกอบการ 270+ ราย เพื่อส่งมอบสินค้าฮาลาลคุณภาพสูงสู่ผู้บริโภคทั่วประเทศ พร้อมระบบจัดการร้านค้าครบวงจร
                    </p>
                    <div className="mt-10 flex justify-center gap-4">
                        <button className="px-8 py-3 bg-white text-cyan-900 font-bold rounded-md hover:bg-cyan-50 transition shadow-lg">ลงทะเบียนร้านค้า</button>
                        <button className="px-8 py-3 bg-transparent border border-white text-white font-bold rounded-md hover:bg-white/10 transition">ศึกษาข้อมูลเพิ่มเติม</button>
                    </div>
                 </div>
            </div>

            {/* Benefits */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">ทำไมต้องขายกับ Loma?</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                            <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">เพิ่มยอดขาย</h3>
                            <p className="text-gray-600">เข้าถึงฐานลูกค้าทั่วประเทศ และแคมเปญการตลาดที่ช่วยกระตุ้นยอดขายตลอดปี</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                            <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">พัฒนาผลิตภัณฑ์</h3>
                            <p className="text-gray-600">เชื่อมต่อกับ "ศูนย์อัจฉริยะ" เพื่อพัฒนาสินค้า บรรจุภัณฑ์ และมาตรฐานฮาลาล</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                            <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">ระบบจัดการง่าย</h3>
                            <p className="text-gray-600">จัดการสต็อก คำสั่งซื้อ และการเงินได้ง่ายๆ ผ่าน Seller Centre App</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerCentre;
