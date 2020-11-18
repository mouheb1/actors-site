import React, { useState, useEffect } from 'react'
import { Card, Row, Col, Input } from 'antd'
import axios from 'axios'
import './styles.css'
export const Movie = () => {
    const [movies, setMovies] = useState([])
    const [fakemovies, setfakeMovies] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9080/Mediatech-project-0.0.1-SNAPSHOT/rest/Mediatech/movies').then(res => {
            if (res.data) {
                const data = res.data.results.bindings;
                const sp = data.map(item=>item.movie.value.split('#')[1])
                setMovies(sp)
                setfakeMovies(sp)
            }
        })
    }, [])

    const handleChange = ({ target }) => {
        const { value } = target
        const filtredMovies = movies.filter(movie => movie.search(value) !== -1)
        setfakeMovies(filtredMovies)
    }
    return (
        <Card className='container' style={{ backgroundColor: 'gray' }}>
            <Row gutter={[16, 16]}>
                <Col span={16}></Col>
                <Col span={8}>
                    <Input placeholder='Search' name='search' onChange={handleChange} />
                </Col>
            </Row>
            {fakemovies && fakemovies.length !==0 && fakemovies.map((movie,index) => (
                <Row key={index} gutter={[16, 16]}>
                    <Col span={8}>
                        <Card  className='movie'>
                            {movie}
                     </Card>
                    </Col>
                </Row>
            ))}
            
        </Card>

    )
}