import type { Meta, StoryObj } from '@storybook/react'
import { Img } from './Img'

const meta: Meta<typeof Img> = {
    title: 'Components/Img',
    component: Img,
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
