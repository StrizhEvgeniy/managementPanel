import React, {useState} from "react";
import {Flex, Tree, TreeDataNode, TreeProps} from "antd";

const defaultData: TreeDataNode[] = [
  {
    title: 'РБТ',
    key: '0',
    children: [
      {title: 'рбт', key: '0-0'},
      {title: '111', key: '0-1'},
    ],
  },
  {
    title: 'ДНС',
    key: '1',
    children: [
      {title: 'DNS', key: '1-0'},
      {title: 'днс', key: '1-1'},
      {title: '112', key: '1-2'},
    ],
  },
  {
    title: 'МВидео',
    key: '2',
    children: [
      {title: 'мвидео', key: '2-0'},
      {title: 'mvideo', key: '2-1'},
    ],
  },
  {
    title: <div style={{color: 'red'}}>Не распределенные</div>, key: '3', children: [
      {title: '114', key: '3-0'},
    ]
  },
];


export const Rivals: React.FC = () => {
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