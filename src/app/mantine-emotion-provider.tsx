import { CacheProvider } from '@emotion/react';
import type { ColorScheme } from '@mantine/core';
import {
  createEmotionCache,
  Global as GlobalStyleProvider,
  MantineProvider,
} from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';
import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  colorScheme: ColorScheme;
};

const cache = createEmotionCache({ key: 'my' });
cache.compat = true;

const MantineEmotionProvider: FC<Props> = ({ children, colorScheme }) => {
  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <GlobalStyleProvider
        styles={{
          '*': { wordBreak: 'break-all' },
          'button, *[type="button"]': { transform: 'none !important' },
        }}
      />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={cache}
        theme={{
          black: '#121212',
          colors: {
            // gray: [
            //   '#F8F8F8',
            //   '#F3F3F6',
            //   '#E0E0E0',
            //   '#BDBDBD',
            //   '#828282',
            //   '#4F4F4F',
            //   '#333333',
            //   '#232323',
            //   '#1C1C1C',
            // ],
          },
          colorScheme,
          defaultGradient: { deg: 45, from: 'red', to: 'orange' },
        }}
      >
        {children}
      </MantineProvider>
    </CacheProvider>
  );
};

export default MantineEmotionProvider;
