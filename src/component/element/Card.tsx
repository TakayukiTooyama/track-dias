import { Divider, Paper, Title } from '@mantine/core';
import type { FC, ReactNode, Ref } from 'react';

type CardProps = {
  title: string;
  children: ReactNode;
  ref?: Ref<HTMLDivElement>;
  right?: ReactNode;
};

export const Card: FC<CardProps> = ({ title, children, ref, right }) => (
  <Paper withBorder p='md' radius='sm' ref={ref}>
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
