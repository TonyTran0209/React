import type { Meta, StoryObj } from "@storybook/react";
import { CountButton } from "./index";

const meta = {
  title: "Components/CountButton",
  component: CountButton,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
        return (
            <div style={{
                background: "white",
                padding: "20px",
                display: "flex",
                justifyContent: "center"
            }}>
                <Story />
            </div>
        )
    }
  ]
} satisfies Meta<typeof CountButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Addition: Story = {
    args: {
        type: "addition"
    }
};


export const Subtraction: Story = {
    args: {
        type: "subtraction"
    }
};
