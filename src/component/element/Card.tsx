import { Divider, Paper, Title } from '@mantine/core';
import type { FC, ReactNode } from 'react';

type CardProps = {
  title: string;
  children: ReactNode;
};

export const Card: FC<CardProps> = ({ title, children }) => (
  <Paper withBorder p='md'>
    <Title size='h3' mb='sm'>
      {title}
    </Title>
    <Divider />
    {children}
  </Paper>
);
