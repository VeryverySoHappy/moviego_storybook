import type { Meta, StoryObj } from '@storybook/react';
import PlaceItem from '../../components/List/PlaceItem';

const meta = {
  title: 'List/PlaceItem',
  component: PlaceItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: "text",
      description: "미디어에 나온 장소명",
      defaultValue: "장소명"
    }
  },
} satisfies Meta<typeof PlaceItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "장소명"
  },
};