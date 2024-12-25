import './App.css'
import {Tabs} from "antd";
import {FileTextOutlined, PlayCircleOutlined, SettingOutlined} from "@ant-design/icons";
import {Logs} from "./Logs.tsx";
import {Run} from "./Run.tsx";
import {Settings} from "./Settings.tsx";

const tabs = [
  {
    label: <span>Логи парсинга <FileTextOutlined/></span>,
    key: '1',
    children: <Logs/>,
  },
  {
    label: <span>Запуск парсинга <PlayCircleOutlined/></span>,
    key: '2',
    children: <Run/>,
  },
  {
    label: <span>Настройки сервиса <SettingOutlined/></span>,
    key: '3',
    children: <Settings />,
  }
]

function App() {
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        centered
        items={tabs}
      />
    </>
  )
}

export default App
