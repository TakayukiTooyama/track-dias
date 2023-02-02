import { Divider, Paper, Title } from '@mantine/core';
import type { FC, ReactNode } from 'react';

type CardProps = {
  title: string;
  children: ReactNode;
  right?: ReactNode;
};

export const Card: FC<CardProps> = ({ title, children, right }) => (
  <Paper withBorder p='md' radius='sm'>
    <div className='flex items-center justify-between'>
      <Title size='h3' mb='sm'>
        {title}
      </Title>
      {right}
    </div>
    <Divider />
    {children}
  </Paper>
);
