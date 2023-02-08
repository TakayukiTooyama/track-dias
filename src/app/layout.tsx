'use client';

import '@/style/global.css';

import type { ColorScheme } from '@mantine/core';
import { ColorSchemeProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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
  const queryClient = new QueryClient();

  return (
    <html lang='ja'>
      <head />
      <body>
        <QueryClientProvider client={queryClient}>
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <MantineEmotionProvider colorScheme={colorScheme}>
              {children}
            </MantineEmotionProvider>
          </ColorSchemeProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
