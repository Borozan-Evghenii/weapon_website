import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import type { ButtonProps } from '@/components';
import { Button, BUTTON_TEST_IDS } from '@/components';

const buttonProps = {
  children: 'купить за 190 000'
} satisfies ButtonProps;

describe('Button component', () => {
  test('renders children correctly', () => {
    render(<Button>{buttonProps.children}</Button>);
    const children = screen.getByTestId(BUTTON_TEST_IDS.CHILDREN);
    expect(children).toHaveTextContent(buttonProps.children);
  });
});
