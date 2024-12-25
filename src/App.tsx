import './App.css'
import {Tabs} from "antd";
import {FileTextOutlined, PlayCircleOutlined} from "@ant-design/icons";
import {Logs} from "./Logs.tsx";
import {Run} from "./Run.tsx";

const tabs = [
  {
    label: <span>Запуск парсинга <PlayCircleOutlined/></span>,
    key: '1',
    children: <Run/>,
  },
  {
    label: <span>Логи парсинга <FileTextOutlined/></span>,
    key: '2',
    children: <Logs/>,
  },
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
