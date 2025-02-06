import React, {useContext, useMemo} from 'react';
import {HolderOutlined} from '@ant-design/icons';
import type {DragEndEvent} from '@dnd-kit/core';
import {DndContext} from '@dnd-kit/core';
import type {SyntheticListenerMap} from '@dnd-kit/core/dist/hooks/utilities';
import {restrictToVerticalAxis} from '@dnd-kit/modifiers';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {Button, Pagination, Table} from 'antd';
import type {TableColumnsType} from 'antd';

interface DataType {
  key: string;
  article: string;
  name: string;
  price: number;
  category: string;
  weblink: string;
  rival: string;
}

interface DataType2 {
  key: string;
  article: string;
  name: string;
  price: number;
  category: string;
}

interface RowContextProps {
  setActivatorNodeRef?: (element: HTMLElement | null) => void;
  listeners?: SyntheticListenerMap;
}

const RowContext = React.createContext<RowContextProps>({});

const DragHandle: React.FC = () => {
  const {setActivatorNodeRef, listeners} = useContext(RowContext);
  return (
    <Button
      type="text"
      size="small"
      icon={<HolderOutlined/>}
      style={{cursor: 'move'}}
      ref={setActivatorNodeRef}
      {...listeners}
    />
  );
};

const columns: TableColumnsType<DataType> = [
  {key: 'sort', align: 'center', width: 50, render: () => <DragHandle/>},
  {title: 'Артикул', dataIndex: 'article'},
  {title: 'Имя', dataIndex: 'name'},
  {title: 'Цена', dataIndex: 'price'},
  {title: 'Категория', dataIndex: 'category'},
  {title: 'Ссылка', dataIndex: 'weblink'},
  {title: 'Конкурент', dataIndex: 'rival'},
];

const columns2: TableColumnsType<DataType2> = [
  {key: 'sort', align: 'center', width: 50, render: () => <DragHandle/>},
  {title: 'Артикул', dataIndex: 'article'},
  {title: 'Имя', dataIndex: 'name'},
  {title: 'Цена', dataIndex: 'price'},
  {title: 'Категория', dataIndex: 'category'},
];

const initialData: DataType[] = [
  {
    key: '1',
    name: 'Кофемашина',
    price: 322,
    category: 'Кофемашины',
    weblink: 'https://...',
    article: '123456789',
    rival: ' ДНС'
  },
  {
    key: '2',
    name: 'Холодильник',
    price: 3211,
    category: 'Холодильники',
    weblink: 'https://...',
    article: '1234536789',
    rival: ' ДНС'
  },
  {
    key: '3',
    name: 'Стиралка',
    price: 312,
    category: 'Стиралки',
    weblink: 'https://...',
    article: '12345673289',
    rival: ' ДНС'
  },
  {
    key: '4',
    name: 'Микроволновка',
    price: 3112,
    category: 'Микроволновки',
    weblink: 'https://...',
    article: '1213456789',
    rival: ' ДНС'
  },

];

const initialData2: DataType2[] = [
  {
    key: '1',
    name: 'Кофемашина',
    price: 322,
    category: 'Кофемашины',
    article: '123456789',

  },
  {
    key: '2',
    name: 'Холодильник',
    price: 3211,
    category: 'Холодильники',
    article: '1234536789',
  },
  {
    key: '3',
    name: 'Стиралка',
    price: 312,
    category: 'Стиралки',
    article: '12345673289',
  },
  {
    key: '4',
    name: 'Микроволновка',
    price: 3112,
    category: 'Микроволновки',
    article: '1213456789',
  },

];

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  'data-row-key': string;
}

const Row: React.FC<RowProps> = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({id: props['data-row-key']});

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    ...(isDragging ? {position: 'relative', zIndex: 9999} : {}),
  };

  const contextValue = useMemo<RowContextProps>(
    () => ({setActivatorNodeRef, listeners}),
    [setActivatorNodeRef, listeners],
  );

  return (
    <RowContext.Provider value={contextValue}>
      <tr {...props} ref={setNodeRef} style={style} {...attributes} />
    </RowContext.Provider>
  );
};

export const ShadowItems = () => {
  const [dataSource1, setDataSource1] = React.useState<DataType2[]>(initialData2);
  const [dataSource2, setDataSource2] = React.useState<DataType[]>(initialData);

  const onDragEnd1 = ({active, over}: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource1((prevState) => {
        const activeIndex = prevState.findIndex((record) => record.key === active?.id);
        const overIndex = prevState.findIndex((record) => record.key === over?.id);
        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
  };

  const onDragEnd2 = ({active, over}: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource2((prevState) => {
        const activeIndex = prevState.findIndex((record) => record.key === active?.id);
        const overIndex = prevState.findIndex((record) => record.key === over?.id);
        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
  };


  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{width: '49%'}}>
          <strong>SKU ДТ</strong>
          <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd1}>
            <SortableContext items={dataSource1.map((i) => i.key)} strategy={verticalListSortingStrategy}>
              <Table<DataType2>
                rowKey="key"
                components={{body: {row: Row}}}
                columns={columns2}
                dataSource={dataSource1}
                pagination={false}
              />
            </SortableContext>
          </DndContext>
        </div>
        <div style={{width: '49%'}}>
          <strong>SKU Конкурентов</strong>
          <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd2}>
            <SortableContext items={dataSource2.map((i) => i.key)} strategy={verticalListSortingStrategy}>
              <Table<DataType>
                rowKey="key"
                components={{body: {row: Row}}}
                columns={columns}
                dataSource={dataSource2}
                pagination={false}
              />
            </SortableContext>
          </DndContext>
        </div>
      </div>
      <Pagination style={{marginBottom: 25}} showSizeChanger={true} pageSizeOptions={[30, 50, 100, 200, 500]}
                  align='center'/>
    </>
  )
}