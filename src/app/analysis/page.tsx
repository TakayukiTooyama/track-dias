/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';
import { useCallback, useState } from 'react';
import { Edit, EditOff, Movie, VideoPlus } from 'tabler-icons-react';

import { AnalysisTop } from '@/app/analysis/AnalysisTop';
import { FileList } from '@/app/analysis/FileList';
import { Card } from '@/component/element/Card';
import { Header } from '@/component/layout';
import { VideoPlayer } from '@/lib/player';
import type { VideoInfo } from '@/type/video';

const Analysis: NextPage = () => {
  const queryClient = useQueryClient();

  const router = useRouter();
  const [videos, setVideos] = useState<File[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_selectedVideo, setSelectedVideo] = useState<File>();
  const [videoUrl, setVideoUrl] = useState('');

  const handleDeleteVideo = useCallback(
    (videoName: string) => {
      const newFiles = videos.filter((video) => video.name !== videoName);
      setVideos(newFiles);
    },
    [videos],
  );

  const handleInputVideo = useCallback(
    (inputVideos: File[]) => {
      const concatVideoList = [...videos, ...inputVideos];
      const deduplicatedArray = Array.from(
        new Map(concatVideoList.map((video) => [video.name, video])).values(),
      );
      setVideos(deduplicatedArray);
      setVideoUrl(window.URL.createObjectURL(deduplicatedArray[0]));
      setSelectedVideo(deduplicatedArray[0]);
    },
    [videos],
  );

  const handleSelectVideo = useCallback(
    (video: File) => {
      if (videoUrl) {
        window.URL.revokeObjectURL(videoUrl);
      }
      setVideoUrl(window.URL.createObjectURL(video));
      setSelectedVideo(video);
    },
    [videoUrl],
  );

  const { isLoading, mutate } = useMutation(
    (formData: FormData) =>
      axios.post('http://127.0.0.1:8000/uploadfile', formData),
    {
      onSuccess: ({ data }: { data: Omit<VideoInfo[], 'file'> }) => {
        const videoInfo: VideoInfo[] = data.map((data) => ({
          ...data,
          file: videos.find((video) => video.name === data.name)!,
        }));
        queryClient.setQueryData(['videoInfo'], () => videoInfo);
        router.push('/result');
      },
    },
  );
  // const { isLoading, mutate } = useMutation({
  //   mutationFn: (formData: FormData) =>
  //     axios.post('http://127.0.0.1:8000/uploadfile', formData),
  //   mutationKey: ['addTodo'],
  //   onSuccess: () => {
  //     router.push('/result');
  //   },
  // });

  const handleSubmitVideo = useCallback(
    (e: FormEvent<HTMLFormElement>, videos: File[]) => {
      e.preventDefault();
      const formData = new FormData();
      videos.forEach((video) => {
        formData.append('videoFiles', video, video.name);
      });
      mutate(formData);
    },
    [mutate],
  );

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
          videos={videos}
          isAnalyze={isLoading}
          handleAnalyzeVideo={handleSubmitVideo}
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
          {videos.length > 0 ? (
            <ScrollArea style={{ height: 300 }} type='scroll' scrollbarSize={8}>
              <FileList
                videos={videos}
                icon={<Movie color='gray' />}
                isEdit={isEdit}
                handleSelectItem={handleSelectVideo}
                handleDeleteItem={handleDeleteVideo}
              />
            </ScrollArea>
          ) : (
            <Text mt={16} size='sm' className='opacity-70'>
              分析する動画を追加してください
            </Text>
          )}
        </Card>
        {videoUrl && <VideoPlayer url={videoUrl} />}
      </Container>
    </AppShell>
  );
};

export default Analysis;
