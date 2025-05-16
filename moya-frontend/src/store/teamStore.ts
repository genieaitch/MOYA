import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TeamId = 'doosan' | 'samsung' | 'lg' | 'kt' | 'ssg' | 'kiwoom' | 'nc' | 'hanwha' | 'lotte' | 'kia';

interface TeamState {
    selectedTeam: TeamId | null;
    setSelectedTeam: (team: TeamId) => void;
}

export const useTeamStore = create<TeamState>()(
    persist(
        (set) => ({
            selectedTeam: null,
            setSelectedTeam: (team) => set({ selectedTeam: team }),
        }),
        {
            name: 'moya-team-storage',
        }
    )
);