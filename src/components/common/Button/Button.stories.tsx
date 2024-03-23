import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'SWC Components/ Button ',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='px-5 py-3'>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'купить за 190 000'
  }
};
