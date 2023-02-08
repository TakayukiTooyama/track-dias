import { Button, Title } from '@mantine/core';
import { useRouter } from 'next/navigation';
import type { FC, FormEvent } from 'react';

type AnalysisTopProps = {
  handleAnalyzeVideo: (e: FormEvent<HTMLFormElement>, videos: File[]) => void;
  isAnalyze: boolean;
  videos: File[];
};

export const AnalysisTop: FC<AnalysisTopProps> = ({
  handleAnalyzeVideo,
  isAnalyze,
  videos,
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
      <form
        method='post'
        encType='multipart/form-data'
        onSubmit={(e) => handleAnalyzeVideo(e, videos)}
      >
        <Button
          loading={isAnalyze}
          disabled={videos.length === 0}
          variant='gradient'
          type='submit'
        >
          Start
        </Button>
      </form>
    </div>
  );
};
