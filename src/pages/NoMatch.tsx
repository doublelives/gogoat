import { Result, Button } from 'antd';
import { useNavigate } from 'react-router';

export default () => {
  const nav = useNavigate();
  const backToHome = () => {
    nav('/')
  }
  return <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" onClick={backToHome}>Back Home</Button>}
  />
}
