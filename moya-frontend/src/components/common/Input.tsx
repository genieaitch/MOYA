import React, {type InputHTMLAttributes } from 'react';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
                                         label,
                                         error,
                                         fullWidth = false,
                                         className,
                                         ...props
                                     }) => {
    return (
        <div className={clsx('mb-4', fullWidth && 'w-full')}>
            {label && (
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    {label}
                </label>
            )}
            <input
                className={clsx(
                    'px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500',
                    error ? 'border-red-500' : 'border-gray-300',
                    fullWidth && 'w-full',
                    className
                )}
                {...props}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
};

export default Input;