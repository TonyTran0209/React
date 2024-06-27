import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
        return (
            <div style={{
                background: "black",
                padding: "20px",
                display: "flex",
                justifyContent: "center"
            }}>
                <Story />
            </div>
        )
    }
  ]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: "My button label"
    }
};
