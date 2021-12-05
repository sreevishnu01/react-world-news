import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Post(props) {
    const { post } = props

    return (
        <>
            <Card key={post.id} className="mb-2">
                <Card.Img variant="top" src="https://picsum.photos/350/100" className="side-bar-img" />
                <Card.Body className="headline">
                    <Card.Title><Link to={`/news/${post.id}`} className="btn-link text-reset stretched-link" >{post.title}</Link></Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default Post
