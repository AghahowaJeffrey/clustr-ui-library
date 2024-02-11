import React from 'react'
import clsx from 'clsx'

type RoutePart = string | Record<string, any>

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    to?: string | [string, RoutePart?]
    children?: React.ReactNode
    target?: string
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export const Link: React.FC<
    LinkProps & React.HTMLAttributes<HTMLAnchorElement>
> = ({ to, target, children, ...LinkProps }) => {
    return (
        <a
            href={typeof to === 'string' ? to : '#'}
            className={clsx()}
            target={target}
            {...LinkProps}
        ></a>
    )
}
