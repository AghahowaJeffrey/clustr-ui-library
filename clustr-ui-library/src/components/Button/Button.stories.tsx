import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button.tsx'

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
        to: 'www.facebook.com',
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
