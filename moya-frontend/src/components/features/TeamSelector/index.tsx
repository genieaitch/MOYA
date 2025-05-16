import React from 'react';
import { useTeamStore, type TeamId } from '../../../store/teamStore';

interface Team {
    id: TeamId;
    name: string;
    logo?: string;
}

const teams: Team[] = [
    { id: 'doosan', name: '두산 베어스' },
    { id: 'samsung', name: '삼성 라이온즈' },
    { id: 'lg', name: 'LG 트윈스' },
    { id: 'kt', name: 'KT 위즈' },
    { id: 'ssg', name: 'SSG 랜더스' },
    { id: 'kiwoom', name: '키움 히어로즈' },
    { id: 'nc', name: 'NC 다이노스' },
    { id: 'hanwha', name: '한화 이글스' },
    { id: 'lotte', name: '롯데 자이언츠' },
    { id: 'kia', name: 'KIA 타이거즈' },
];

const Index: React.FC = () => {
    const { selectedTeam, setSelectedTeam } = useTeamStore();

    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold mb-3">마이팀 선택</h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                {teams.map((team) => (
                    <button
                        key={team.id}
                        className={`p-2 rounded text-sm transition-all ${
                            selectedTeam === team.id
                                ? `bg-teams-${team.id}-primary text-white`
                                : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                        onClick={() => setSelectedTeam(team.id)}
                    >
                        {team.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Index;