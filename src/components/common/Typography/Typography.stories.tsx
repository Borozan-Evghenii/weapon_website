import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta = {
  title: 'SWC Components / Typography ',
  component: Typography,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='px-5 py-3'>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tag: 'h3',
    children: 'пистолет травматический risen /10x28 mm/5,5" - 136 mm',
    size: 'h1'
  }
};
