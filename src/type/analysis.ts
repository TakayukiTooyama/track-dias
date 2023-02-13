import type {
  BODY_PARTS,
  DIVING_ANALYSIS,
  DOLPHIN_ANALYSIS,
  RUNNING_ANALYSIS,
} from '@/const';

/* キーポイント */
export type BodyPartsKey = keyof typeof BODY_PARTS;
export type BodyPartsLabel = (typeof BODY_PARTS)[keyof typeof BODY_PARTS];
export type Keypoint = {
  [key in BodyPartsKey]: [number, number] | [null, null];
};
export type KeypointKeyValue = [BodyPartsKey, [number, number] | [null, null]];

/* ドルフィンキック */
export type DolphinAnalysisKey = keyof typeof DOLPHIN_ANALYSIS;
export type DolphinAnalysisLabel =
  (typeof DOLPHIN_ANALYSIS)[keyof typeof DOLPHIN_ANALYSIS];
export type DolphinAnalysisValue = {
  [key in DolphinAnalysisKey]: number | null;
};

/* 飛び込み動作 */
export type DivingAnalysisKey = keyof typeof DIVING_ANALYSIS;
export type DivingAnalysisLabel =
  (typeof DIVING_ANALYSIS)[keyof typeof DIVING_ANALYSIS];
export type DivingAnalysisValue = { [key in DivingAnalysisKey]?: number };

/* 走動作 */
export type RunningAnalysisKey = keyof typeof RUNNING_ANALYSIS;
export type RunningAnalysisLabel =
  (typeof RUNNING_ANALYSIS)[keyof typeof RUNNING_ANALYSIS];
export type RunningAnalysisValue = { [key in RunningAnalysisKey]?: number };

/* モーションフラグ */
export type Motion = 'dolphin' | 'dive' | 'run';

/* 全ての分析項目 */
export type AnalysisItemKey =
  | RunningAnalysisKey
  | DivingAnalysisKey
  | RunningAnalysisKey;

// export const bodyPartsDataTable = {
//   ...BODY_PARTS_XCOOR,
//   ...BODY_PARTS_YCOOR,
// };
// export type BodyPartsDataTableLabel =
//   (typeof bodyPartsDataTable)[keyof typeof bodyPartsDataTable];
// export type BodyPartsDataTableKey = keyof typeof bodyPartsDataTable;

// /* サーバーから送られてくる解析情報 */
// export type AnalyzeResult = {
//   duration: number;
//   keypoints: Keypoint[];
//   totalFrames: number;
//   videoHeight: number;
//   videoWidth: number;
// };

// /* 解析した動画の情報（ローカルストレージに保存, 今後DBに移行するかも） */
// export type VideoInfo = {
//   keypoints: Keypoint[];
// } & InputVideoInfo;

// /* 解析した動画のキーポイント情報 */
// export type KeypointInfo = {
//   keypoints: Keypoint[];
//   videoId: string;
// };

// /* フレームごとのキーポイント情報 */
// export type Keypoint = {
//   [key in BodyPartsKey]?: [number, number] | [null, null];
// };

// /* キーポイントをObject.entriesで使用する時の型 */
// export type KeypointKeyValue = [BodyPartsKey, [number, number] | [null, null]];

// /* マーカーホバー時に表示するラベル */
// export type BodyPartsLabel = (typeof BODY_PARTS)[keyof typeof BODY_PARTS];

// /* 体の部位のキー（categoryで使っている） */
// export type BodyPartsKey = keyof typeof BODY_PARTS;

// export const bodyPartsDataTable = {
//   ...BODY_PARTS_XCOOR,
//   ...BODY_PARTS_YCOOR,
// };
// export type BodyPartsDataTableLabel =
//   (typeof bodyPartsDataTable)[keyof typeof bodyPartsDataTable];
// export type BodyPartsDataTableKey = keyof typeof bodyPartsDataTable;

// export type BodyPartsDataTableLabelX =
//   (typeof BODY_PARTS_XCOOR)[keyof typeof BODY_PARTS_XCOOR];
// export type BodyPartsDataTableKeyX = keyof typeof BODY_PARTS_XCOOR;

// export type BodyPartsDataTableLabelY =
//   (typeof BODY_PARTS_YCOOR)[keyof typeof BODY_PARTS_YCOOR];
// export type BodyPartsDataTableKeyY = keyof typeof BODY_PARTS_YCOOR;

// /* Object.entriesの返り値([string, number | string][])を厳格に宣言するために使用 */
// export const strictEntries = <T extends Record<string, any>>(
//   object: T,
// ): [keyof T, T[keyof T]][] => {
//   return Object.entries(object);
// };
