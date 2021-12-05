import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Post from './Post'

function Footer(props) {
    const { data } = props;
    return (
        <>
            <Container fluid className="mt-5">
                <Row>
                    {/* left */}
                    <Col>
                        <Row>
                            {data.slice(0, 2).map(p => (
                                <Col key={p.id}>
                                    <Card style={{ height: '10rem' }}>
                                        <Card.Img variant="top" src="https://picsum.photos/350/100" className="side-bar-img" />
                                        <Card.Body>
                                            <Card.Title>{p.title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    {/* center */}

                    {data.slice(0, 2).map(p => (
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
