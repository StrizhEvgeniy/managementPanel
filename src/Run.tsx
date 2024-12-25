import {Button, Card, Flex} from "antd";


export const Run = () => {
  return (
    <Flex gap='middle' align='center' vertical>
      <Flex vertical={false} gap={15}>
        <Card title="Metacommerce API + Proanalitycs API" style={{width: 500}}>
          <Card size='small'>
            <p>Последний запуск: 2025-01-01 02:00</p>
            <p>Cтатус: <span style={{color: 'green'}}>Успешно</span></p>
          </Card>
          <Button style={{marginTop: 15}}>Запустить</Button>
        </Card>
        <Card title="Metacommerce API" style={{width: 500}}>
          <Card size='small'>
            <p>Последний запуск: 2025-01-01 02:00</p>
            <p>Cтатус: <span style={{color: 'green'}}>Успешно</span></p>
          </Card>
          <Button style={{marginTop: 15}}>Запустить</Button>
        </Card>
      </Flex>
      <Flex vertical={false} gap={15}>
        <Card title="Proanalitycs API" style={{width: 500}}>
          <Card size='small'>
            <p>Последний запуск: 2025-01-01 02:00</p>
            <p>Cтатус: <span style={{color: 'orange'}}>Ошибка</span></p>
          </Card>
          <Button style={{marginTop: 15}}>Запустить</Button>
        </Card>
        <Card title="FTP" style={{width: 500}}>
          <Card size='small'>
            <p>Последний запуск: 2025-01-01 02:00</p>
            <p>Cтатус: <span style={{color: 'green'}}>Успешно</span></p>
          </Card>
          <Button style={{marginTop: 15}}>Запустить</Button>
        </Card>
      </Flex>
    </Flex>
  );
};