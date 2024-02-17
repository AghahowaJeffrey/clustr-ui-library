import type { Meta, StoryObj } from '@storybook/react'
import { CheckBox } from './CheckBox'

const meta: Meta<typeof CheckBox> = {
    title: 'Components/CheckBox',
    component: CheckBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'Check this out',
        checked: true,
        defaultChecked: false,
        disabled: false,
        id: 'update',
        bordered: true,
    },
}
