import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Click me',
        variant: 'default',
        disabled: false,
        targetBlank: true,
        type: 'button',
        size: 'small',
    },
}

export const Secondary: Story = {
    args: {
        children: 'Click me',
        variant: 'secondary',
    },
}

export const Ghost: Story = {
    args: {
        children: 'Click me',
        variant: 'ghost',
    },
}

export const Large: Story = {
    args: {
        children: 'Click me',
        size: 'large',
    },
}
