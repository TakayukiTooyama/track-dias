'use client';

import { AppShell, Button, Container, FileButton } from '@mantine/core';
import type { NextPage } from 'next';
import { useState } from 'react';
import { Movie, VideoPlus } from 'tabler-icons-react';

import { AnalysisTop } from '@/app/analysis/AnalysisTop';
import { FileList } from '@/app/analysis/FileList';
import { Card } from '@/component/element/Card';
import { Header } from '@/component/layout';

const Analysis: NextPage = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <AppShell
      header={<Header />}
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[7]
            : theme.colors.gray[2],
      })}
    >
      <Container className='space-y-4'>
        <AnalysisTop />
        <FileButton onChange={setFiles} accept='video/*' multiple>
          {(props) => (
            <Button variant='default' size='md' fullWidth {...props}>
              <VideoPlus />
            </Button>
          )}
        </FileButton>

        <Card title='Video List'>
          <FileList files={files} icon={<Movie />} />
        </Card>
      </Container>
    </AppShell>
  );
};

export default Analysis;
