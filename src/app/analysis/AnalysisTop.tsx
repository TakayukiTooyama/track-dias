import { Button, Title } from '@mantine/core';
import { useRouter } from 'next/navigation';

export const AnalysisTop = () => {
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
      <Button variant='gradient' onClick={() => alert('解析スタート')}>
        Start
      </Button>
    </div>
  );
};
