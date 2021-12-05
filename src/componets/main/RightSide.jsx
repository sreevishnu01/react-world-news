import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Post from './Post';

function RightSide(props) {
    const { data } = props;
    return (
        <>
            <Row>
                <Col md={0}>
                    <Image src="https://picsum.photos/100/850" className="side-bar-img" />
                </Col>
                <Col lg={10}>
                    {data.slice(0, 3).map(p => (
                        <Post post={p} />
                    ))}
                </Col>

            </Row>
        </>
    )
}

export default RightSide
