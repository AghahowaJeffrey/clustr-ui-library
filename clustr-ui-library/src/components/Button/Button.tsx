import React from 'react'
import clsx from 'clsx'
import './button.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
    type?: 'button' | 'submit'
    disabled?: boolean
    size?: 'small' | 'medium' | 'large'
    children?: React.ReactNode
    variant?: 'default' | 'secondary' | 'ghost'
    to?: string
    targetBlank?: boolean
    className?: string
    icon?: React.ReactNode | null
    onclick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<
    ButtonProps & React.ButtonHTMLAttributes<HTMLElement>
> = ({
    type = 'button',
    disabled,
    size,
    variant,
    to,
    targetBlank,
    className,
    icon,
    onClick,
    ...ButtonProps
}) => {
    return (
        <button
            {...ButtonProps}
            className={clsx(
                'button--default',
                size && `button--${size}`,
                variant && `button--${variant}`
            )}
            onClick={!disabled ? onClick : undefined}
            target={targetBlank ? '_blank' : undefined}
            disabled={disabled}
            type={type}
        ></button>
    )
}
