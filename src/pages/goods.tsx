import { Button } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

const Goods = () => {
  const nav = useNavigate()
  return <Button onClick={() => nav('/')}>Goods</Button>
}

export default Goods;