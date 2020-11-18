import React, { useState, useEffect } from 'react'
import { Card, Row, Col, Input } from 'antd'
import axios from 'axios'
import './styles.css'
export const Actor = () => {
    const [actors, setActors] = useState([])
    const [fakeactors, setfakeActors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9080/Mediatech-project-0.0.1-SNAPSHOT/rest/Mediatech/actors').then(res => {
            if (res.data) {
                const data = res.data.results.bindings;
                const sp = data.map(item=>item?.actor?.value?.split('#')[1])
                setActors(sp)
                setfakeActors(sp)
            }
        })
    }, [])

    const handleChange = ({ target }) => {
        const { value } = target
        const filtredActors = actors.filter(actor => actor.search(value) !== -1)
        setfakeActors(filtredActors)
    }
    return (
        <Card className='container' style={{ backgroundColor: 'gray' }}>
            <Row gutter={[16, 16]}>
                <Col span={16}></Col>
                <Col span={8}>
                    <Input placeholder='Search' name='search' onChange={handleChange} />
                </Col>
            </Row>
            {fakeactors && fakeactors.length !==0 && fakeactors.map((actor,index) => (
                <Row key={index} gutter={[16, 16]}>
                    <Col span={8}>
                        <Card  className='actor'>
                            {actor}
                     </Card>
                    </Col>
                </Row>
            ))}
            
        </Card>

    )
}