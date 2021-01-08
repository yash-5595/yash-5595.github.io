import React from "react"
import { graphql } from "gatsby"
import PostTemplate from "./post-template"

const SubTitle = ({ date,link,publishedIN,author, abstract }) => (

  <div> 
    <h5 className="text-center mb-5 ">  
   <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {publishedIN}
          </a> 
</h5> <div  style={{"width" : "100%"}}  className="text-justify mb-5 text-muted"> Abstract : {abstract} </div> </div>
  

  
)

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <PostTemplate
      title={post.frontmatter.title}
      subTitle={
        <SubTitle
          
          date={post.frontmatter.date}
          link={post.frontmatter.link}
          publishedIN = {post.frontmatter.Published}
          author={post.frontmatter.author}
          abstract={post.frontmatter.Abstract}
        />
      }
      // {post.frontmatter.Abstract}}
      excerpt={post.excerpt}
      html={post.html}
    />
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "DD MMMM, YYYY")
        link
        Abstract
        Published
      }
      excerpt
      timeToRead
    }
  }
`
