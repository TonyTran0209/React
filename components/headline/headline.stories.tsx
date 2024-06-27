import type { Meta, StoryObj } from "@storybook/react";
import { Headline } from "./index";

const meta = {
  title: "Components/Headline",
  component: Headline,
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
} satisfies Meta<typeof Headline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: "My headline"
    }
};
