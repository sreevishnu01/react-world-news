import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Post from './Post';
import sideimg from '../../Assets/images/sides.png'

function RightSide(props) {
    const { data } = props;
    return (
        <>
            <Row>
                <Col md={0}>
                    <Image src={sideimg} className="side-bar-img" />
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
