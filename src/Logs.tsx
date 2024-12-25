import {Table, TableColumnsType} from "antd";
import React from "react";

interface DataType {
  key: React.Key;
  date: string;
  status: string;
  log: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Дата',
    dataIndex: 'date'
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    render: (value) => {
      if (value === 'error') return <span style={{color: 'red'}}>{value}</span>
      if (value === 'warning') return <span style={{color: 'orange'}}>{value}</span>
      if (value === 'success') return <span style={{color: 'green'}}>{value}</span>
      return value;
    }
  },
  {
    title: 'Лог',
    dataIndex: 'log',
  },
];

const data = [
  {
    key: '1',
    date: '2025-01-01 02:00',
    status: 'success',
    log: 'Ночная выгрузка: МК: 155184 ПА: 245140, постобработка: 102375'
  },
  {
    key: '2',
    date: '2025-01-01 12:00',
    status: 'success',
    log: 'Дневная выгрузка: МК: 155184 ПА: 245140, постобработка: 102375'
  },
  {
    key: '3',
    date: '2025-01-02 02:00',
    status: 'warning',
    log: 'Количество перезапусков: 3. Ночная выгрузка: МК: 155184 ПА: 245140, постобработка: 102375'
  },
  {
    key: '4',
    date: '2025-01-02 12:00',
    status: 'error',
    log: 'Ночная выгрузка упала: причина: МК timeout'
  }
]


export const Logs = () => {
  return (
    <div>
      <Table<DataType>
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};