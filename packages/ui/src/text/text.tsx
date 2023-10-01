import { cva, cx } from '@flows/styled-system/css';
import { Slot } from '@radix-ui/react-slot';
import type { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLParagraphElement> & {
  /**
   * @defaultValue "primary"
   */
  variant?: (typeof text.variantMap.variant)[number];
  /**
   * @defaultValue "p"
   */
  as?: (typeof text.variantMap.as)[number];
  /**
   * @defaultValue "black"
   */
  color?: (typeof text.variantMap.color)[number];

  asChild?: boolean;
};

export function Text({
  as = 'p',
  color = 'black',
  variant = 'bodyM',
  children,
  asChild,
  ...props
}: Props): JSX.Element {
  const Component = asChild ? Slot : as;
  return (
    <Component
      {...props}
      className={cx(text({ variant, color }), props.className)}
    >
      {children}
    </Component>
  );
}

const text = cva({
  base: {
    display: 'inline-flex',
  },
  variants: {
    as: {
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      p: {},
      span: {},
    },
    color: {
      black: {
        color: 'neutral.900',
      },
      white: {
        color: 'neutral.0',
      },
      primary: {
        color: 'primaryDark',
      },
    },
    variant: {
      titleXxl: {
        textStyle: 'titleXxl',
      },
      titleXl: {
        textStyle: 'titleXl',
      },
      titleL: {
        textStyle: 'titleL',
      },
      titleM: {
        textStyle: 'titleM',
      },
      titleS: {
        textStyle: 'titleS',
      },
      titleXs: {
        textStyle: 'titleXs',
      },
      subtitleL: {
        textStyle: 'subtitleL',
      },
      subtitleM: {
        textStyle: 'subtitleM',
      },
      subtitleS: {
        textStyle: 'subtitleS',
      },
      bodyL: {
        textStyle: 'bodyL',
      },
      bodyM: {
        textStyle: 'bodyM',
      },
      bodyS: {
        textStyle: 'bodyS',
      },
      bodyLSemiBold: {
        textStyle: 'bodyL',
        fontWeight: 'semiBold',
      },
      bodyMSemiBold: {
        textStyle: 'bodyM',
        fontWeight: 'semiBold',
      },
      bodySSemiBold: {
        textStyle: 'bodyS',
        fontWeight: 'semiBold',
      },
      bodyLBold: {
        textStyle: 'bodyL',
        fontWeight: 'bold',
      },
      bodyMBold: {
        textStyle: 'bodyM',
        fontWeight: 'bold',
      },
      bodySBold: {
        textStyle: 'bodyS',
        fontWeight: 'bold',
      },
    },
  },
});
