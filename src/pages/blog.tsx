import * as React from 'react'

import styled from 'react-emotion'
import Container from '../components/Container'
import { colors, widths } from '../styles/variables'

import { graphql, Link } from 'gatsby'
import IndexLayout from '../layouts'
import LayoutBlog from '../components/LayoutBlog'
import WhiteContainer from '../components/WhiteContainer'
import { getEmSize } from '../styles/mixins'

const BlogPostsContainer = styled(Container)`
  max-width: ${getEmSize(widths.md)}em;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`

const BlogPost = styled(WhiteContainer)`
  background-color: ${colors.white};
  height: 300px;
  margin: 20px;
  padding: 20px;
  box-shadow: 5px 5px 5px 0px #ccc;
`

interface BlogProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: string
            frontmatter: {
              title: string
              date: Date
              slug: string
              tags: [string]
              excerpt: string
            }
          }
        }
      ]
    }
  }
}

const BlogPostsPage: React.SFC<BlogProps> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  console.log(posts)
  return (
    <IndexLayout>
      <LayoutBlog>
        <BlogPostsContainer>
          {posts.map(({ node: post }) => {
            const { frontmatter } = post
            return (
              <BlogPost key={post.id}>
                <h2>
                  <Link to={frontmatter.slug}>{frontmatter.title}</Link>
                </h2>
                <p>{frontmatter.date}</p>
                <p>{frontmatter.excerpt}</p>
                <ul>
                  {post.frontmatter.tags.map(tag => {
                    return (
                      <li key={tag}>
                        <Link to={`/tags/${tag}`}>{tag}</Link>
                      </li>
                    )
                  })}
                </ul>
              </BlogPost>
            )
          })}
        </BlogPostsContainer>
      </LayoutBlog>
    </IndexLayout>
  )
}

export const query = graphql`
  query IndexPath {
    allMarkdownRemark(filter: { frontmatter: { layout: { eq: "blog" } } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default BlogPostsPage
