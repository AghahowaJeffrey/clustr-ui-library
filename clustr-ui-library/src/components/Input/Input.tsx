import React from 'react'
import clsx from 'clsx'

import './input.css'

interface InputPropsBase
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        'onChange' | 'size' | 'prefix'
    > {
    id?: string
    placeholder?: string
    status?: 'default' | 'success' | 'danger'
    disabled?: boolean
    size?: 'small' | 'medium' | 'large'
    prefix?: React.ReactElement
    suffix?: React.ReactElement
    onPressEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface InputPropsText extends InputPropsBase {
    type?: 'text' | 'password' | 'email' | 'search' | 'url'
    value?: string
    defaultValue?: string
    onChange?: (newValue: string) => void
}

export interface InputPropsNumber
    extends InputPropsBase,
        Pick<
            React.InputHTMLAttributes<HTMLInputElement>,
            'step' | 'min' | 'max'
        > {
    type: 'number'
    value?: number
    defaultValue?: number
    onChange?: (newValue: number | undefined) => void
}

export type InputProps = InputPropsText | InputPropsNumber

export const Input: React.FC<
    InputProps & React.InputHTMLAttributes<HTMLElement>
> = ({
    className,
    onChange,
    status = 'default',
    type,
    value,
    prefix,
    suffix,
    size,
    placeholder,
    disabled,
    ...InputProps
}) => {
    return (
        <span
            className={clsx(
                'input',
                status !== 'default' && `input--status-${status}`,
                disabled && `input--disabled`,
                type && `input-type--${type}`,
                size && `input--${size}`,
                value && 'input--has--content}',
                disabled && 'input--focused'
            )}
        >
            {prefix}
            <input
                className="input__input"
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                type={type}
                {...InputProps}
            />
            {suffix}
        </span>
    )
}
