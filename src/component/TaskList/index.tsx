import React, { FC, useMemo, useState } from 'react'
import { List, Radio } from 'antd'

const data = [
  {
    type: 'done',
    content: '吃饭'
  },
  {
    type: 'undo',
    content: '睡觉'
  },
  {
    type: 'done',
    content: '打豆豆'
  }
]


const TaskList: FC<{}> = () => {
  const [taskType, setTaskType] = useState<'all' | 'done' | 'undo'>('all')
  const dataList = useMemo(() => {
    return taskType === 'all' ? data : data.filter(i => i.type === taskType)
  }, [taskType])
  const onChangeType = e => {
    setTaskType(e.target.value)
  }
  return <>
  <Radio.Group onChange={onChangeType} value={taskType}>
    <Radio value='all'>全部</Radio>
    <Radio value='done'>已完成</Radio>
    <Radio value='undo'>已完成</Radio>
  </Radio.Group>
  <List>
      {
        dataList.map((task, idx) => {
          return <List.Item key={idx}>{task.content}</List.Item>
        })
      }
    </List>
    </>
}

export default TaskList