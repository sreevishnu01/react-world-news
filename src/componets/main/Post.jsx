import React from 'react'
import { Card } from 'react-bootstrap'

function Post(props) {
    const { post } = props

    return (
        <>
            <Card key={post.id} className="mb-2">
                <Card.Img variant="top" src="https://picsum.photos/350/100" className="side-bar-img" />
                <Card.Body className="headline">
                    <Card.Title><Card.Link href={`/news/${post.id}`} className="btn-link text-reset stretched-link" >{post.title}</Card.Link></Card.Title>

                </Card.Body>
            </Card>
        </>
    )
}

export default Post
