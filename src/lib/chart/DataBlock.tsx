import type { TextProps } from '@mantine/core';
import { Text } from '@mantine/core';
import type { FC } from 'react';

type DataBlockProps = {
  data: number;
  label: string;
  unit?: string;
} & TextProps;

export const DataBlock: FC<DataBlockProps> = ({
  data,
  label,
  unit,
  ...props
}) => (
  <div className='flex flex-col items-center '>
    <Text className='text-gray-300 dark:text-gray-500'>{label}</Text>
    <Text className='mt-0 text-2xl font-bold' {...props}>
      {data}
      {unit}
    </Text>
  </div>
);
