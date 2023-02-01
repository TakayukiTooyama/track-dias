import type {
  BODY_PARTS_COOR,
  BODY_PARTS_XCOOR,
  BODY_PARTS_YCOOR,
} from '@/lib/table/const';
import type { DolphinAnalysisValue } from '@/type/analysis';

/* キーポイントX */
export type BodayPartsXCoorKey = keyof typeof BODY_PARTS_XCOOR;
export type BodayPartsXCoorLabel =
  (typeof BODY_PARTS_XCOOR)[keyof typeof BODY_PARTS_XCOOR];
export type BodayPartsXCoor = {
  [key in BodayPartsXCoorKey]?: number | null;
};

/* キーポイントY */
export type BodayPartsYCoorKey = keyof typeof BODY_PARTS_YCOOR;
export type BodayPartsYCoorLabel =
  (typeof BODY_PARTS_YCOOR)[keyof typeof BODY_PARTS_YCOOR];
export type BodayPartsYCoor = {
  [key in BodayPartsYCoorKey]?: number | null;
};

/* 全キーポイント */
export type BodayPartsCoorKey = keyof typeof BODY_PARTS_COOR;
export type BodayPartsCoorLabel =
  (typeof BODY_PARTS_COOR)[keyof typeof BODY_PARTS_COOR];
export type BodayPartsCoor = {
  [key in BodayPartsCoorKey]?: number | null;
};

export type KeypointTable = { frame: number; time: number } & BodayPartsCoor;

/* ドルフィンキック */
export type AnalysisResultTable = { videoName: string };
export type DolphinTable = { videoName: string } & DolphinAnalysisValue;

/* 飛び込み動作 */
export type DivingTable = { videoName: string } & DolphinAnalysisValue;

/* 走動作 */
export type RunningTable = { videoName: string } & DolphinAnalysisValue;
