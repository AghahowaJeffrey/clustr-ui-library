import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
    title: 'Components/Icon',
    component: Icon,
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
