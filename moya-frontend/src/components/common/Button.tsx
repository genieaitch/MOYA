import React, { type ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useTeamStore, type TeamId } from '../../store/teamStore';
import clsx from 'clsx';

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

const buttonStyles = cva(
    'font-medium rounded-md transition-colors',
    {
        variants: {
            intent: {
                primary: '',
                secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
                outline: '',
            },
            size: {
                sm: 'px-3 py-1 text-sm',
                md: 'px-4 py-2',
                lg: 'px-6 py-3 text-lg',
            },
            fullWidth: {
                true: 'w-full',
            },
        },
        defaultVariants: {
            intent: 'primary',
            size: 'md',
            fullWidth: false,
        },
    }
);

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonStyles> {}

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           intent = 'primary',
                                           size = 'md',
                                           fullWidth = false,
                                           className,
                                           ...props
                                       }) => {
    const { selectedTeam } = useTeamStore();

    // 인라인 스타일 객체를 생성하여 직접 팀 컬러 적용
    const getButtonStyle = () => {
        if (intent === 'primary') {
            return {
                backgroundColor: selectedTeam ? teamColorMap[selectedTeam]?.primary : '#0ea5e9',
                color: 'white',
            };
        }
        if (intent === 'outline') {
            return {
                borderColor: selectedTeam ? teamColorMap[selectedTeam]?.primary : '#0ea5e9',
                borderWidth: '1px',
                color: selectedTeam ? teamColorMap[selectedTeam]?.primary : '#0ea5e9',
            };
        }
        return {};
    };

    // 최종 클래스명 및 스타일 생성
    const computedClassName = clsx(
        buttonStyles({ intent, size, fullWidth }),
        intent === 'secondary' && 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        className
    );

    return (
        <button
            className={computedClassName}
            style={intent !== 'secondary' ? getButtonStyle() : undefined}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;