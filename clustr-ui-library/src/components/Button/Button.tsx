import React from 'react'
import clsx from 'clsx'
import { Link } from '../Link'

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
}

export const Button: React.FC<
    ButtonProps & React.ButtonHTMLAttributes<HTMLElement>
> = ({
    children,
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
    const ButtonComponent = to ? Link : 'button'
    const linkDependentProps = to
        ? {
              target: targetBlank ? '_blank' : undefined,
              to: !disabled ? to : undefined,
          }
        : { type: type }

    return (
        <ButtonComponent
            className={clsx(
                'button',
                size && `button--${size}`,
                variant && `button--${variant}`,
                !!icon && `button--has--icon`,
                !children && 'button--no-content',
                className
            )}
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
            type={type}
            {...linkDependentProps}
            {...ButtonProps}
        >
            {icon ? <span className="button__icon">{icon}</span> : null}
            {children ? (
                <span className="LemonButton__content">{children}</span>
            ) : null}
        </ButtonComponent>
    )
}
