import React from 'react'
import { Layout } from 'antd';

const { Header } = Layout;

export const NavBar = () => {

    return (
        <Layout className="layout">
            <Header style={{color:"white"}}>
            Mediatech
            </Header>

        </Layout>
    )
}