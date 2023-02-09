import type { AccordionControlProps } from '@mantine/core';
import { Accordion, ActionIcon } from '@mantine/core';
import type { FC, ReactNode } from 'react';
import { Trash } from 'tabler-icons-react';

type VideoListProps = {
  handleDeleteItem: (filename: string) => void;
  handleSelectItem: (video: File) => void;
  icon?: ReactNode;
  isEdit?: boolean;
  videos: File[];
} & AccordionControlProps;

export const FileList: FC<VideoListProps> = ({
  handleDeleteItem,
  handleSelectItem,
  icon,
  isEdit,
  videos,
  ...props
}) => (
  <Accordion chevron={false} classNames={{ control: 'px-4 py-2' }}>
    {videos.map((video, idx) => (
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
