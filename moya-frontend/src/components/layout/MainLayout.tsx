import React, {type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-primary-600 text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold">MOYA</Link>
                    <nav className="space-x-4">
                        <Link to="/match-entry" className="hover:underline">동반 입장</Link>
                        <Link to="/ticket-sale" className="hover:underline">티켓 양도</Link>
                        <Link to="/community" className="hover:underline">소모임</Link>
                        <Link to="/mypage" className="hover:underline">마이페이지</Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto p-4 mt-8">
                {children}
            </main>

            <footer className="bg-gray-800 text-white p-6 mt-12">
                <div className="container mx-auto">
                    <p className="text-center">© 2025 MOYA - 모두의 야구</p>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;