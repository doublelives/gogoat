import { Button } from 'antd';
import { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const nav = useNavigate();
  return <div style={{height: '800px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div style={{width: '360px', height: '614px'}}>
    </div>
  </div>
}

export default Home;