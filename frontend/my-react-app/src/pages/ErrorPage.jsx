import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/">
            <Button type="primary">Back to Home</Button>
          </Link>
        }
      />
    </div>
  );
};

export default ErrorPage;
