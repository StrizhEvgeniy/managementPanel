import {useState} from "react";
import {Flex, Tree, TreeDataNode, TreeProps} from "antd";

const treeData: TreeDataNode[] = [
  {
    title: 'Metacommerce',
    key: '0-0',
    children: [
      {
        title: 'DNS',
        key: '0-0-0',
        children: [
          {title: 'IDT25VVO', key: '0-0-0-0'},
          {title: 'IDT25NAK', key: '0-0-0-1'},
          {title: 'IDT25USS', key: '0-0-0-2'},
        ],
      },
      {
        title: 'RBT',
        key: '0-0-1',
        children: [
          {title: 'IDT25VVO', key: '0-0-1-0'},
          {title: 'IDT25NAK', key: '0-0-1-1'},
          {title: 'IDT25USS', key: '0-0-1-2'},
        ],
      },
      {
        title: 'MVideo',
        key: '0-0-2',
        children: [
          {title: 'IDT25VVO', key: '0-0-2-0'},
          {title: 'IDT25NAK', key: '0-0-2-1'},
          {title: 'IDT25USS', key: '0-0-2-2'},
        ],
      },
    ],
  },
  {
    title: ' Proanalytics',
    key: '0-1',
    children: [
      {
        title: 'DNS',
        key: '0-1-0',
        children: [
          {title: 'IDT25VVO', key: '0-1-0-0'},
          {title: 'IDT25NAK', key: '0-1-0-1'},
          {title: 'IDT25USS', key: '0-1-0-2'},
        ],
      },
      {
        title: 'RBT',
        key: '0-1-1',
        children: [
          {title: 'IDT25VVO', key: '0-1-1-0'},
          {title: 'IDT25NAK', key: '0-1-1-1'},
          {title: 'IDT25USS', key: '0-1-1-2'},
        ],
      },
      {
        title: 'MVideo',
        key: '0-1-2',
        children: [
          {title: 'IDT25VVO', key: '0-1-2-0'},
          {title: 'IDT25NAK', key: '0-1-2-1'},
          {title: 'IDT25USS', key: '0-1-2-2'},
        ],
      },
    ],
  },
];

export const Management = () => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>(['0-0', '0-1']);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>(['0-0-0']);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

  const onExpand: TreeProps['onExpand'] = (expandedKeysValue) => {
    console.log('onExpand', expandedKeysValue);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck: TreeProps['onCheck'] = (checkedKeysValue) => {
    console.log('onCheck', checkedKeysValue);
    setCheckedKeys(checkedKeysValue as React.Key[]);
  };

  const onSelect: TreeProps['onSelect'] = (selectedKeysValue, info) => {
    console.log('onSelect', info);
    setSelectedKeys(selectedKeysValue);
  };

  return <Flex align='center' vertical={true}>
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      treeData={treeData}
    />
  </Flex>
}