import { Menu } from '@mantine/core';
import type { FC, ReactNode } from 'react';

type MenuProps = {
  children: ReactNode;
  target: ReactNode;
};

export const CustomMenu: FC<MenuProps> = ({ children, target }) => (
  <div>
    <Menu shadow='md' offset={4} position='top'>
      <Menu.Target>{target}</Menu.Target>
      <Menu.Dropdown
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.black : theme.colors.white,
        })}
      >
        {children}
      </Menu.Dropdown>
    </Menu>
  </div>
);
