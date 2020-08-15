import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import LoginForm from '../components/LoginForm'
import UserProfile from '../components/UserProfile'
import { Menu, Input, Button, Row, Col } from 'antd';

const dummy = {
  nickname: 'Outwater',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
};


const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} /> 
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a><Button>회원가입</Button></a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn
            ?<UserProfile />
            :<LoginForm />}
        </Col>
        <Col xs={24} md={12}>{children}</Col>
        <Col xs={24} md={6}>
          <a href="https://www.notion.so/sooveloper/React-nodebird-9e7696311a284fcf9202dae25d7e8029" target="_blank" rel="noreferrer noopener">Made by OutWater</a>  
        </Col>
      </Row>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;
