import React, { FC } from 'react';
import {useIntl} from 'react-intl';
import LoginForm from './components/LoginForm';
import style from'./index.less';

const Login: FC = () => {
  const { formatMessage } = useIntl();
  return <div className={style.login_content}>
    <div className={style.left_content}></div>
    <div className={style.right_content}>
      <div className={style.login_form}>
        <div className={style.login_text}>
          {formatMessage({id:'login.title'})}
        </div>
				<LoginForm />
				</div>
			</div>
  </div>;
};

export default Login;
