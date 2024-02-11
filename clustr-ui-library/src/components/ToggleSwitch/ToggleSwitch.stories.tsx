import type { Meta, StoryObj } from '@storybook/react'
import { ToggleSwitch } from './ToggleSwitch'

const meta: Meta<typeof ToggleSwitch> = {
    title: 'Components/ToggleSwitch',
    component: ToggleSwitch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
