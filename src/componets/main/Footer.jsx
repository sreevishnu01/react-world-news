import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Post from './Post'
import { Link } from 'react-router-dom'

function Footer(props) {
    const { data } = props;
    return (
        <>
            <Container fluid className="mt-5">
                <Row>
                    {/* left */}
                    <Col>
                        <Row>
                            {data.slice(6, 8).map(p => (
                                <Col key={p.id}>
                                    <Card >
                                        <Card.Img src={process.env.PUBLIC_URL + p.img} className="side-bar-img" />
                                        <Card.Body className="headline">
                                            <Card.Title><Link to={`/news/${p.id}`} className="btn-link text-reset stretched-link" >{p.title}</Link></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    {/* center */}

                    {data.slice(8, 10).map(p => (
                        <Col>
                            <Post post={p} />
                        </Col>
                    ))}
                    {/* right */}

                </Row>
            </Container>

        </>

    )
}

export default Footer
