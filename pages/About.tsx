import React from 'react';
import { Page } from '../types.ts';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
             <p className="text-base font-semibold leading-7 text-cyan-600">เกี่ยวกับเรา</p>
             <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Loma: Integrated Halal Ecosystem</h1>
             <p className="mt-6 text-lg leading-8 text-gray-600">
               โมเดลธุรกิจที่เชื่อมโยง "ผู้สร้าง" และ "ผู้ขาย" เข้าด้วยกัน เพื่อยกระดับอุตสาหกรรมฮาลาลไทยสู่สากล
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="bg-cyan-100 text-cyan-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">ต้นน้ำ & กลางน้ำ</span>
                    ศูนย์อัจฉริยะเพื่ออุตสาหกรรมฮาลาล
                </h3>
                <p className="text-gray-600 mb-4">
                    ภารกิจหลักคือ <strong>"การพัฒนาและผลิต"</strong> โดยทำหน้าที่เป็นพี่เลี้ยงให้กับกลุ่มผู้ประกอบการกว่า 270 ราย ใน 3 กลุ่มหลัก ได้แก่ ประมง, ผลไม้ และสมุนไพร
                </p>
                <ul className="space-y-3 text-gray-600 list-disc pl-5">
                    <li><strong>Infrastructure:</strong> ให้บริการห้องเย็น (Cold Storage) โรงงานแปรรูป และศูนย์บรรจุภัณฑ์มาตรฐาน</li>
                    <li><strong>R&D Solution:</strong> วิจัยสูตรผลิตภัณฑ์ ออกแบบ Packaging และควบคุมคุณภาพ (QC) ให้ได้มาตรฐานฮาลาล</li>
                    <li><strong>Cluster Management:</strong> บริหารจัดการกลุ่มผู้ผลิตเพื่อสร้าง Champion Products</li>
                </ul>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="bg-red-100 text-red-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">ปลายน้ำ</span>
                    Loma (โลมา)
                </h3>
                <p className="text-gray-600 mb-4">
                    ภารกิจหลักคือ <strong>"การกระจายสินค้าและการตลาด"</strong> รับไม้ต่อจากศูนย์อัจฉริยะเพื่อส่งมอบสินค้าคุณภาพถึงมือผู้บริโภค
                </p>
                <ul className="space-y-3 text-gray-600 list-disc pl-5">
                    <li><strong>Digital Platform:</strong> จำหน่ายผ่าน Loma Application และ Social Commerce (TikTok, Facebook)</li>
                    <li><strong>Distribution Hub:</strong> กระจายสินค้าผ่าน Asian Mall และร้านค้าชุมชนทั่วประเทศ</li>
                    <li><strong>Affiliate Network:</strong> ระบบตัวแทนช่วยขายเพื่อการเข้าถึงลูกค้าที่กว้างขวางยิ่งขึ้น</li>
                </ul>
             </div>
          </div>

          <div className="mt-16 text-center">
             <h2 className="text-2xl font-bold text-gray-900 mb-6">ร่วมเป็นส่วนหนึ่งของระบบนิเวศของเรา</h2>
            <button
              onClick={() => onNavigate('all-products')}
              className="px-8 py-3 bg-cyan-600 text-white font-bold rounded-md hover:bg-cyan-700 transition-colors duration-300 shadow-lg shadow-cyan-500/40"
            >
              เลือกซื้อสินค้าคุณภาพ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;