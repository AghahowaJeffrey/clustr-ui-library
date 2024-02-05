import type {Meta, StoryObj} from "@storybook/react";
import { Button } from "./Button.tsx";


const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Default",
    args: {
        children: "Click me",

    }
};
