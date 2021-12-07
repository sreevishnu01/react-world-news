import { useEffect, useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import { useLocation } from 'react-router'
import Data from '../Assets/Data'

function Singepage() {

    const location = useLocation()
    const path = parseInt(location.pathname.split('/')[2])
    const [post, setPost] = useState([])

    useEffect(() => {
        const res = Data.news.find(d => d.id === path)
        setPost(res)
    }, [path])
    return (
        <>
            <Container className="mt-5">
                <Card key={post.id} className="mb-1">
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + post.img} />
                    <Card.Body >
                        <Card.Title><Card.Link href={`/news/${post.id}`} className="btn-link text-reset stretched-link text-family fs-1" >{post.title}</Card.Link></Card.Title>
                        <Card.Text dangerouslySetInnerHTML={{ __html: post.desciption }} className="text-family"></Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Singepage
