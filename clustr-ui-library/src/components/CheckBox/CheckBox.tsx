import clsx from 'clsx'

import './checkbox.css'

export interface CheckBoxProps {
    checked?: boolean
    defaultChecked?: boolean
    disabled?: boolean
    label?: string
    id?: string
    className?: string
    size?: 'small' | 'medium'
    bordered?: boolean
}

export const CheckBox = ({
    checked,
    defaultChecked,
    disabled,
    label,
    id,
    className,
    bordered,
    size,
    ...CheckBoxProps
}: CheckBoxProps) => {
    return (
        <span
            className={clsx(
                'checkbox',
                bordered && 'checkbox-bordered',
                size && 'checkbox-borderless',
                className
            )}
        >
            <input
                className="checkbox__input"
                type="checkbox"
                id={id}
                defaultChecked={defaultChecked}
                checked={checked}
                {...CheckBoxProps}
                disabled={disabled}
            />
            <label htmlFor={id}>
                {label && <span className="LemonCheckbox__label">{label}</span>}
            </label>
        </span>
    )
}
