
import React from 'react';

const HelpCenter: React.FC = () => {
    return (
        <div className="bg-white min-h-screen py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900">ศูนย์ช่วยเหลือ</h1>
                    <div className="mt-4 max-w-xl mx-auto">
                        <input type="text" placeholder="พิมพ์คำถามของคุณที่นี่..." className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-cyan-500 focus:border-cyan-500" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition cursor-pointer">
                        <h3 className="font-bold text-lg mb-2 text-cyan-700">การสั่งซื้อสินค้า</h3>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>• วิธีการสั่งซื้อสินค้า</li>
                            <li>• การใช้คูปองส่วนลด</li>
                            <li>• ตรวจสอบสถานะคำสั่งซื้อ</li>
                        </ul>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition cursor-pointer">
                        <h3 className="font-bold text-lg mb-2 text-cyan-700">การชำระเงิน</h3>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>• ช่องทางการชำระเงิน</li>
                            <li>• แจ้งชำระเงินโอน</li>
                            <li>• ความปลอดภัยในการชำระเงิน</li>
                        </ul>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition cursor-pointer">
                        <h3 className="font-bold text-lg mb-2 text-cyan-700">การจัดส่ง</h3>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>• ค่าจัดส่งและระยะเวลา</li>
                            <li>• ติดตามพัสดุ</li>
                            <li>• พื้นที่ให้บริการ</li>
                        </ul>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition cursor-pointer">
                        <h3 className="font-bold text-lg mb-2 text-cyan-700">การคืนสินค้าและคืนเงิน</h3>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>• นโยบายการคืนสินค้า</li>
                            <li>• วิธีการขอคืนเงิน</li>
                            <li>• ติดตามสถานะการคืน</li>
                        </ul>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition cursor-pointer">
                        <h3 className="font-bold text-lg mb-2 text-cyan-700">บัญชีผู้ใช้</h3>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>• การสมัครสมาชิก</li>
                            <li>• ลืมรหัสผ่าน</li>
                            <li>• แก้ไขข้อมูลส่วนตัว</li>
                        </ul>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition cursor-pointer">
                        <h3 className="font-bold text-lg mb-2 text-cyan-700">ติดต่อเรา</h3>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>• แชทกับเจ้าหน้าที่</li>
                            <li>• เบอร์โทรศัพท์</li>
                            <li>• ส่งอีเมล</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HelpCenter;
