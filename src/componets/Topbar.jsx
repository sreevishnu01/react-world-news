import React from 'react'
import { Container, Image } from 'react-bootstrap'
import topbarimg from '../Assets/images/topbaner.png'
function Topbar() {
    return (
        <>
            <Container fluid className="mt-2 p-0">
                <div className="topbar">
                    <Image src={process.env.PUBLIC_URL + '/images/image.png'} fluid className="topbar-img" alt="non" />
                </div>

            </Container>
        </>
    )
}

export default Topbar
