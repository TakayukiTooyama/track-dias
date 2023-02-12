import type { ComponentType, ReactNode } from 'react';

type AnyComponent<T> = ComponentType<T> | ((props: T) => ReactNode);

export type CompProps<T> =
  | {
      lazyComponent: () => Promise<{ default: AnyComponent<T> }>;
    }
  | {
      component: AnyComponent<T>;
    };
