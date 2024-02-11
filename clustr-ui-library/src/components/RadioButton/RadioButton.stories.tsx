import type { Meta, StoryObj } from '@storybook/react'
import { RadioButton } from './RadioButton'

const meta: Meta<typeof RadioButton> = {
    title: 'Components/RadioButton',
    component: RadioButton,
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
