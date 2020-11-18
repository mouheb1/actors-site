import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

export const SideBar = () => {
    return (
        <Row style={{ minHeight: '100vh' }}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
                <SubMenu key="sub1" icon={<UserOutlined />} title="User" >
                    <Menu.Item key="3"> <Link to='movies'>Movies</Link> </Menu.Item>
                    <Menu.Item key="4"><Link to='albums'>Albums</Link></Menu.Item>
                    <Menu.Item key="5"><Link to='actors'>Actors</Link></Menu.Item>
                    <Menu.Item key="6"><Link to='serie'>Series</Link></Menu.Item>
                </SubMenu>
            </Menu>
        </Row>

    );
}