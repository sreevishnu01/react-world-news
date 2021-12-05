import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import Post from './Post';

function LeftSide(props) {
    const { data } = props;

    return (
        <>
            <Row>
                <Col lg={10}>
                    {data.slice(0, 3).map(p => (
                        <Post post={p} />
                    ))}
                </Col>
                <Col>
                    <Image src="https://picsum.photos/100/850" className="side-bar-img" />
                </Col>
            </Row>

        </>
    )
}

export default LeftSide
