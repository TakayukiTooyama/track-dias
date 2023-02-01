'use client';

import { Box, Flex, Title } from '@mantine/core';
import type { RowSelectionState, SortingState } from '@tanstack/react-table';
import type { MRT_Cell, MRT_ColumnDef } from 'mantine-react-table';
import {
  MantineReactTable,
  MRT_ShowHideColumnsButton,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleFullScreenButton,
} from 'mantine-react-table';
import type { FC } from 'react';
import { useState } from 'react';

import type { DolphinTable } from '@/lib/table';
import { TablerIcons } from '@/lib/table';

type TableProps = {
  handleSaveCell: (cell: MRT_Cell<DolphinTable>, value: string) => void;
  isLoading: boolean;
  tableBody: DolphinTable[];
  tableHead: MRT_ColumnDef<DolphinTable>[];
};

export const Table: FC<TableProps> = ({
  handleSaveCell,
  isLoading,
  tableBody,
  tableHead,
}) => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [sorting, setSorting] = useState<SortingState>([]);

  return (
    <MantineReactTable
      columns={tableHead}
      // data={tableBody ?? []}
      data={tableBody ?? []}
      /* State */
      initialState={{
        density: 'md', // 初期の列幅
        isLoading: true,
      }}
      state={{ isLoading, rowSelection, sorting }}
      /* Display */
      icons={TablerIcons}
      enableStickyHeader
      enableRowSelection
      enableTopToolbar={true}
      enableBottomToolbar={false}
      enableColumnActions={false}
      enablePagination={false}
      positionToolbarAlertBanner='bottom' // alertが消えないので下に隠す
      mantineSelectCheckboxProps={{
        color: 'orange',
      }}
      mantineSelectAllCheckboxProps={{
        color: 'orange',
      }}
      mantinePaperProps={{
        sx: {
          borderRadius: '10px',
          boxShadow: 'none',
          height: '100%',
        },
      }}
      mantineTableProps={{
        striped: true,
      }}
      /* Event */
      editingMode='cell'
      enableEditing
      onRowSelectionChange={setRowSelection}
      onSortingChange={setSorting}
      mantineEditTextInputProps={({ cell }) => ({
        onBlur: (event) => {
          handleSaveCell(cell, event.target.value);
        },
      })}
      /* Size */
      defaultColumn={{
        maxSize: 160,
        minSize: 16,
        size: 88,
      }}
      columnResizeMode='onChange'
      enableColumnResizing
      displayColumnDefOptions={{
        'mrt-row-select': {
          enableHiding: true, // Hide時にCheckboxを隠すか
          size: 16, // CheckboxCellの幅
        },
      }}
      mantineTableContainerProps={{
        sx: { maxHeight: '300px' },
      }}
      /* Custom */
      renderTopToolbar={({ table }) => (
        <Box p='md'>
          <Flex align='center' justify='space-between'>
            <Title size='h2'>Result</Title>
            <Flex>
              <MRT_ToggleFiltersButton table={table} />
              <MRT_ShowHideColumnsButton table={table} />
              <MRT_ToggleDensePaddingButton table={table} />
              <MRT_ToggleFullScreenButton table={table} />
            </Flex>
          </Flex>
        </Box>
      )}
    />
  );
};
