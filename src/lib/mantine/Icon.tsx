import type { ActionIconProps } from '@mantine/core';
import { ActionIcon } from '@mantine/core';
import type { FC, ReactElement } from 'react';
import type { Icon as TBIcon } from 'tabler-icons-react';

type IconProps = {
  icon: ReactElement<TBIcon>;
} & ActionIconProps;

export const Icon: FC<IconProps> = ({ icon }, ...props) => (
  <ActionIcon variant='subtle' {...props}>
    {icon}
  </ActionIcon>
);
