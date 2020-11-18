import React, { useState, useEffect } from 'react'
import { Card, Row, Col, Input } from 'antd'
import axios from 'axios'
import './styles.css'
export const Person = () => {
    const [actors, setActors] = useState([])

    useEffect(() => {
        axios.get('/actors').then(res => {
            if (res.data) {
                setActors(res.data)
            }
        })
    }, [])

    const handleChange = ({ target }) => {
        const { value } = target
        const filtredActors = actors.filter(actor => actors.name === value)
        setActors(filtredActors)
    }
    return (
        <Card className='container' style={{ backgroundColor: 'gray' }}>
            <Row gutter={[16, 16]}>
                <Col span={16}></Col>
                <Col span={8}>
                    <Input placeholder='Search' name='search' onChange={handleChange} />
                </Col>
            </Row>
            {actors.map(actor => (
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <Card className='actor'>
                            
                     </Card>
                    </Col>
                </Row>
            ))}
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Card className='actor'>
                        hh
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className='actor'>
                        hh
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className='actor'>
                        hh
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className='actor'>
                        hh
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className='actor'>
                        hh
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className='actor'>
                        hh
                    </Card>
                </Col>
            </Row>
        </Card>

    )
}
