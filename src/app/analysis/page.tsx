'use client';

import {
  ActionIcon,
  AppShell,
  Button,
  Container,
  FileButton,
  ScrollArea,
  Text,
} from '@mantine/core';
import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import { Edit, EditOff, Movie, VideoPlus } from 'tabler-icons-react';

import { AnalysisTop } from '@/app/analysis/AnalysisTop';
import { FileList } from '@/app/analysis/FileList';
import { Card } from '@/component/element/Card';
import { Header } from '@/component/layout';
import { VideoPlayer } from '@/lib/player';
import { useVideoInfo } from '@/lib/player/useVideo';
import type { VideoInfo } from '@/type/video';

const Analysis: NextPage = () => {
  const {
    deleteVideoInfo,
    handleAnalyzeVideo,
    handleInputVideo,
    handleSelectVideo,
    isAnalyze,
    selectedVideo,
    videoInfo,
    videoUrl,
  } = useVideoInfo();

  const [isEdit, setIsEdit] = useState(false);
  const handleClickEdit = useCallback(() => {
    setIsEdit((prev) => !prev);
  }, []);

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
        <AnalysisTop
          videoInfo={videoInfo as VideoInfo[]}
          isAnalyze={isAnalyze}
          handleAnalyzeVideo={handleAnalyzeVideo}
        />
        <FileButton
          onChange={handleInputVideo}
          accept='video/*'
          name='files'
          multiple
        >
          {(props) => (
            <Button variant='default' size='md' fullWidth {...props}>
              <VideoPlus color='gray' />
            </Button>
          )}
        </FileButton>

        <Card
          title='Video List'
          right={
            <ActionIcon color='gray' onClick={handleClickEdit}>
              {isEdit ? <EditOff /> : <Edit />}
            </ActionIcon>
          }
        >
          {videoInfo.length > 0 ? (
            <ScrollArea style={{ height: 300 }} type='scroll' scrollbarSize={8}>
              <FileList
                videoInfo={videoInfo as VideoInfo[]}
                icon={<Movie color='gray' />}
                isEdit={isEdit}
                handleSelectItem={handleSelectVideo}
                handleDeleteItem={deleteVideoInfo}
              />
            </ScrollArea>
          ) : (
            <Text mt={16} size='sm' className='opacity-70'>
              分析する動画を追加してください
            </Text>
          )}
        </Card>
        {videoInfo.length > 0 && videoUrl && <VideoPlayer url={videoUrl} />}
      </Container>
    </AppShell>
  );
};

export default Analysis;
