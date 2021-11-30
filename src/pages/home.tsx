import { Button, Card, Descriptions } from 'antd';
import { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router';
import TaskList from '@/component/TaskList';
import styles from './home.module.scss'

const Home = () => {
  const nav = useNavigate();
  return <div className={styles['home-wrapper']}>
    <Descriptions title="主页" column={2}>
      <Descriptions.Item>
        <Card className={styles['task-list']} title="任务列表" size='small'>
          <TaskList />
        </Card>
      </Descriptions.Item>
    </Descriptions>
  </div>
}

export default Home;