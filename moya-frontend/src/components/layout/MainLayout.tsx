import React, { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTeamStore, type TeamId } from '../../store/teamStore';

interface MainLayoutProps {
    children: ReactNode;
}

// 팀별 컬러를 직접 매핑 (CSS 변수 대신 직접 색상 코드 사용)
const teamColorMap: Record<TeamId, { primary: string, secondary: string }> = {
    'doosan': { primary: '#131230', secondary: '#1D1D1B' },
    'samsung': { primary: '#0066B3', secondary: '#B3DAFE' },
    'lg': { primary: '#C30452', secondary: '#000000' },
    'kt': { primary: '#000000', secondary: '#E30613' },
    'ssg': { primary: '#CE0E2D', secondary: '#FFFFFF' },
    'kiwoom': { primary: '#820024', secondary: '#FFFFFF' },
    'nc': { primary: '#315288', secondary: '#BCCEE3' },
    'hanwha': { primary: '#FF6600', secondary: '#000000' },
    'lotte': { primary: '#002856', secondary: '#C4161C' },
    'kia': { primary: '#EA0029', secondary: '#FFFFFF' },
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const { selectedTeam } = useTeamStore();

    // 선택된 팀에 따라 직접 스타일 객체 생성
    const headerStyle = {
        backgroundColor: selectedTeam
            ? teamColorMap[selectedTeam].primary
            : '#0284c7',
    };

    // 문서 루트에 현재 선택된 팀의 색상을 CSS 변수로 설정
    React.useEffect(() => {
        if (selectedTeam) {
            document.documentElement.style.setProperty('--team-primary-color', teamColorMap[selectedTeam].primary);
            document.documentElement.style.setProperty('--team-secondary-color', teamColorMap[selectedTeam].secondary);
        } else {
            document.documentElement.style.setProperty('--team-primary-color', '#0284c7');
            document.documentElement.style.setProperty('--team-secondary-color', '#0ea5e9');
        }
    }, [selectedTeam]);

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="text-white p-4 shadow-md" style={headerStyle}>
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

            <main className="container mx-auto p-4 mt-4">
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