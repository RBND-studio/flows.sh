import { css } from '@flows/styled-system/css';
import Image from 'next/image';

import { Text } from '../text';

export function Logo(): JSX.Element {
  return (
    <div
      className={css({
        display: 'inline-flex',
        alignItems: 'center',
        gap: '16px',
      })}
    >
      <Image alt="Logo" height={72} src="/images/logo/logo.svg" width={72} />
      <Text variant="titleXl">Flows</Text>
    </div>
  );
}
