'use client';

import '@/style/global.css';

import type { ColorScheme } from '@mantine/core';
import { ColorSchemeProvider } from '@mantine/core';
import type { NextPage } from 'next';
import { useState } from 'react';

import MantineEmotionProvider from '@/app/mantine-emotion-provider';

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: NextPage<RootLayoutProps> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <html lang='ja'>
      <head />
      <body>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineEmotionProvider colorScheme={colorScheme}>
            {children}
          </MantineEmotionProvider>
        </ColorSchemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
