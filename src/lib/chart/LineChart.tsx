'use client';

import { useMantineTheme } from '@mantine/styles';
import type { FC } from 'react';
import {
  Legend,
  Line,
  LineChart as LineRechart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import type { AngleData } from '@/type/chart';

type LineChartProps = {
  data: AngleData[];
  handleClickDot: (payload: unknown) => void;
  handleClickXAxis: (e: never) => void;
  xDataKey: string;
  xLabel: string;
  yDataKey: string;
  yLabel: string;
};

const angleData = [
  { hipAngle: 40, time: 0 },
  { hipAngle: 50, time: 0.03 },
  { hipAngle: 70, time: 0.06 },
  { hipAngle: 80, time: 0.09 },
  { hipAngle: 40, time: 0.12 },
  { hipAngle: 20, time: 0.15 },
  { hipAngle: 100, time: 0.18 },
  { hipAngle: 40, time: 0.21 },
  { hipAngle: 50, time: 0.24 },
  { hipAngle: 70, time: 0.27 },
  { hipAngle: 80, time: 0.3 },
  { hipAngle: 90, time: 0.33 },
  { hipAngle: 20, time: 0.36 },
  { hipAngle: 40, time: 0.39 },
  { hipAngle: 60, time: 0.42 },
  { hipAngle: 50, time: 0.45 },
  { hipAngle: 90, time: 0.48 },
];

export const LineChart: FC<LineChartProps> = ({ xDataKey, yDataKey }) => {
  const theme = useMantineTheme();
  const dark = theme.colorScheme === 'dark';

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineRechart
        data={angleData}
        margin={{ bottom: 0, left: 0, right: 0, top: 0 }}
        syncId='keypoints'
      >
        <XAxis
          dataKey={xDataKey}
          angle={-30}
          dx={-10}
          dy={5}
          interval={Math.floor(angleData.length / 6)}
          tick={{ fill: dark ? 'white' : 'gray', fontSize: 12 }}
        />
        <YAxis
          dataKey={yDataKey}
          tickCount={5}
          tick={{ fill: dark ? 'white' : 'gray', fontSize: 12 }}
        />
        <Line
          id={yDataKey}
          type='monotone'
          dataKey='hipAngle'
          legendType='line'
          dot={false}
          // activeDot={{
          //   cursor: 'pointer',
          //   onClick: (_e, payload) => handleClickDot(payload),
          // }}
          stroke='orange'
          strokeWidth={2}
          label='角度'
          unit='°'
          isAnimationActive
          // animationDuration={1500}
          animationEasing='linear'
        />
        <Legend
          verticalAlign='top'
          align='right'
          height={40}
          fontSize={14}
          iconSize={14}
          iconType='plainline'
        />
        <Tooltip
          contentStyle={{
            background: dark
              ? 'linear-gradient(to right, #0009, #0009)'
              : 'linear-gradient(to right, #fff9, #fff9)',
            border: 'none',
            borderRadius: 10,
            boxShadow: dark
              ? '0px 0px 6px 0px rgba(255,255,255,0.4)'
              : '0px 0px 6px 0px rgba(171,171,171,0.6)',
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 1,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 10,
          }}
          labelStyle={{ color: dark ? 'white' : 'gray' }}
          cursor={{ stroke: 'red', strokeWidth: 2 }}
          wrapperStyle={{ outline: 'none' }}
          separator=' '
          labelFormatter={(label) => `Time ${label}s`}
          formatter={(value) => `${value}`} //TODO:後ほど変更
        />
      </LineRechart>
    </ResponsiveContainer>
  );
};
