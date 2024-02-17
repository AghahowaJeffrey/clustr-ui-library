import React from 'react'
import clsx from 'clsx'

import './link.css'

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    to?: string
    children?: React.ReactNode
    target?: string
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
    disabled?: boolean
}

export const Link: React.FC<
    LinkProps & React.HTMLAttributes<HTMLAnchorElement>
> = ({ to, target, children, onClick, className, disabled, ...LinkProps }) => {
    return (
        <a
            href={typeof to === 'string' ? to : '#'}
            className={clsx('link', disabled && 'link--disabled', className)}
            target={target ? target : undefined}
            onClick={onClick}
            {...LinkProps}
        >
            {children}
        </a>
    )
}
