import React,{FC} from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {useIntl} from 'react-intl';

type LoginFrom = {
	username:string,
	password:string;
}
const LoginForm: FC = () => {
  const { formatMessage } = useIntl();
  const [form] = Form.useForm();
	const navigate = useNavigate();

  const onFinish = (loginForm: LoginFrom) => {
		if(loginForm.username === "admin" && loginForm.password === '123456'){
			navigate('/home');
		}
	};

  return (
    <Form form={form} name="basic" labelCol={{ span: 5 }} initialValues={{ remember: true }} onFinish={onFinish} size="large"autoComplete="off">
		  <Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
				<Input placeholder="admin" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
				<Input.Password autoComplete="new-password" placeholder="123456" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
				{formatMessage({id: "login.confirm"})}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
