import type { Meta, StoryObj } from "@storybook/react";
import { CountEditorWrap } from "./index";

const meta = {
  title: "Components/CountEditorWrap",
  component: CountEditorWrap,
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
} satisfies Meta<typeof CountEditorWrap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    }
};
