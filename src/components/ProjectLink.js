import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Badge, Col, Row } from "react-bootstrap"

export default ({ excerpt, featuredImages, tags, title, to }) => {
  return (
    <Container className="project-container">
      <Link to={to} style={{ textDecoration: "none" }}>
        <Row>
          {featuredImages &&
            featuredImages.map(image => (
              <Col key={image.src}>
                <Img fluid={image} className="m-auto w-75" />
              </Col>
            ))}
        </Row>
        <h4 className="mt-5">{title}</h4>
      </Link>
      {tags.map(tag => (
        <Badge key={tag} pill variant="dark" className="px-2 mr-1">
          {tag}
        </Badge>
      ))}
      {/* {excerpt} */}
      <p className="pt-3 text-justify">{excerpt}</p>
      
    </Container>
  )
}
