import React, {type ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useTeamStore } from '../../store/teamStore';
import clsx from 'clsx';

const buttonStyles = cva(
    'font-medium rounded-md transition-colors',
    {
        variants: {
            intent: {
                primary: '', // 팀에 따라 동적으로 결정될 것이므로 비워둠
                secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
                outline: '', // 팀에 따라 동적으로 결정될 것이므로 비워둠
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

    // 선택된 팀에 따라 동적으로 컬러 클래스 생성
    const teamColorClasses = () => {
        if (!selectedTeam) {
            // 기본 컬러 (팀 선택 안 했을 때)
            return {
                primary: 'bg-primary-600 text-white hover:bg-primary-700',
                outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50',
            };
        }

        return {
            primary: `bg-teams-${selectedTeam}-primary text-white hover:opacity-90`,
            outline: `border border-teams-${selectedTeam}-primary text-teams-${selectedTeam}-primary hover:bg-gray-50`,
        };
    };

    // 최종 클래스명 생성
    const computedClassName = clsx(
        buttonStyles({ intent, size, fullWidth }),
        intent === 'primary' && teamColorClasses().primary,
        intent === 'outline' && teamColorClasses().outline,
        className
    );

    return (
        <button
            className={computedClassName}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;