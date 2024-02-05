import React, { ComponentProps } from 'react'

export interface ButtonProps extends ComponentProps<'button'> {
    type?: 'button' | 'submit'
    disabled?: boolean
    size?: 'xsmall' | 'small' | 'medium' | 'large'
    children?: React.ReactNode
    variant?: 'default' | 'secondary' | 'ghost'
    to?: string
    targetBlank?: boolean
    className?: string
    icon?: React.ReactNode | null
}

export const Button: React.FC<ButtonProps> = ({
    type,
    disabled,
    size,
    variant,
    to,
    targetBlank,
    className,
    icon,
    ...props
}) => {
    return <button {...props} className={}></button>
}
