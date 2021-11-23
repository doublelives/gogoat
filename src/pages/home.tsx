import { Button } from 'antd';
import { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const nav = useNavigate();
  const ifream = useRef<HTMLIFrameElement>(null)
  const ifreamDocument = useMemo(() => ifream.current?.contentWindow?.document, [ifream])
  useEffect(() => {
    if(!ifreamDocument?.getElementById('div1')) {
      let div1 = ifreamDocument?.createElement('div')!
      div1?.setAttribute('id', 'div1')
      div1?.setAttribute('style', 'width: 100px; height: 100px; background: black')
      ifreamDocument?.body.appendChild(div1)
    }
    return () => {
      // ifreamDocument?.body?.remove(div1)
    }
  }, [])
  return <div style={{height: '800px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div style={{width: '360px', height: '614px'}}>
      <iframe style={{width: '360px', height: '614px'}} ref={ifream} />
    </div>
  </div>
}

export default Home;