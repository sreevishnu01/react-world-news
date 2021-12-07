import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Center from './Center'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import Data from '../../Assets/Data'
import Footer from './Footer'
function Mainpage() {
    const { news } = Data;
    const post = news.find(id => id.id === 1)
    console.log(post)
    return (
        <>
            <Container fluid className="mt-5">
                <Row>
                    <Col lg={4}><LeftSide data={news} /></Col>
                    <Col><Center /></Col>
                    <Col lg={4}><RightSide data={news} /></Col>
                </Row>
                <Footer data={news} />
            </Container>
        </>
    )
}

export default Mainpage
