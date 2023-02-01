import type { MRT_ColumnDef } from 'mantine-react-table';

import { BODY_PARTS_XCOOR, BODY_PARTS_YCOOR } from '@/lib/table/const';
import type {
  BodayPartsXCoorKey,
  BodayPartsXCoorLabel,
  BodayPartsYCoorKey,
  BodayPartsYCoorLabel,
  DolphinTable,
  KeypointTable,
} from '@/lib/table/type';
import type { Keypoint } from '@/type';

/* Object.entriesの返り値([string, number | string][])を厳格に宣言するために使用 */
export const strictEntries = <T extends Record<string, any>>(
  object: T,
): [keyof T, T[keyof T]][] => Object.entries(object);

/* キーポイント */
export const makeKeypointTableHead = (keypoints: Keypoint[]) => {
  const fixColumn = [
    {
      accessorKey: 'frame',
      header: 'フレーム',
      size: 70,
    },
    {
      accessorKey: 'time',
      header: '経過時間',
      size: 80,
    },
  ];
  const variableColumn = Object.keys(keypoints[0]).flatMap((part) => {
    const part_x = `${part}_x` as BodayPartsXCoorKey;
    const part_y = `${part}_y` as BodayPartsYCoorKey;
    const column_xy = [
      {
        accessorKey: part_x,
        header: `${BODY_PARTS_XCOOR[part_x]}` as BodayPartsXCoorLabel,
        size: 80,
      },
      {
        accessorKey: part_y,
        header: `${BODY_PARTS_YCOOR[part_y]}` as BodayPartsYCoorLabel,
        size: 80,
      },
    ];
    return column_xy;
  });
  return [...fixColumn, ...variableColumn] as MRT_ColumnDef<KeypointTable>[];
};

/* ドルフィンキック, 飛び込み動作, 走動作 */
export const makeAnalysisResultTableHead = (): // motion: Motion,
// videoName: string,
// keypoints: Keypoint[]
MRT_ColumnDef<DolphinTable>[] => [
  {
    accessorKey: 'videoName',
    header: '動画名',
    size: 150,
  },
  {
    accessorKey: 'ankleAngle',
    header: '足関節角度',
    // size: 80,
  },
  {
    accessorKey: 'hipAngle',
    header: '股関節角度',
    // size: 80,
  },
  {
    accessorKey: 'kneeAngle',
    header: '膝関節角度',
    // size: 80,
  },
];
// switch (motion) {
//   case 'dolphin':
//     return [videoName];
//   case 'dive':
//     return [videoName];
//   case 'run':
//     return [videoName];
// }

/* React-Tableを使う場合 */
// export const makeKeypointColumns = (keypoints: Keypoint[]): ColumnDef<TableData>[] => {
//   const fixColumnData = [
//     {
//       accessorKey: 'frame',
//       header: 'Frame',
//       size: 70,
//     },
//     {
//       accessorKey: 'time',
//       header: 'Time',
//       size: 80,
//     },
//   ];
//   const selectedColumnData = Object.keys(keypoints[0]).flatMap((part) => {
//     const part_x = `${part}_x` as BodyPartsDataTableKeyX;
//     const part_y = `${part}_y` as BodyPartsDataTableKeyY;
//     const column_xy = [
//       {
//         accessorKey: part_x,
//         header: `${bodyPartsDataTable[part_x]}` as BodyPartsDataTableLabelX,
//         size: 80,
//       },
//       {
//         accessorKey: part_y,
//         header: `${bodyPartsDataTable[part_y]}` as BodyPartsDataTableLabelY,
//         size: 80,
//       },
//     ];
//     return column_xy;
//   });
//   return [...fixColumnData, ...selectedColumnData] as ColumnDef<TableData>[];
// };
