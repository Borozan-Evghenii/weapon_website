import { describe, test, expect } from '@jest/globals';
import { render } from '@testing-library/react';

import { Button } from '@/components';

describe('Button component', () => {
  test('renders children correctly', () => {
    const childrenText = 'Click me';

    const { getByText } = render(<Button>{childrenText}</Button>);

    const buttonChildren = getByText(childrenText);
    expect(buttonChildren).toBe(childrenText);
  });
});
