import {Card, Flex, Input} from "antd";

export const Settings = () => {
  return (
    <Flex gap='middle' align='center' vertical>
      <Card title="Токен МК" style={{width: 300}}>
        <Input placeholder="Введите новый токен" />
      </Card>
      <Card title="Токен ПА" style={{width: 300}}>
        <Input placeholder="Введите новый токен" />
      </Card>
    </Flex>
  );
};