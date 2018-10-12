import * as React from 'react'
import Helmet from 'react-helmet'

import Link from 'gatsby-link'
import WhiteContainer from '../components/WhiteContainer'

import { graphql } from 'gatsby'
import IndexLayout from '../layouts'
import LayoutBlog from '../components/LayoutBlog'
import styled from 'react-emotion'
import { colors, widths } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

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
        author: string
        author_image: string
      }
    }
  }
}

const AuthorImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  display: inline;
  float; left;
  position: relative;
  margin-right: 10px;
`
const Author = styled.div`
  padding-bottom: 5px;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 30px;
  margin-bottom: 30px;
`

const AuthorName = styled.div`
  display: flex;
  flex-direction: column;
  > em {
    text-decoration: underline;
    color: ${colors.brand};
    font-size: 16px;
  }
  color: ${colors.gray.calm};
  font-size: 12px;
`
const LayoutBlogPost = styled(LayoutBlog)`
  background-color: white;
  width: 100%;
`

const BlogPost = styled.div`
  display: flex;
  justify-content: center;
`
const BlogBody = styled.div`
  max-width: ${getEmSize(widths.md)}em;
`

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
    <IndexLayout>
      <Helmet title={`${title} - My Blog`} />
      <LayoutBlogPost>
        <BlogPost>
          <BlogBody>
            <Author>
              <AuthorImg src={frontmatter.author_image} />
              <AuthorName>
                <em>{frontmatter.author}</em>
                <p>on {frontmatter.date}</p>
              </AuthorName>
            </Author>
            <h1>{title}</h1>
            <h3>{date}</h3>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            {prev && <Link to={prev.frontmatter.slug}>Previous: {prev.frontmatter.title}</Link>}
            {next && <Link to={next.frontmatter.slug}>Next: {next.frontmatter.title}</Link>}
          </BlogBody>
        </BlogPost>
      </LayoutBlogPost>
    </IndexLayout>
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
        author
        author_image
      }
    }
  }
`

export default BlogTemplate
