import React, {type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           variant = 'primary',
                                           size = 'md',
                                           fullWidth = false,
                                           className,
                                           ...props
                                       }) => {
    return (
        <button
            className={clsx(
                'font-medium rounded-md transition-colors',
                // 사이즈
                size === 'sm' && 'px-3 py-1 text-sm',
                size === 'md' && 'px-4 py-2',
                size === 'lg' && 'px-6 py-3 text-lg',
                // 색상 변형
                variant === 'primary' && 'bg-primary-600 text-white hover:bg-primary-700',
                variant === 'secondary' && 'bg-gray-200 text-gray-800 hover:bg-gray-300',
                variant === 'outline' && 'border border-primary-600 text-primary-600 hover:bg-primary-50',
                // 전체 너비
                fullWidth && 'w-full',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;