import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { ThemeContext, SEO } from "../utils"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link}>
        {title}
      </a>
      &nbsp;-<i>{author}</i>
    </li>
  )

  const {
    author,
    occupation,
    readingList,
    showsList,
    designations,
    unemployed,
  } = data.site.siteMetadata
  const { toString } = useContext(ThemeContext)

  const bookLinks = readingList.map(book => MediaLink(book))
  const showLinks = showsList.map(show => MediaLink(show))

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <Image
          rounded
          width="140"
          height="140"
          src={`../../icons/luke-${toString()}.png`}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="i-5 mt-4 pt-2">
            Hello there! My name is <b>{`${author}`}</b>. I am a&nbsp;
            <a
              href="https://www.dictionary.com/e/fictional-characters/padawan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              padawan
            </a>
            &nbsp;
            <b>{occupation}</b> pursuing PhD in Computer Science, under the supervision of 
            &nbsp;
            <a
              href="https://sites.google.com/site/sanjayranka/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prof. Sanjay Ranka
            </a> and
            &nbsp;
            <a
              href="https://www.cise.ufl.edu/~anand/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prof. Anand Rangarajan. 
            </a>
           
            &nbsp;My current research focuses on developing ML, AI based algorithms to tackle real world problems in 
            Intelligent Transportation Systems (ITS) and smart health care.
            
          </p>
          <p className="i-5">
            I recieved my 
            Masters in Computer Science from&nbsp; 
            <a
              href="https://www.ufl.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
             University of Florida (Go Gators!)
            </a> in 2020 and 
            Bachelors in Electrical Engineering from&nbsp;
            <a
              href="https://www.iitism.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
             Indian Institute of Technology(ISM)-
            Dhanbad
            </a>
            &nbsp;in 2018. 
          </p>
          <p className="i-5">
          I’m currently working on research projects funded by the Florida Department of Transportation, National Science 
          Foundation to develop novel machine learning techniques for improving the efficiency of urban road transportation networks. 
          I've been working on developing a machine learning based system that fuses information from multiple sensors 
          to develop real-time algorithms for - signal retiming for intersections and corridors to reflect the changes in 
          network demand patterns, incident detection for for alleviating traffic backups and secondary crashes. 
          </p>
          <p className="i-5">      
          Also, I've been working on a National Institute of Aging funded research to develop secure wearable technology 
          infrastructure for sensor based real-time mobility monitoring, to capture health events in older adults. 
          The goal is to harness sensor, interface capabilities in smart watches to provide a platform for monitoring health 
          interventions. The collected data is used for research on behaviors, health and mobility patterns of the individuals
          </p>
          <p className="i-5">
            Check out my <Link to="/resume">experience</Link> to see what I've
            been up to! Or check out my <Link to="/blog">blog</Link> to see
            what's recently caught my eye!
          </p>
          
        </article>
        
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>currently looking for Internships</b>! If you
                  like what you <Link to="/resume">see</Link>, let's get
                  in&nbsp;
                  <a
                    href="mailto:yashaswikarnati@ufl.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />
          {/* <h5 className="watch-list-title pt-4">
            Here are a couple of books from my reading list:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{bookLinks}</ul>
          <h5 className="watch-list-title pt-4">
            Here are a couple of shows from my watch list:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{showLinks}</ul>
          <h5 className="watch-list-title pt-4">
            Here are a couple of movies from my watch list:
          </h5>
          <p>
            <i>...waaaay too many to list.</i>
          </p> */}
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
      }
    }
  }
`
