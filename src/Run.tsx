import {CheckOutlined, LoadingOutlined, SettingOutlined, WarningOutlined} from "@ant-design/icons";
import {Button, Card, Flex} from "antd";


export const Run = () => {
  return (
    <Flex gap='middle' align='center' vertical>
      <Flex vertical={false} gap={15}>
        <Card title='Metacommerce API' extra={<SettingOutlined/>} style={{width: 400}}>
          <Card size='small'>
            <p>Последний запуск: 2025-01-01 02:00</p>
            <p>Длительность: 4 минуты</p>
            <p>Cтатус: <span style={{color: 'green'}}><CheckOutlined/> Успешно</span></p>
            <Button style={{padding: 20}}>Запустить</Button>
          </Card>
        </Card>
        <Card title="Proanalitycs API" extra={<SettingOutlined/>} style={{width: 400}}>
          <Card size='small'>
            <p>Последний запуск: 2025-01-01 02:00</p>
            <p>Длительность: 4 минуты</p>
            <p>Cтатус: <span style={{color: 'orange'}}><WarningOutlined/> Ошибка</span></p>
            <Button style={{padding: 20}}>Запустить</Button>
          </Card>
        </Card>
        <Card title="Proanalitycs FTP" extra={<SettingOutlined/>} style={{width: 400}}>
          <Card size='small'>
            <p>Последний запуск: 2025-01-01 02:00</p>
            <p>Длительность: 4 минуты</p>
            <p>Cтатус: <span style={{color: 'green'}}><CheckOutlined/> Успешно</span></p>
            <Button style={{padding: 20}}>Запустить</Button>
          </Card>

        </Card>
      </Flex>
      <Flex vertical={false} gap={15}>
        <Card title="Постобработка" extra={<SettingOutlined/>} style={{width: 400}}>
          <Card size='small'>
            <p>Последний запуск: 2025-01-01 02:00</p>
            <p>Длительность: 4 минуты</p>
            <p>Cтатус: <span><LoadingOutlined/> В процессе</span></p>
            <Button style={{padding:  20}}>Запустить</Button>
          </Card>

        </Card>


      </Flex>
    </Flex>
  );
};