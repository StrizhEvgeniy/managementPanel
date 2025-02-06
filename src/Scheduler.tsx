import {Button, Card, Checkbox, Flex, Input, Select, Table, TableColumnsType} from "antd";
import React from "react";
import {DeleteFilled, DownloadOutlined, PlusOutlined} from "@ant-design/icons";

interface DataType {
  key: React.Key;
  name: string;
  description: string;
  schedule: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: '№',
    dataIndex: 'id'
  },
  {
    title: 'Наименование',
    dataIndex: 'name',
  },
  {
    title: 'Описание',
    dataIndex: 'description',
  },
  {
    title: 'Расписание',
    dataIndex: 'schedule',
  },
];

const data = [
  {
    key: '1',
    id: '1',
    name: 'Metacommerce API',
    description: 'Еженедельный парсинг от Метакоммерс',
    schedule: '* * */7 * *'
  }
]

export const Scheduler = () => {
  return (
    <div style={{display: 'flex', height: '100%', justifyContent: 'space-between'}}>
      <div style={{display: 'flex', flexDirection: 'column', height: '100%', width: '60%'}}>
        <Table style={{height: '90%'}} columns={columns}
               dataSource={data}
               pagination={false}/>
        <div><Checkbox/> Показывать отключенные задачи</div>
      </div>
      <Flex vertical={true} gap={15}>
        <PlusOutlined style={{fontSize: '150%'}}/>
        <DownloadOutlined style={{fontSize: '150%'}}/>
        <DeleteFilled style={{fontSize: '150%'}}/>
      </Flex>
      <div style={{height: '100%', width: '35%'}}>
        <Card title='Задание №1'>
          <Card>
            <Flex vertical={true} align='flex-start'>


              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <p>Поставщик: </p>
                <Select style={{width: '50%'}} defaultValue={{value: 'mc', label: 'Metacommerce API'}}>
                  <Select.Option value="mc">Metacommerce API</Select.Option>
                  <Select.Option value="pa_api">Proanalytics API</Select.Option>
                  <Select.Option value="pa_ftp">Proanalytics FTP</Select.Option>
                  <Select.Option value="post">Постобработка</Select.Option>
                  <Select.Option value="archivator">Архиватор</Select.Option>
                </Select>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <p>Описание: </p>
                <Input style={{width: '50%'}} size='small' placeholder='Описание задания'
                       value="Еженедельный парсинг от Метакоммерс"/>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <p>Интервал: </p>
                <Input style={{width: '10%', marginTop: 10}} size='small' placeholder='Временной интервал' value="10"/>
              </div>
              <div>
                <Checkbox>Включено</Checkbox>
              </div>
              <div>
                <Checkbox value={true}>Задать через интервал</Checkbox>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '50%',
                  padding: 10
                }}>
                  <p>Тип интервала</p>
                  <Select defaultValue={{value: 'week', label: 'Дни'}}>
                    <Select.Option value="day">Минуты</Select.Option>
                    <Select.Option value="week">Часы</Select.Option>
                    <Select.Option value="month">Дни</Select.Option>
                  </Select>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '50%', padding: 10}}>
                  <p>Интервал запуска</p>
                  <Input style={{width: '20%'}} size='small' placeholder='Интервал запуска' value="7"/>
                </div>
              </div>

            </Flex>
            <Button>Добавить</Button>
          </Card>
        </Card>
      </div>

    </div>
  )
}