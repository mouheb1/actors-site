import React, { useState, useEffect } from 'react'
import { Card, Row, Col, Input } from 'antd'
import axios from 'axios'
import './styles.css'
export const Serie = () => {
    const [series, setSeries] = useState([])
    const [fakeseries, setfakeSeries] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9080/Mediatech-project-0.0.1-SNAPSHOT/rest/Mediatech/series').then(res => {
            if (res.data) {
                const data = res.data.results.bindings;
                const sp = data.map(item=>item.serie.value.split('#')[1])
                setSeries(sp)
                setfakeSeries(sp)
            }
        })
    }, [])
    console.log(series)

    const handleChange = ({ target }) => {
        const { value } = target
        const filtredSeries = series.filter(serie => serie.search(value) !== -1)
        setfakeSeries(filtredSeries)
    }
    return (
        <Card className='container' style={{ backgroundColor: 'gray' }}>
            <Row gutter={[16, 16]}>
                <Col span={16}></Col>
                <Col span={8}>
                    <Input placeholder='Search' name='search' onChange={handleChange} />
                </Col>
            </Row>
            {fakeseries && fakeseries.length !==0 && fakeseries.map((serie,index) => (
                <Row key={index} gutter={[16, 16]}>
                    <Col span={8}>
                        <Card  className='serie'>
                            {serie}
                     </Card>
                    </Col>
                </Row>
            ))}
            
        </Card>

    )
}