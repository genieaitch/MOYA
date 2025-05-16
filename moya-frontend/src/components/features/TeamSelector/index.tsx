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

// 팀별 컬러를 직접 매핑 (Tailwind의 동적 클래스 생성 문제 해결)
const teamColorMap: Record<TeamId, { bg: string, hover: string }> = {
    'doosan': { bg: 'bg-[#131230]', hover: 'hover:bg-opacity-90' },
    'samsung': { bg: 'bg-[#0066B3]', hover: 'hover:bg-opacity-90' },
    'lg': { bg: 'bg-[#C30452]', hover: 'hover:bg-opacity-90' },
    'kt': { bg: 'bg-[#000000]', hover: 'hover:bg-[#1A1A1A]' },
    'ssg': { bg: 'bg-[#CE0E2D]', hover: 'hover:bg-opacity-90' },
    'kiwoom': { bg: 'bg-[#820024]', hover: 'hover:bg-opacity-90' },
    'nc': { bg: 'bg-[#315288]', hover: 'hover:bg-opacity-90' },
    'hanwha': { bg: 'bg-[#FF6600]', hover: 'hover:bg-opacity-90' },
    'lotte': { bg: 'bg-[#002856]', hover: 'hover:bg-opacity-90' },
    'kia': { bg: 'bg-[#EA0029]', hover: 'hover:bg-opacity-90' },
};

const TeamSelector: React.FC = () => {
    const { selectedTeam, setSelectedTeam } = useTeamStore();

    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold mb-3">마이팀 선택</h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                {teams.map((team) => {
                    // 선택된 팀에 따라 직접 스타일 적용
                    const isSelected = selectedTeam === team.id;
                    const buttonStyle = isSelected
                        ? `${teamColorMap[team.id].bg} text-white`
                        : 'bg-gray-100 hover:bg-gray-200';

                    return (
                        <button
                            key={team.id}
                            className={`p-2 rounded text-sm transition-all ${buttonStyle}`}
                            onClick={() => setSelectedTeam(team.id)}
                        >
                            {team.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default TeamSelector;