import Header from "./Header";
import type { Meta, StoryObj } from "@storybook/react";
import { Previous, TabButton } from "./components";
import LogoImg from "./components/LogoImg";

const meta = {
  title: "components/layout/header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const MainHeader: Story = {
  render: () => (
    <Header>
      <LogoImg />
    </Header>
  ),
};

export const PreviousOnly: Story = {
  render: () => (
    <Header>
      <Previous />
    </Header>
  ),
};

export const PreviousAndTabButton: Story = {
  render: () => (
    <Header>
      <Previous />
      <TabButton />
    </Header>
  ),
};
