import type { MRT_Icons } from 'mantine-react-table';
import {
  ArrowAutofitContent,
  ArrowDown,
  ArrowsSort,
  BoxMultiple,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsDown,
  ChevronUp,
  CircleOff,
  CircleX,
  ClearAll,
  Columns,
  DeviceFloppy,
  Dots,
  DotsVertical,
  Edit,
  EyeOff,
  Filter,
  FilterOff,
  GripHorizontal,
  Maximize,
  Minimize,
  Pinned,
  PinnedOff,
  Search,
  SortAscending,
  SortDescending,
  Tallymark1,
  Tallymark2,
  Tallymark3,
  Tallymark4,
  Tallymarks,
  X,
} from 'tabler-icons-react';

export const TablerIcons: Partial<MRT_Icons> = {
  IconArrowAutofitContent: () => <ArrowAutofitContent />,
  IconArrowDown: () => <ArrowDown />,
  IconArrowsSort: () => <ArrowsSort />,
  IconBoxMultiple: () => <BoxMultiple />,
  IconChevronDown: () => <ChevronDown />,
  IconChevronLeft: () => <ChevronLeft />,
  IconChevronRight: () => <ChevronRight />,
  IconChevronsDown: () => <ChevronsDown />,
  IconChevronUp: () => <ChevronUp />,
  IconCircleOff: () => <CircleOff />,
  IconCircleX: () => <CircleX />,
  IconClearAll: () => <ClearAll />,
  IconColumns: () => <Columns />,
  IconDeviceFloppy: () => <DeviceFloppy />,
  IconDots: () => <Dots />,
  IconDotsVertical: () => <DotsVertical />,
  IconEdit: () => <Edit />,
  IconEyeOff: () => <EyeOff />,
  IconFilter: (props: any) => <Filter {...props} />,
  IconFilterOff: () => <FilterOff />,
  IconGripHorizontal: () => <GripHorizontal />,
  IconMaximize: () => <Maximize />,
  IconMinimize: () => <Minimize />,
  IconPinned: (props: any) => <Pinned {...props} />,
  IconPinnedOff: () => <PinnedOff />,
  IconSearch: (props: any) => <Search {...props} />,
  IconSortAscending: () => <SortAscending />,
  IconSortDescending: () => <SortDescending />,
  IconTallymark1: () => <Tallymark1 />,
  IconTallymark2: () => <Tallymark2 />,
  IconTallymark3: () => <Tallymark3 />,
  IconTallymark4: () => <Tallymark4 />,
  IconTallymarks: () => <Tallymarks />,
  IconX: () => <X />,
};
