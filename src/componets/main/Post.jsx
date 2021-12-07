import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Post(props) {
    const { post } = props

    return (
        <>
            <Card key={post.id} className="mb-2">
                <Card.Img src={process.env.PUBLIC_URL + post.img} className="side-bar-img " />
                <Card.Body className="headline">
                    <Card.Title><Link to={`/news/${post.id}`} className="btn-link text-reset stretched-link text-family " >{post.title}</Link></Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default Post
