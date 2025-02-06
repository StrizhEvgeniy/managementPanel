import {Button, DatePicker, Modal, Pagination, Select, Table, TableColumnsType} from "antd";
import React, {useState} from "react";
import styles from "./Logs.module.css"
import {FilterFilled, ReloadOutlined} from "@ant-design/icons";

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
    title: 'Уровень',
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
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className={styles.container}>
      <div style={{display: 'flex'}}>
        <Table<DataType>
          style={{width: '95%'}}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <FilterFilled onClick={() => setIsModalOpen(true)} style={{fontSize: '150%', padding: 10}}/>
          <ReloadOutlined style={{fontSize: '150%', padding: 10}}/>
        </div>
      </div>
      <Pagination style={{marginBottom: 25}} showSizeChanger={true} pageSizeOptions={[30, 50, 100, 200, 500]}
                  align='center'/>
      <Modal title='Фильтрация логирования' open={isModalOpen} onOk={() => setIsModalOpen(false)}
             onCancel={() => setIsModalOpen(false)}
             footer={<div style={{display: 'flex', justifyContent: 'space-around'}}>
               <Button>Применить</Button>
               <Button>Отменить</Button>
             </div>}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <p>Дата начала логов:</p>
            <DatePicker size='small' style={{margin: 5}}></DatePicker>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <p>Дата окончания логов:</p>
            <DatePicker size='small' style={{margin: 5}}></DatePicker>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <p>Уровень</p>
            <Select style={{margin: 5}} defaultValue={{value: 'none', label: 'Не выбрано'}}>
              <Select.Option value="none">Не выбрано</Select.Option>
              <Select.Option value="info">INFO</Select.Option>
              <Select.Option value="log">LOG</Select.Option>
              <Select.Option value="ready">READY</Select.Option>
              <Select.Option value="error">ERROR</Select.Option>
              <Select.Option value="debug">DEBUG</Select.Option>
            </Select>
          </div>
        </div>
      </Modal>
    </div>
  );
};