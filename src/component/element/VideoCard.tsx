import type { CardProps } from '@mantine/core';
import { Card } from '@mantine/core';
import type { FC, ReactNode } from 'react';

type VideoCardProps = {
  children: ReactNode;
  video: ReactNode;
} & CardProps;

export const VideoCard: FC<VideoCardProps> = ({
  children,
  video,
  ...props
}) => (
  <Card radius='sm' withBorder {...props}>
    <Card.Section>{video}</Card.Section>
    <div className='pt-3'>{children}</div>
  </Card>
);
