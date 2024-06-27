import type { Meta, StoryObj } from "@storybook/react";
import { CountViewer } from "./index";

const meta = {
  title: "Components/CountViewer",
  component: CountViewer,
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
} satisfies Meta<typeof CountViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        currentCount: 3
    }
};
