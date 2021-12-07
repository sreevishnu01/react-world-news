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
                    <Image src={process.env.PUBLIC_URL + '/images/mount.png'} className="side-bar-img" />
                </Col>
                <Col lg={10}>
                    {data.slice(3, 6).map(p => (
                        <Post post={p} />
                    ))}
                </Col>

            </Row>
        </>
    )
}

export default RightSide
