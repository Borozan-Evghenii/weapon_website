import React from 'react';

interface ButtonProps extends ReactTagProps<'button'> {
  /**
   * label
   */
  children: string;
}

export const BUTTON_TEST_IDS = {
  CHILDREN: 'button-children'
};

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    className='flex h-16 w-full items-center justify-center rounded-xl border-2 border-primary bg-primary text-lg font-medium uppercase text-white transition-colors ease-in-out hover:border-borderColor'
  >
    <span data-testid={BUTTON_TEST_IDS.CHILDREN}>{children}</span>
  </button>
);

export default Button;
