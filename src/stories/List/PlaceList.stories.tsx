import type { Meta, StoryObj } from '@storybook/react';
import PlaceList from '../../components/List/PlaceList';

const meta = {
  title: 'List/PlaceList',
  component: PlaceList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeList: {
      control: "array",
      description: "태그 리스트",
      defaultValue: ["tag1", "tag2", "tag3"],
    },
  },
} satisfies Meta<typeof PlaceList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeList: ["tag1", "tag2", "tag3"],
  },
};