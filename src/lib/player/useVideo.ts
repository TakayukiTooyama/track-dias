import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useSnapshot } from 'valtio';

import { videoStore } from '@/store';
import { deleteVideoInfo, replaceVideoInfo } from '@/store/videoStore';
import type { VideoInfo } from '@/type/video';

const API_URL = 'http://127.0.0.1:8000/uploadfile/';

export const useVideoInfo = () => {
  const { videoInfo } = useSnapshot(videoStore);
  const [selectedVideo, setSelectedVideo] = useState<VideoInfo>(); // 選択されている動画
  const [videoUrl, setVideoUrl] = useState(''); // 動画のURL
  const [isAnalyze, setIsAnalyze] = useState(false); // 分析開始
  // const [files, setFiles] = useState<File[]>([])
  const router = useRouter();

  //今の問題は、動画ファイルと情報を分けるかどうか → 分けないと重複処理が大変

  /* 動画入力 */
  // const handleInputVideo = useCallback(
  //   (inputFiles: File[]) => {
  //     const concatFiles = [...files, ...inputFiles];
  //     const deduplicatedArray = Array.from(
  //       new Map(concatFiles.map((file) => [file.name, file])).values(),
  //     );
  //     setVideoUrl(window.URL.createObjectURL(deduplicatedArray[0]));
  //     setSelectedVideo(deduplicatedArray[0]);
  //     setFiles(deduplicatedArray);
  //   },
  //   [files],
  // );
  const handleInputVideo = useCallback((inputFiles: File[]) => {
    const inputVideoInfo = inputFiles.map((file) => ({
      name: file.name,
      createdAt: new Date(),
      duration: 0,
      file: file,
      keypoints: [],
      lastAccess: new Date(),
      size: 0,
      updatedAt: new Date(),
      videoHeight: 0,
      videoWidth: 0,
    }));
    const concatVideoInfo = [...videoStore.videoInfo, ...inputVideoInfo];
    const deduplicatedArray = Array.from(
      new Map(concatVideoInfo.map((info) => [info.name, info])).values(),
    );
    videoStore.videoInfo = deduplicatedArray;
    setVideoUrl(window.URL.createObjectURL(deduplicatedArray[0].file));
    setSelectedVideo(deduplicatedArray[0]);
  }, []);

  /* 動画選択 */
  const handleSelectVideo = useCallback(
    (videoInfo: VideoInfo) => {
      if (videoUrl) {
        window.URL.revokeObjectURL(videoUrl);
      }
      // console.log(videoUrl);
      // const createdAt = videoInfo.createdAt;
      // console.log('videoInfo', typeof createdAt);
      // setVideoUrl(window.URL.createObjectURL(videoInfo.file));
      // setSelectedVideo(videoInfo);
    },
    [videoUrl],
  );

  /* 動画削除 */
  // const handleDeleteVideo = useCallback(
  //   (filename: string) => {
  //     const newFiles = files.filter((file) => file.name !== filename);
  //     setFiles(newFiles);
  //   },
  //   [files],
  // );

  /* 動画解析 */
  const handleAnalyzeVideo = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, videoInfo: VideoInfo[]) => {
      setIsAnalyze(true);
      e.preventDefault();
      const formData = new FormData();
      videoInfo.forEach((video) => {
        formData.append('videoFiles', video.file, video.name);
      });

      const requestOptions = {
        body: formData,
        method: 'POST',
      };

      fetch(API_URL, requestOptions).then(async (response) => {
        const res = (await response.json()) as VideoInfo[];
        replaceVideoInfo(res);
        setIsAnalyze(false);
        router.push('/result');
      });
    },
    [router],
  );

  return {
    deleteVideoInfo,
    handleAnalyzeVideo,
    // handleDeleteVideo,
    // handleInputVideo,
    handleInputVideo,
    handleSelectVideo,
    isAnalyze,
    selectedVideo,
    videoInfo,
    videoUrl,
  };
};
