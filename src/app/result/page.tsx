'use client';

import { AppShell, Box, Container, Divider, Paper, Title } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';

import { FileList } from '@/component/element';
import { Header } from '@/component/layout';
import { LazyCanvas } from '@/lib/canvas';
import { DataBlock, LineChart } from '@/lib/chart';
import { Player, usePlayer } from '@/lib/player';
import type { DolphinTable, MRT_Cell } from '@/lib/table';
import {
  makeAnalysisResultTableBody,
  makeAnalysisResultTableHead,
  Table,
} from '@/lib/table';
import type { RechartsDotPayload } from '@/type';
import type { VideoInfo } from '@/type/video';

const Result = () => {
  /* キャッシュ */
  const queryClient = useQueryClient();
  queryClient.setDefaultOptions({
    queries: {
      staleTime: Infinity,
    },
  });
  const videoInfo = queryClient.getQueryData<VideoInfo[]>(['videoInfo']);

  /* Video */
  const [videos, setVideos] = useState<File[]>([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<VideoInfo>();

  useEffect(() => {
    if (!selectedVideo && videoInfo && videoInfo.length > 0) {
      setSelectedVideo(videoInfo[0]);
    }
  }, [videoInfo, selectedVideo]);

  useEffect(() => {
    if (videoUrl) {
      window.URL.revokeObjectURL(videoUrl);
    }
    videoInfo &&
      videoInfo.length > 0 &&
      setVideoUrl(window.URL.createObjectURL(videoInfo[0].file));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoInfo]);

  const handleDeleteVideo = useCallback(
    (videoName: string) => {
      const newFiles = videos.filter((video) => video.name !== videoName);
      setVideos(newFiles);
    },
    [videos],
  );
  const handleSelectVideo = useCallback(
    (video: File) => {
      if (videoUrl) {
        window.URL.revokeObjectURL(videoUrl);
      }
      setVideoUrl(window.URL.createObjectURL(video));
      setSelectedVideo(videoInfo?.find((info) => info.name === video.name));
    },
    [videoUrl, videoInfo],
  );

  /* Table */
  const [tableBody, setTableBody] = useState<DolphinTable[]>([]);
  // const [tableHead, setTableHead] = useState<MRT_ColumnDef<DolphinTable>[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTableBody(makeAnalysisResultTableBody());
      setIsLoading(false);
    }
  }, []);

  const handleSaveCell = (cell: MRT_Cell<DolphinTable>, value: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /* @ts-ignore */
    tableBody[cell.row.index][cell.column.id as keyof DolphinTable] = value;
    setTableBody([...tableBody]);
  };

  /* Chart */
  const handleClickXAxis = (e: never): void => {
    alert(e['value']);
  };

  /* Player */
  const { height, ref, width } = useElementSize();
  const { playerSize, setPlayerSize } = usePlayer();

  useEffect(() => {
    setPlayerSize(width, height);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  const handleClickDot = (payload: unknown): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const dotPayload = payload as Record<keyof RechartsDotPayload, unknown>;
    // const studyData = dotPayload.payload as Record<keyof jointAngleData, unknown>;
    // if (typeof studyData.angle === 'number') {
    //   alert(studyData.angle);
    // }
  };

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
        <Paper withBorder p='md' radius='md' ref={ref}>
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
              // videoUrl={videoUrl}
            />
          </Box>
        </Paper>
        <Paper withBorder radius='md' p='md'>
          <Title size='h2'>Chart</Title>
          <Divider className='mb-4' />
          <div className='mx-auto flex max-w-xs items-center justify-between'>
            <DataBlock label='Average' data={80} unit='°' />
            <DataBlock label='Max' data={80} unit='°' />
            <DataBlock label='Growth' data={25} unit='％' />
            <DataBlock label='Average' data={80} />
          </div>
          <div className='h-48'>
            <LineChart
              xDataKey='time'
              yDataKey='hipAngle'
              xLabel='経過時間(s)'
              yLabel='股関節角度(°)'
              data={[]}
              handleClickDot={handleClickDot}
              handleClickXAxis={handleClickXAxis}
            />
          </div>
        </Paper>
        <Table
          tableBody={tableBody}
          tableHead={makeAnalysisResultTableHead()}
          handleSaveCell={handleSaveCell}
          isLoading={isLoading}
        />
        {videoInfo && videoInfo.length > 0 && (
          <FileList
            handleDeleteItem={handleDeleteVideo}
            handleSelectItem={handleSelectVideo}
            videos={videoInfo.map((video) => video.file)}
          />
        )}
      </Container>
    </AppShell>
  );
};

export default Result;
