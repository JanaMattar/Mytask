import { useState } from 'react';
import { Form, Input, Button, Card, Typography, message } from 'antd';

const { Title, Paragraph } = Typography;

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
  });

  const handleUpdate = async (values) => {
    console.log('Update function called with values:', values);
    
    try {
      // Simulate API call
      // Replace this with your actual API call
      // Example: await axios.put('http://localhost:3000/api/user/profile', values);
      
      // Simulate success response
      console.log('Profile updated successfully.');
      message.success('Profile updated successfully!');
      
      // Update local state
      setUser(values);
    } catch (error) {
      console.error('Error updating profile:', error);
      message.error('Failed to update profile. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Card title={<Title level={3}>Profile</Title>} bordered={false}>
        <Paragraph>
          Update your profile information below:
        </Paragraph>
        <Form
          initialValues={user}
          onFinish={handleUpdate}
          layout="vertical"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'The input is not valid E-mail!' }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Profile
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ProfilePage;
