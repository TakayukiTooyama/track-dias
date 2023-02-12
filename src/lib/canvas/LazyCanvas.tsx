import type { ComponentType } from 'react';

import { PlayerOnCanvas2 } from '@/lib/canvas';

export const LazyCanvas = () =>
  new Promise<{ default: ComponentType<unknown> }>((resolve) => {
    setTimeout(
      () =>
        resolve({
          default: PlayerOnCanvas2 as ComponentType<unknown>,
        }),
      2000,
    );
  });
