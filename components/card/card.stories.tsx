import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./index";

const meta = {
  title: "Base/Card",
  component: Card,
  decorators: [
    (Story) => (
      <div
        style={{
          background: "black",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    backgroundColoring: "red",
    title: "The Hello",
  },
};

export const WithChildBrightred: Story = {
  args: {
    backgroundColoring: "brightRed",
    title: "Another title",
    children: <div>My test</div>,
  },
};

export const WithChildWhite: Story = {
  args: {
    backgroundColoring: "white",
    title: "Another title",
    children: <div>My test</div>,
  },
};
