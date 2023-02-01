'use client';

import './index.css';

import { Table } from '@mantine/core';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';

import { KEYPOINT } from '@/const';

export const KeypointTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCell, setSelectedCell] = useState('');

  const columns = useMemo<ColumnDef<KeypointTable>[]>(
    () => makeColumns(KEYPOINT),
    [],
  );

  const [data, setData] = useState<KeypointTable[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setData(makeData(KEYPOINT));
      setIsLoading(false);
    }
  }, []);

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  // const handleClickCell = (
  //   row: Row<TableData>,
  //   cell: Cell<TableData, unknown>,
  // ) => {
  //   setSelectedCell(cell.id);
  // };

  return (
    <Table withColumnBorders highlightOnHover striped verticalSpacing='xs'>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder ? null : (
                  <div
                    {...{
                      className: header.column.getCanSort()
                        ? 'cursor-pointer select-none'
                        : '',
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    {{
                      asc: ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table
          .getRowModel()
          .rows.slice(0, 25)
          .map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </Table>
  );
};
