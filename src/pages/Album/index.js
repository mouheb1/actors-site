import React, { useState, useEffect } from 'react'
import { Card, Row, Col, Input } from 'antd'
import axios from 'axios'
import './styles.css'
export const Album = () => {
    const [albums, setAlbums] = useState([])
    const [fakealbums, setfakeAlbums] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9080/Mediatech-project-0.0.1-SNAPSHOT/rest/Mediatech/albums').then(res => {
            if (res.data) {
                const data = res.data.results.bindings;
                const sp = data.map(item=>item.movie.value.split('#')[1])
                setAlbums(sp)
                setfakeAlbums(sp)
            }
        })
    }, [])

    console.log(albums)
    const handleChange = ({ target }) => {
        const { value } = target
        const filtredAlbums = albums.filter(album => album.search(value) !== -1)
        setfakeAlbums(filtredAlbums)
    }
    return (
        <Card className='container' style={{ backgroundColor: 'gray' }}>
            <Row gutter={[16, 16]}>
                <Col span={16}></Col>
                <Col span={8}>
                    <Input placeholder='Search' name='search' onChange={handleChange} />
                </Col>
            </Row>
            {fakealbums && fakealbums.length !==0 && fakealbums.map((album,index) => (
                <Row key={index} gutter={[16, 16]}>
                    <Col span={8}>
                        <Card  className='album'>
                            {album}
                     </Card>
                    </Col>
                </Row>
            ))}
            
        </Card>

    )
}