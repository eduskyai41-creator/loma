
import React, { useState } from 'react';
import { Page, User } from '../types.ts';
import { useToast } from '../hooks/useToast.ts';

interface AuthProps {
    onLogin: (user: User) => void;
    onNavigate: (page: Page) => void;
}

export const Login: React.FC<AuthProps> = ({ onLogin, onNavigate }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const addToast = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock authentication
        if (email && password) {
            const mockUser: User = {
                name: email.split('@')[0],
                email: email,
                role: 'user',
                avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=random`
            };
            onLogin(mockUser);
            addToast({
                type: 'success',
                title: isRegister ? 'สมัครสมาชิกสำเร็จ' : 'เข้าสู่ระบบสำเร็จ',
                message: `ยินดีต้อนรับคุณ ${mockUser.name} กลับสู่ Loma`,
            });
            onNavigate('home');
        } else {
             addToast({
                type: 'error',
                title: 'ข้อผิดพลาด',
                message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
            });
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        {isRegister ? 'สร้างบัญชีใหม่' : 'เข้าสู่ระบบ'}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        หรือ{' '}
                        <button onClick={() => setIsRegister(!isRegister)} className="font-medium text-cyan-600 hover:text-cyan-500">
                             {isRegister ? 'เข้าสู่ระบบบัญชีเดิม' : 'สมัครสมาชิกใหม่'}
                        </button>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                                placeholder="อีเมล"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                                placeholder="รหัสผ่าน"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                        >
                            {isRegister ? 'สมัครสมาชิก' : 'เข้าสู่ระบบ'}
                        </button>
                    </div>
                </form>
                
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">หรือดำเนินการต่อด้วย</span>
                        </div>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-3">
                         <button onClick={() => addToast({type: 'info', title: 'แจ้งเตือน', message: 'ระบบล็อกอินด้วย Facebook กำลังพัฒนา'})} className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            Facebook
                         </button>
                         <button onClick={() => addToast({type: 'info', title: 'แจ้งเตือน', message: 'ระบบล็อกอินด้วย Google กำลังพัฒนา'})} className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            Google
                         </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface ProfileProps {
    user: User | null;
    onNavigate: (page: Page) => void;
    onLogout: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ user, onNavigate, onLogout }) => {
    if (!user) {
        onNavigate('login');
        return null;
    }

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-cyan-600 h-32"></div>
                    <div className="px-6 pb-6">
                        <div className="relative flex justify-between items-end -mt-12 mb-6">
                            <img className="h-24 w-24 rounded-full ring-4 ring-white bg-white" src={user.avatar} alt={user.name} />
                            <div className="space-x-3">
                                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">แก้ไขโปรไฟล์</button>
                                <button onClick={onLogout} className="px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700">ออกจากระบบ</button>
                            </div>
                        </div>
                        
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                            <p className="text-sm text-gray-500">{user.email}</p>
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <span className="px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs font-semibold">สมาชิกทั่วไป</span>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-gray-200 pt-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">ประวัติการสั่งซื้อ</h3>
                            <div className="bg-gray-50 rounded-lg p-8 text-center border border-dashed border-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                <p className="text-gray-500">ยังไม่มีรายการคำสั่งซื้อ</p>
                                <button onClick={() => onNavigate('all-products')} className="mt-4 text-cyan-600 hover:underline">เริ่มช้อปปิ้งเลย</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
