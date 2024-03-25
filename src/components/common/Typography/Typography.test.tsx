import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import type { SizeType, TagType, TextProps } from '@/components/common/Typography/Typography';
import { Typography, TYPOGRAPHY_TEST_IDS } from '@/components/common/Typography/Typography';

const tagTypeArray = ['h1', 'h2', 'h3', 'h4', 'p'] as TagType[];
const sizeTypeArray = ['h1', 'h2', 'h3', 'h4', 'text1', 'text2', 'text3'] as SizeType[];

const TypographyProps = {
  children: 'пистолет травматический risen /10x28 mm/5,5" - 136 mm',
  tag: 'h1',
  size: 'text2'
} satisfies TextProps<TagType>;

// if is rendered component with tag an all size style

describe('Typography component', () => {
  test('renders children correctly', () => {
    render(
      <Typography size='h1' tag='h1'>
        {TypographyProps.children}
      </Typography>
    );
    const container = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER);
    expect(container).toHaveTextContent(TypographyProps.children);
  });

  tagTypeArray.forEach((tagElement) => {
    sizeTypeArray.forEach((sizeClass) => {
      test(`renders tag ${tagElement} and size class ${sizeClass} correctly`, () => {
        render(
          <Typography size={sizeClass} tag={tagElement}>
            {TypographyProps.children}
          </Typography>
        );
        const container = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER);
        expect(container.tagName.toLowerCase()).toBe(tagElement);
        expect(container).toHaveClass(sizeClass);
      });
    });
  });
});
