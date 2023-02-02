import type { AccordionControlProps } from '@mantine/core';
import { Accordion, ActionIcon } from '@mantine/core';
import type { FC, ReactNode } from 'react';
import { Trash } from 'tabler-icons-react';

import type { VideoInfo } from '@/type/video';

type VideoListProps = {
  handleDeleteItem: (filename: string) => void;
  handleSelectItem: (videoInfo: VideoInfo) => void;
  icon?: ReactNode;
  isEdit?: boolean;
  videoInfo: VideoInfo[];
} & AccordionControlProps;

export const FileList: FC<VideoListProps> = ({
  handleDeleteItem,
  handleSelectItem,
  icon,
  isEdit,
  videoInfo,
  ...props
}) => (
  <Accordion chevron={false} classNames={{ control: 'px-4 py-2' }}>
    {videoInfo.map((video, idx) => (
      <Accordion.Item key={idx} value={`${video.name}-${idx}`}>
        <div className='flex items-center justify-center'>
          <Accordion.Control
            icon={icon}
            onClick={() => handleSelectItem(video)}
            {...props}
          >
            {video.name}
          </Accordion.Control>
          {isEdit && (
            <ActionIcon
              size='lg'
              onClick={() => handleDeleteItem(video.name)}
              ml={4}
              color='red'
            >
              <Trash />
            </ActionIcon>
          )}
        </div>
      </Accordion.Item>
    ))}
  </Accordion>
);
