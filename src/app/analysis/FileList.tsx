import { Accordion } from '@mantine/core';
import type { FC, ReactNode } from 'react';

type FileListProps = {
  files: File[];
  icon?: ReactNode;
};

export const FileList: FC<FileListProps> = ({ files, icon }) => (
  <Accordion>
    {files.map((file, idx) => (
      <Accordion.Item key={idx} value={`${file.name}-${idx}`}>
        <Accordion.Control icon={icon}>{file.name}</Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    ))}
  </Accordion>
);
