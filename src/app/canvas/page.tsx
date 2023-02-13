'use client';

import { useEffect } from 'react';

import { Header } from '@/component/layout';
import { KEYPOINT } from '@/const';
import { LazyCanvas } from '@/lib/canvas';
import {
  AppShell,
  Box,
  Container,
  Divider,
  Paper,
  Title,
  useElementSize,
} from '@/lib/mantine';
import { Player, usePlayer } from '@/lib/player';

const CanvasPage = () => {
  const { height, ref, width } = useElementSize();
  const { playerSize, setPlayerSize } = usePlayer();

  useEffect(() => {
    setPlayerSize(width, height);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  return (
    <AppShell
      padding='md'
      header={<Header />}
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[7]
            : theme.colors.gray[2],
      })}
    >
      <Container className='space-y-4'>
        <Paper withBorder p='md' radius='sm' ref={ref}>
          <div className='flex items-center justify-between'>
            <Title size='h3' mb='sm'>
              tooyama_left.mov
            </Title>
          </div>
          <Divider />
          <Box className='w-full' ref={ref}>
            <Player
              lazyComponent={LazyCanvas}
              durationInFrames={94}
              // durationInFrames={Math.ceil(selectedVideo.duration / 0.033333)}
              playerWidth={playerSize.width}
              videoUrl={'/video/crouch_left.mov'}
              videoHeight={432}
              videoWidth={1244}
              keypoints={KEYPOINT}
              // videoUrl={videoUrl}
            />
          </Box>
        </Paper>
      </Container>
    </AppShell>
  );
};

export default CanvasPage;
