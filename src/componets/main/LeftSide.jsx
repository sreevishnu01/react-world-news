import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import Post from './Post';
import sideimg from '../../Assets/images/sidep.png'

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
                    <Image src={process.env.PUBLIC_URL + '/images/pepole.png'} className="side-bar-img" />
                </Col>
            </Row>

        </>
    )
}

export default LeftSide
