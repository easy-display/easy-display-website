import * as React from 'react'
import Helmet from 'react-helmet'

import Link from 'gatsby-link'
import WhiteContainer from '../components/WhiteContainer'

import { graphql } from 'gatsby'

interface BlogTemplateProps {
  pathContext: {
    prev: any
    next: any
  }
  data: {
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
        slug: string
        date: Date
        tags: ['string']
        excerpt: ['string']
      }
    }
  }
}

const BlogTemplate: React.SFC<BlogTemplateProps> = ({ data, pathContext }) => {
  console.log('pathContext:')
  console.log(pathContext)
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter
  const { prev, next } = pathContext
  console.log('prev', prev)
  console.log('next', next)
  return (
    <WhiteContainer>
      <Helmet title={`${title} - My Blog`} />
      <div>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {prev && <Link to={prev.frontmatter.slug}>Previous: {prev.frontmatter.title}</Link>}
        {next && <Link to={next.frontmatter.slug}>Next: {next.frontmatter.title}</Link>}
      </div>
    </WhiteContainer>
  )
}

export const query = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        date(formatString: "MMMM, DD, YYYY")
        tags
        excerpt
      }
    }
  }
`

export default BlogTemplate
