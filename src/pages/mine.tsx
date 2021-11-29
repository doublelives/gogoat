import { Button } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

const Mine = () => {
  const nav = useNavigate()
  return <Button onClick={() => nav('/')}>Mine</Button>
}

export default Mine;