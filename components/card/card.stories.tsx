import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./index";

const meta = {
  title: "Components/Card",
  component: Card,
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
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: "Default title",
        children: <div>My default content</div>
    }
};

export const Secondary: Story = {
    args: {
        title: "Title",
        children: <div>My default content 22</div>
    }
};

export const RedBackground: Story = {
    args: {
        title: "Card with red background",
        backgroundColoring: "red",
        children: <div>My default content 22</div>
    },
};
