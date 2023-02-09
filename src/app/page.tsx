'use client';

import {
  AppShell,
  Button,
  Container,
  Divider,
  Paper,
  Title,
} from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Header } from '@/component/layout';
import { DataBlock, LineChart } from '@/lib/chart';
import type { DolphinTable, MRT_Cell } from '@/lib/table';
import {
  makeAnalysisResultTableBody,
  makeAnalysisResultTableHead,
  Table,
} from '@/lib/table';
import type { RechartsDotPayload } from '@/type';

const Home = () => {
  const [tableBody, setTableBody] = useState<DolphinTable[]>([]);
  // const [tableHead, setTableHead] = useState<MRT_ColumnDef<DolphinTable>[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

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
        <Button
          variant='gradient'
          fullWidth
          size='lg'
          onClick={() => router.push('/analysis')}
        >
          Analysis
        </Button>
      </Container>
    </AppShell>
  );
};

export default Home;
