import React from 'react';

export type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'p';
export type SizeType = 'h1' | 'h2' | 'h3' | 'h4' | 'text1' | 'text2' | 'text3';

export interface TextProps<E extends Extract<React.ElementType, TagType>> {
  tag?: E;
  children: string | React.ReactNode;
  size: SizeType;
  className?: string;
}
export const TYPOGRAPHY_TEST_IDS = {
  CONTAINER: 'container'
};

export const Typography = <E extends Extract<React.ElementType, TagType>>({
  size,
  children,
  tag,
  className = ''
}: TextProps<E>) => {
  const Component = tag || 'p';

  return (
    <Component className={`${size} ${className}`} data-testid={TYPOGRAPHY_TEST_IDS.CONTAINER}>
      {children}
    </Component>
  );
};
