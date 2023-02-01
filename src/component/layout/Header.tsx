import {
  ActionIcon,
  Avatar,
  Burger,
  Group,
  Header as MantineHeader,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { FC } from 'react';
import { MoonStars, Share, Sun } from 'tabler-icons-react';

type HeaderProps = {
  isNavBar?: boolean;
};

export const Header: FC<HeaderProps> = ({ isNavBar = false }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <MantineHeader
      height={56}
      py={4}
      px={8}
      className='flex flex-col justify-center shadow'
    >
      <div className='flex justify-between'>
        <Group spacing='xs'>
          {isNavBar && <Burger opened={opened} onClick={toggle} size='sm' />}
          <Title variant='gradient' gradient={{ from: 'red', to: 'orange' }}>
            TrackDias
          </Title>
        </Group>
        <Group>
          <ActionIcon variant='outline' color={dark ? 'orange' : 'gray'}>
            <Share />
          </ActionIcon>
          <ActionIcon
            variant='outline'
            color={dark ? 'orange' : 'gray'}
            onClick={() => toggleColorScheme()}
            title='Toggle color scheme'
          >
            {dark ? <Sun /> : <MoonStars />}
          </ActionIcon>
          <Avatar src='image/otter.png' alt="it's me" radius='xl' />
        </Group>
      </div>
    </MantineHeader>
  );
};
