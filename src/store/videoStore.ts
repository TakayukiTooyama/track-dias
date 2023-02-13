import { proxy } from 'valtio';

import type { VideoInfo } from '@/type/video';

// type videoStoreProps = {
//   addVideoInfo: (files: File[]) => void;
//   deleteVideoInfo: (name: string) => void;
//   replaceVideoInfo: (videoInfo: VideoInfo[]) => void;
//   videoInfo: VideoInfo;
// };

export const videoStore = proxy<{ videoInfo: VideoInfo[] }>({
  videoInfo: [],
});

export const addVideoInfo = (files: File[]) => {
  const inputVideoInfo: VideoInfo[] = files.map((file) => ({
    name: file.name,
    createdAt: new Date(),
    duration: 0,
    file: file,
    keypoints: [],
    lastAccess: new Date(),
    size: 0,
    totalFrame: 0,
    type: '',
    updatedAt: new Date(),
    videoHeight: 0,
    videoWidth: 0,
  }));
  const concatVideoInfo = [...videoStore.videoInfo, ...inputVideoInfo];
  const deduplicatedArray = Array.from(
    new Map(concatVideoInfo.map((info) => [info.name, info])).values(),
  );
  videoStore.videoInfo = deduplicatedArray;
};

export const deleteVideoInfo = (name: string) => {
  const newVideoInfo = videoStore.videoInfo.filter(
    (video) => video.name !== name,
  );
  videoStore.videoInfo = newVideoInfo;
};

export const replaceVideoInfo = (videoInfo: VideoInfo[]) => {
  videoStore.videoInfo = videoInfo;
};

// addVideoInfo: (files: File[]) => {
//     const inputVideoInfo = files.map((file) => ({
//       name: file.name,
//       createdAt: new Date(),
//       duration: 0,
//       file: file,
//       keypoints: [],
//       lastAccess: new Date(),
//       size: 0,
//       updatedAt: new Date(),
//       videoHeight: 0,
//       videoWidth: 0,
//     }));
//     const concatVideoInfo = [...videoStore.videoInfo, ...inputVideoInfo];
//     const deduplicatedArray = Array.from(
//       new Map(concatVideoInfo.map((info) => [info.name, info])).values(),
//     );
//     videoStore.videoInfo = deduplicatedArray;
//   },
//   deleteVideoInfo: (name: string) => {
//     const newVideoInfo = videoStore.videoInfo.filter(
//       (video) => video.name !== name,
//     );
//     videoStore.videoInfo = newVideoInfo;
//   },
//   replaceVideoInfo: (videoInfo: VideoInfo[]) => {
//     videoStore.videoInfo = videoInfo;
//   },
