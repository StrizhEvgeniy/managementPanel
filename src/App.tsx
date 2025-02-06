import './App.css'
import {Tabs} from "antd";
import {ClockCircleOutlined, DiffOutlined, FileTextOutlined, PlayCircleOutlined, SwapOutlined} from "@ant-design/icons";
import {Logs} from "./Logs.tsx";
import {Run} from "./Run.tsx";
import {Scheduler} from "./Scheduler.tsx";
import {Management} from "./Management.tsx";
import {Zones} from "./Zones.tsx";
import {Rivals} from "./Rivals.tsx";
import {ShadowItems} from "./ShadowItems.tsx";

const tabs1 = [
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
  {
    label: <span>Расписание парсинга <ClockCircleOutlined/></span>,
    key: '3',
    children: <Scheduler/>,
  },
  {
    label: <span>Управление парсингом <DiffOutlined/></span>,
    key: '4',
    children: <Management/>,
  }
]

const tabs2 = [
  {
    label: <span>Сопоставление зон ЦО <SwapOutlined/></span>,
    key: '1',
    children: <Zones/>,
  },
  {
    label: <span>Сопоставление форматов названий конкурентов <SwapOutlined/></span>,
    key: '2',
    children: <Rivals/>,
  },
  {
    label: <span>Сопоставление sku конкурентов ии ДТ <SwapOutlined/></span>,
    key: '3',
    children: <ShadowItems  />,
  }
]

const globalTabs = [
  {
    label: <span>Админ панель</span>,
    key: '1',
    children: <Tabs
      defaultActiveKey="1"
      centered
      items={tabs1}
      style={{height: '100%'}}
    />,
  },
  {
    label: <span>Общедоступные</span>,
    key: '2',
    children: <Tabs
      defaultActiveKey="1"
      centered
      items={tabs2}
      style={{height: '100%'}}
    />,
  }
]


function App() {
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        centered
        items={globalTabs}
        style={{height: '100%'}}
      />
    </>
  )
}

export default App
