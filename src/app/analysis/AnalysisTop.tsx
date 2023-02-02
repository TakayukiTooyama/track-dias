import { Button, Title } from '@mantine/core';
import { useRouter } from 'next/navigation';
import type { FC } from 'react';

import type { VideoInfo } from '@/type/video';

type AnalysisTopProps = {
  handleAnalyzeVideo: (
    e: React.MouseEvent<HTMLButtonElement>,
    videoInfo: VideoInfo[],
  ) => void;
  isAnalyze: boolean;
  videoInfo: VideoInfo[];
};

export const AnalysisTop: FC<AnalysisTopProps> = ({
  handleAnalyzeVideo,
  isAnalyze,
  videoInfo,
}) => {
  const router = useRouter();

  return (
    <div className='flex items-center justify-between'>
      <Button variant='default' color='gray' onClick={() => router.back()}>
        Back
      </Button>
      <Title
        size='h2'
        sx={(theme) => ({
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        })}
      >
        Analysis
      </Title>
      <form>
        <Button
          loading={isAnalyze}
          disabled={videoInfo.length === 0}
          variant='gradient'
          type='submit'
          onClick={(e) => handleAnalyzeVideo(e, videoInfo)}
        >
          Start
        </Button>
      </form>
    </div>
  );
};
