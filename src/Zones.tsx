// import React, {useContext, useMemo} from 'react';
// import {HolderOutlined} from '@ant-design/icons';
// import type {DragEndEvent} from '@dnd-kit/core';
// import {DndContext} from '@dnd-kit/core';
// import type {SyntheticListenerMap} from '@dnd-kit/core/dist/hooks/utilities';
// import {restrictToVerticalAxis} from '@dnd-kit/modifiers';
// import {
//   arrayMove,
//   SortableContext,
//   useSortable,
//   verticalListSortingStrategy,
// } from '@dnd-kit/sortable';
// import {CSS} from '@dnd-kit/utilities';
// import {Button, Table} from 'antd';
// import type {TableColumnsType} from 'antd';
//
// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
// }
//
// interface RowContextProps {
//   setActivatorNodeRef?: (element: HTMLElement | null) => void;
//   listeners?: SyntheticListenerMap;
// }
//
// const RowContext = React.createContext<RowContextProps>({});
//
// const DragHandle: React.FC = () => {
//   const {setActivatorNodeRef, listeners} = useContext(RowContext);
//   return (
//     <Button
//       type="text"
//       size="small"
//       icon={<HolderOutlined/>}
//       style={{cursor: 'move'}}
//       ref={setActivatorNodeRef}
//       {...listeners}
//     />
//   );
// };
//
// const columns: TableColumnsType<DataType> = [
//   {key: 'sort', align: 'center', width: 80, render: () => <DragHandle/>},
//   {title: 'Name', dataIndex: 'name'},
//   {title: 'Age', dataIndex: 'age'},
//   {title: 'Address', dataIndex: 'address'},
// ];
//
// const initialData: DataType[] = [
//   {key: '1', name: 'John Brown', age: 32, address: 'Long text Long'},
//   {key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park'},
//   {key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park'},
// ];
//
// interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
//   'data-row-key': string;
// }
//
// const Row: React.FC<RowProps> = (props) => {
//   const {
//     attributes,
//     listeners,
//     setNodeRef,
//     setActivatorNodeRef,
//     transform,
//     transition,
//     isDragging,
//   } = useSortable({id: props['data-row-key']});
//
//   const style: React.CSSProperties = {
//     ...props.style,
//     transform: CSS.Translate.toString(transform),
//     transition,
//     ...(isDragging ? {position: 'relative', zIndex: 9999} : {}),
//   };
//
//   const contextValue = useMemo<RowContextProps>(
//     () => ({setActivatorNodeRef, listeners}),
//     [setActivatorNodeRef, listeners],
//   );
//
//   return (
//     <RowContext.Provider value={contextValue}>
//       <tr {...props} ref={setNodeRef} style={style} {...attributes} />
//     </RowContext.Provider>
//   );
// };
//
// export const Zones = () => {
//   const [dataSource1, setDataSource1] = React.useState<DataType[]>(initialData);
//   const [dataSource2, setDataSource2] = React.useState<DataType[]>(initialData);
//
//   const onDragEnd1 = ({active, over}: DragEndEvent) => {
//     if (active.id !== over?.id) {
//       setDataSource1((prevState) => {
//         const activeIndex = prevState.findIndex((record) => record.key === active?.id);
//         const overIndex = prevState.findIndex((record) => record.key === over?.id);
//         return arrayMove(prevState, activeIndex, overIndex);
//       });
//     }
//   };
//
//   const onDragEnd2 = ({active, over}: DragEndEvent) => {
//     if (active.id !== over?.id) {
//       setDataSource2((prevState) => {
//         const activeIndex = prevState.findIndex((record) => record.key === active?.id);
//         const overIndex = prevState.findIndex((record) => record.key === over?.id);
//         return arrayMove(prevState, activeIndex, overIndex);
//       });
//     }
//   };
//
//
//   return (
//     <div style={{display: 'flex', justifyContent: 'space-between'}}>
//       <div style={{width: '49%'}}>
//         <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd1}>
//           <SortableContext items={dataSource1.map((i) => i.key)} strategy={verticalListSortingStrategy}>
//             <Table<DataType>
//               rowKey="key"
//               components={{body: {row: Row}}}
//               columns={columns}
//               dataSource={dataSource1}
//             />
//           </SortableContext>
//         </DndContext>
//       </div>
//       <div style={{width: '49%'}}>
//         <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd2}>
//           <SortableContext items={dataSource2.map((i) => i.key)} strategy={verticalListSortingStrategy}>
//             <Table<DataType>
//               rowKey="key"
//               components={{body: {row: Row}}}
//               columns={columns}
//               dataSource={dataSource2}
//             />
//           </SortableContext>
//         </DndContext>
//       </div>
//     </div>
//   )
// }

import React, {useState} from 'react';
import {Flex, Tree} from 'antd';
import type {TreeDataNode, TreeProps} from 'antd';

const defaultData: TreeDataNode[] = [
  {
    title: 'IDT25VVO',
    key: '0',
    children: [
      {title: 'Владивосток', key: '0-0'},
      {title: 'Артем', key: '0-1'},
    ],
  },
  {
    title: 'IDT27KHV',
    key: '1',
    children: [
      {title: 'Хабаровск', key: '1-0'},
      {title: 'Комсомольск-на-амуре', key: '1-1'},
      {title: 'Комсомольск_на_амуре', key: '1-2'},
    ],
  },
  {
    title: 'IDT25NAK',
    key: '2',
    children: [
      {title: 'Находка', key: '2-0'},
      {title: 'Большой камень', key: '2-1'},
    ],
  },
  {
    title: <div style={{color: 'red'}}>Не распределенные</div>, key: '3', children: [
      {title: 'Биробиджан', key: '3-0'},
    ]
  },
];

export const Zones: React.FC = () => {
  const [gData, setGData] = useState(defaultData);
  const [expandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0']);

  const onDragEnter: TreeProps['onDragEnter'] = (info) => {
    console.log(info);
    // expandedKeys, set it when controlled is needed
    // setExpandedKeys(info.expandedKeys)
  };

  const onDrop: TreeProps['onDrop'] = (info) => {
    console.log(info);
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]); // the drop position relative to the drop node, inside 0, top -1, bottom 1

    const loop = (
      data: TreeDataNode[],
      key: React.Key,
      callback: (node: TreeDataNode, i: number, data: TreeDataNode[]) => void,
    ) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children!, key, callback);
        }
      }
    };
    const data = [...gData];

    // Find dragObject
    let dragObj: TreeDataNode;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
        item.children.unshift(dragObj);
      });
    } else {
      let ar: TreeDataNode[] = [];
      let i: number;
      loop(data, dropKey, (_item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        // Drop on the top of the drop node
        ar.splice(i!, 0, dragObj!);
      } else {
        // Drop on the bottom of the drop node
        ar.splice(i! + 1, 0, dragObj!);
      }
    }
    setGData(data);
  };

  return (
    <Flex vertical={true} align='center'>
      <Tree
        style={{width: '50%'}}
        className="draggable-tree"
        defaultExpandedKeys={expandedKeys}
        draggable
        blockNode
        onDragEnter={onDragEnter}
        onDrop={onDrop}
        treeData={gData}
      />
    </Flex>
  );
};