import React from 'react'
import { Container, Card } from 'react-bootstrap'

function Topbar() {
    return (
        <>
            <Container fluid className="m-0 p-0">
                <Card className="bg-dark border-0 text-white position-relative">
                    <Card.Img src="https://picsum.photos/1680/150" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className="position-absolute top-50 start-50 translate-middle">Wrold News</Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </Container>
        </>
    )
}

export default Topbar
