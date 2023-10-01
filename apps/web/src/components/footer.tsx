import { css } from '@flows/styled-system/css';
import type { ReactElement } from 'react';
import React from 'react';
import { Logo, Text } from 'ui';

import { pageWrapperCss } from './page-wrapper';

interface FooterGroup {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
}

const footerGroups: FooterGroup[] = [
  {
    title: 'Product',
    links: [
      {
        title: 'Overview',
        href: '#overview',
      },
      {
        title: 'Pricing',
        href: '/pricing',
      },
      {
        title: 'Changelog',
        href: '/changelog',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        title: 'Blog',
        href: '/blog',
      },
      {
        title: 'Github',
        href: 'https://github.com/RBND-studio',
      },
    ],
  },
];

export const Footer = (): ReactElement => {
  return (
    <footer
      className={css({
        display: 'flex',
      })}
    >
      <div
        className={css({
          ...pageWrapperCss,
          py: '24px',
          display: 'flex',
        })}
      >
        <div>
          <Logo />
        </div>
        {footerGroups.map((group) => (
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '8px',
            })}
            key={group.title}
          >
            <Text variant="subtitleS">{group.title}</Text>
            {group.links.map((link) => (
              <Text asChild key={link.href} variant="bodyS">
                <a
                  className={css({
                    fontSize: '16px',
                    mb: '8px',
                    textDecoration: 'none',
                    color: 'black',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  })}
                  href={link.href}
                >
                  {link.title}
                </a>
              </Text>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};
