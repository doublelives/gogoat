import { Button } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

const Goods = () => {
  const nav = useNavigate();
  const [count, setCount] = useState(0)
  const refaa = useRef();
  console.log(refaa.current, +new Date())
  useEffect(() => {
    refaa.current = count
    console.log(count, refaa.current)
  })
  return <Button onClick={() => setCount(c => c + 1)}>Goods{count}{refaa.current}</Button>
}

export default Goods;