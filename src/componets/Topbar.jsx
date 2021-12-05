import React from 'react'
import { Container, Image } from 'react-bootstrap'
import topbarimg from '../Assets/images/topbaner.png'

function Topbar() {
    return (
        <>
            <Container fluid className="m-0 p-0">
                <div className="topbar">
                    <Image src={topbarimg} fluid className="topbar-img" alt="non" />
                </div>

            </Container>
        </>
    )
}

export default Topbar
