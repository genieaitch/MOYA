import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import TeamSelector from '../../components/features/TeamSelector';
import { useTeamStore } from '../../store/teamStore';

// 임시 데이터
const todayGames = [
    { id: 1, homeTeam: 'LG', awayTeam: '두산', time: '18:30', location: '잠실' },
    { id: 2, homeTeam: '한화', awayTeam: 'KIA', time: '18:30', location: '대전' },
    { id: 3, homeTeam: '롯데', awayTeam: 'SSG', time: '18:30', location: '사직' },
];

// 임시 동반 입장 데이터
const matchEntries = [
    { id: 1, date: '05/18', teams: 'LG vs 두산', location: '잠실', gender: '남성', age: '20대', count: 2 },
    { id: 2, date: '05/20', teams: '삼성 vs KT', location: '대구', gender: '무관', age: '30대', count: 3 },
];

// 임시 티켓 양도 데이터
const ticketSales = [
    { id: 1, date: '05/19', teams: 'NC vs 키움', location: '창원', section: '1루 내야', price: 15000 },
    { id: 2, date: '05/21', teams: 'KIA vs 한화', location: '광주', section: '외야', price: 8000 },
];

const HomePage: React.FC = () => {
    const { selectedTeam } = useTeamStore();

    // 동적 섹션 헤더 스타일
    const sectionHeaderStyle = selectedTeam
        ? { color: `var(--team-color)` }
        : { color: 'var(--color-primary-600)' };

    return (
        <MainLayout>
            {/* 팀 선택 컴포넌트 */}
            <TeamSelector />

            {/* 오늘의 경기 */}
            <section className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h2 className="text-xl font-semibold mb-4" style={sectionHeaderStyle}>오늘의 경기</h2>

                {todayGames.length > 0 ? (
                    <div className="space-y-2">
                        {todayGames.map(game => (
                            <div key={game.id} className="border rounded-md p-3 flex justify-between items-center hover:bg-gray-50">
                                <div className="font-medium">{game.homeTeam} vs {game.awayTeam}</div>
                                <div className="text-gray-600 text-sm">
                                    {game.location} · {game.time}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">오늘 예정된 경기가 없습니다.</p>
                )}
            </section>

            {/* 동반 입장 모집 */}
            <section className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h2 className="text-xl font-semibold mb-4" style={sectionHeaderStyle}>동반 입장 모집</h2>

                {matchEntries.length > 0 ? (
                    <div className="space-y-2">
                        {matchEntries.map(entry => (
                            <div key={entry.id} className="border rounded-md p-3 hover:bg-gray-50">
                                <div className="flex justify-between">
                                    <div className="font-medium">{entry.teams}</div>
                                    <div className="text-sm text-gray-600">{entry.date}</div>
                                </div>
                                <div className="mt-1 text-sm text-gray-700">
                                    {entry.location} · {entry.gender} · {entry.age} · {entry.count}명
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">아직 등록된 모집글이 없습니다.</p>
                )}

                <button className="mt-4 bg-gray-100 hover:bg-gray-200 rounded-md px-4 py-2 text-sm w-full">
                    더 보기
                </button>
            </section>

            {/* 티켓 양도 */}
            <section className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h2 className="text-xl font-semibold mb-4" style={sectionHeaderStyle}>티켓 양도</h2>

                {ticketSales.length > 0 ? (
                    <div className="space-y-2">
                        {ticketSales.map(ticket => (
                            <div key={ticket.id} className="border rounded-md p-3 hover:bg-gray-50">
                                <div className="flex justify-between">
                                    <div className="font-medium">{ticket.teams}</div>
                                    <div className="text-sm text-gray-600">{ticket.date}</div>
                                </div>
                                <div className="mt-1 flex justify-between">
                  <span className="text-sm text-gray-700">
                    {ticket.location} · {ticket.section}
                  </span>
                                    <span className="font-medium">{ticket.price.toLocaleString()}원</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">아직 등록된 양도글이 없습니다.</p>
                )}

                <button className="mt-4 bg-gray-100 hover:bg-gray-200 rounded-md px-4 py-2 text-sm w-full">
                    더 보기
                </button>
            </section>
        </MainLayout>
    );
};

export default HomePage;