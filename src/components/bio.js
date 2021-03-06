import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: 'flex',
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: '100%',
              }}
            />
            <p>
              Written by <strong>{author}</strong>, who is currently exploring
              fintech at <a href={`https://www.getpinwheel.com`}>Pinwheel</a>.
              Here's a{' '}
              <a href={`https://twitter.com/${social.twitter}`}>
                Twitter handle
              </a>
              , a <a href={`https://github.com/${social.github}`}>GitHub</a>,
              some{' '}
              <a href={`https://linkedin.com/in/${social.linkedin}`}>
                LinkedIn
              </a>
              , ol'{' '}
              <a href={`https://facebook.com/${social.facebook}`}>Facebook</a>,
              or a hip{' '}
              <a href={`https://instagram.com/${social.instagram}`}>
                Instagram
              </a>{' '}
              if you're interested.
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          facebook
          github
          instagram
          linkedin
          twitter
        }
      }
    }
  }
`

export default Bio
