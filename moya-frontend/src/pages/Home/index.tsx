import React, { useState, useEffect } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import TeamSelector from '../../components/features/TeamSelector';
import { useTeamStore, type TeamId } from '../../store/teamStore';
import Button from '../../components/common/Button';

// 팀별 컬러 매핑
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

// 임시 데이터 - 오늘의 경기
const todayGames = [
    {
        id: 1,
        homeTeam: 'lg',
        homeTeamName: 'LG',
        awayTeam: 'doosan',
        awayTeamName: '두산',
        time: '18:30',
        location: '잠실',
        date: '05/16 (금)'
    },
    {
        id: 2,
        homeTeam: 'hanwha',
        homeTeamName: '한화',
        awayTeam: 'kia',
        awayTeamName: 'KIA',
        time: '18:30',
        location: '대전',
        date: '05/16 (금)'
    },
    {
        id: 3,
        homeTeam: 'lotte',
        homeTeamName: '롯데',
        awayTeam: 'ssg',
        awayTeamName: 'SSG',
        time: '18:30',
        location: '사직',
        date: '05/16 (금)'
    },
];

// 임시 동반 입장 데이터
const matchEntries = [
    { id: 1, date: '05/18', teams: 'LG vs 두산', location: '잠실', gender: '남성', age: '20대', count: 2 },
    { id: 2, date: '05/20', teams: '삼성 vs KT', location: '대구', gender: '무관', age: '30대', count: 3 },
    { id: 3, date: '05/21', teams: 'KIA vs 한화', location: '광주', gender: '여성', age: '20대', count: 1 },
];

// 임시 티켓 양도 데이터
const ticketSales = [
    { id: 1, date: '05/19', teams: 'NC vs 키움', location: '창원', section: '1루 내야', price: 15000 },
    { id: 2, date: '05/21', teams: 'KIA vs 한화', location: '광주', section: '외야', price: 8000 },
    { id: 3, date: '05/22', teams: 'LG vs 삼성', location: '잠실', section: '3루 내야', price: 12000 },
];

// 실시간 순위 데이터 (임시)
const standings = [
    { id: 1, team: 'lg', teamName: 'LG 트윈스', wins: 28, losses: 10, pct: 0.737 },
    { id: 2, team: 'ssg', teamName: 'SSG 랜더스', wins: 26, losses: 12, pct: 0.684 },
    { id: 3, team: 'kia', teamName: 'KIA 타이거즈', wins: 23, losses: 15, pct: 0.605 },
    { id: 4, team: 'nc', teamName: 'NC 다이노스', wins: 21, losses: 17, pct: 0.553 },
    { id: 5, team: 'doosan', teamName: '두산 베어스', wins: 18, losses: 20, pct: 0.474 },
];

const HomePage: React.FC = () => {
    const { selectedTeam } = useTeamStore();
    const [currentTime, setCurrentTime] = useState(new Date());

    // 실시간 시간 업데이트
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // 선택된 팀의 색상 가져오기
    const getTeamColor = () => {
        if (!selectedTeam) return '#0ea5e9';
        return teamColorMap[selectedTeam].primary;
    };

    // 동적 섹션 헤더 스타일
    const sectionHeaderStyle = {
        color: getTeamColor(),
        borderLeftWidth: '4px',
        borderLeftStyle: 'solid',
        borderLeftColor: getTeamColor(),
        paddingLeft: '10px',
    };

    return (
        <MainLayout>
            <div className="mb-6">
                <div className="text-3xl font-bold mb-2">MOYA</div>
                <div className="text-gray-600">모두의 야구</div>
                <div className="text-sm text-gray-500 mt-1">
                    {currentTime.toLocaleDateString('ko-KR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
            </div>

            {/* 팀 선택 컴포넌트 */}
            <TeamSelector />

            {/* 오늘의 경기 */}
            <section className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h2 className="text-xl font-semibold mb-4" style={sectionHeaderStyle}>오늘의 경기</h2>

                {todayGames.length > 0 ? (
                    <div className="space-y-4">
                        {todayGames.map(game => (
                            <div key={game.id} className="border rounded-md p-4 hover:bg-gray-50 transition-all">
                                <div className="text-sm text-gray-500 mb-2">{game.date} {game.location}</div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-3">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: teamColorMap[game.homeTeam].primary }}
                                        >
                                            <span className="text-white font-bold">{game.homeTeamName}</span>
                                        </div>
                                        <span className="font-medium">{game.homeTeamName}</span>
                                    </div>
                                    <div className="font-bold text-xl">VS</div>
                                    <div className="flex items-center space-x-3">
                                        <span className="font-medium">{game.awayTeamName}</span>
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: teamColorMap[game.awayTeam].primary }}
                                        >
                                            <span className="text-white font-bold">{game.awayTeamName}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-3 text-gray-600 font-medium">{game.time} 경기 시작</div>
                                <div className="mt-3 flex space-x-2 justify-center">
                                    <Button size="sm" intent="primary">입장 구하기</Button>
                                    <Button size="sm" intent="outline">티켓 구매</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">오늘 예정된 경기가 없습니다.</p>
                )}
            </section>

            <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
                {/* 실시간 순위 */}
                <section className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4" style={sectionHeaderStyle}>실시간 순위</h2>
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead>
                            <tr className="bg-gray-50">
                                <th className="py-2 px-4 text-left">순위</th>
                                <th className="py-2 px-4 text-left">팀</th>
                                <th className="py-2 px-4 text-center">승</th>
                                <th className="py-2 px-4 text-center">패</th>
                                <th className="py-2 px-4 text-center">승률</th>
                            </tr>
                            </thead>
                            <tbody>
                            {standings.map((team, index) => (
                                <tr
                                    key={team.id}
                                    className={`border-b ${selectedTeam === team.team ? 'bg-gray-100' : ''}`}
                                >
                                    <td className="py-2 px-4 font-medium">{index + 1}</td>
                                    <td className="py-2 px-4">
                                        <div className="flex items-center space-x-2">
                                            <div
                                                className="w-3 h-3 rounded-full"
                                                style={{ backgroundColor: teamColorMap[team.team].primary }}
                                            ></div>
                                            <span>{team.teamName}</span>
                                        </div>
                                    </td>
                                    <td className="py-2 px-4 text-center">{team.wins}</td>
                                    <td className="py-2 px-4 text-center">{team.losses}</td>
                                    <td className="py-2 px-4 text-center">{team.pct.toFixed(3)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 동반 입장 모집 */}
                <section className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4" style={sectionHeaderStyle}>동반 입장 모집</h2>

                    {matchEntries.length > 0 ? (
                        <div className="space-y-3">
                            {matchEntries.map(entry => (
                                <div key={entry.id} className="border rounded-md p-3 hover:bg-gray-50 transition-all">
                                    <div className="flex justify-between">
                                        <div className="font-medium">{entry.teams}</div>
                                        <div className="text-sm text-gray-600">{entry.date}</div>
                                    </div>
                                    <div className="mt-1 text-sm text-gray-700">
                                        {entry.location} · {entry.gender} · {entry.age} · {entry.count}명
                                    </div>
                                    <div className="mt-2">
                                        <Button size="sm" intent="outline" fullWidth>신청하기</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">아직 등록된 모집글이 없습니다.</p>
                    )}

                    <Button intent="primary" fullWidth className="mt-4">동반 입장 등록하기</Button>
                </section>
            </div>

            {/* 티켓 양도 */}
            <section className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h2 className="text-xl font-semibold mb-4" style={sectionHeaderStyle}>티켓 양도</h2>

                {ticketSales.length > 0 ? (
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {ticketSales.map(ticket => (
                            <div key={ticket.id} className="border rounded-md p-4 hover:bg-gray-50 transition-all">
                                <div className="flex justify-between">
                                    <div className="font-medium">{ticket.teams}</div>
                                    <div className="text-sm text-gray-600">{ticket.date}</div>
                                </div>
                                <div className="mt-2 text-sm text-gray-700">
                                    {ticket.location} · {ticket.section}
                                </div>
                                <div className="mt-3 flex justify-between items-center">
                                    <span className="font-bold text-lg">
                                        {ticket.price.toLocaleString()}원
                                    </span>
                                    <Button size="sm" intent="primary">구매하기</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">아직 등록된 양도글이 없습니다.</p>
                )}

                <Button intent="primary" fullWidth className="mt-4">티켓 양도 등록하기</Button>
            </section>

            {/* 커뮤니티 최신글 */}
            <section className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h2 className="text-xl font-semibold mb-4" style={sectionHeaderStyle}>팬 커뮤니티</h2>

                <div className="space-y-3">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="border-b pb-2">
                            <div className="font-medium hover:text-primary-600 cursor-pointer">
                                {selectedTeam ? `${teamColorMap[selectedTeam].teamName || '우리팀'}의 ` : ''}
                                5월 16일 경기 관람 후기입니다.
                            </div>
                            <div className="flex justify-between text-sm text-gray-500 mt-1">
                                <span>야구팬{index + 1}</span>
                                <span>1시간 전</span>
                            </div>
                        </div>
                    ))}
                </div>

                <Button intent="primary" fullWidth className="mt-4">커뮤니티 가기</Button>
            </section>
        </MainLayout>
    );
};

export default HomePage;