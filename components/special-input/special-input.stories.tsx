import type { Meta, StoryObj } from "@storybook/react";
import { SpecialInput } from "./index";

const meta = {
  title: "Components/SpecialInput",
  component: SpecialInput,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
        return (
            <div style={{
                background: "#fff",
                padding: "20px",
                display: "flex",
                justifyContent: "center"
            }}>
                <Story />
            </div>
        )
    }
  ]
} satisfies Meta<typeof SpecialInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    }
};
