import { useLayoutEffect, useState } from 'react';

export const useWindowSize = (): [[number, number], number] => {
  const [size, setSize] = useState<[number, number]>([0, 0]);
  const [ratio, setRatio] = useState(1);

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    const updateRatio = () => {
      const { devicePixelRatio: ratio = 1 } = window;
      setRatio(ratio);
    };
    window.addEventListener('resize', updateSize);
    window.addEventListener('resize', updateRatio);
    updateSize();
    updateRatio();
    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('resize', updateRatio);
    };
  }, []);

  return [size, ratio];
};
