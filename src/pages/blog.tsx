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

const Author = styled.p`
  color: ${colors.gray.calm};
  > em {
    color: ${colors.brand};
  }
  padding-bottom: 5px;
  display: inline;
`

const Tags = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
const Tag = styled.li`
  display: inline-block;
  padding-right: 10px;
  font-weight: bold;
  font-style: oblique;
`

const Img = styled.img`
  margin-top; 10px;
  height: 25px;
  width: 25px;
  top: 5px;
  border-radius: 25px;
  margin-right: 5px;
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
              author: string
              author_image: string
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
                <p>{frontmatter.excerpt}</p>
                <Img src={frontmatter.author_image} />
                <Author>
                  Written by <em>{frontmatter.author}</em> on {frontmatter.date}
                </Author>
                <Tags>
                  {post.frontmatter.tags.map(tag => {
                    return (
                      <Tag key={tag}>
                        <Link to={`/tags/${tag}`}>{tag}</Link>
                      </Tag>
                    )
                  })}
                </Tags>
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
            author
            author_image
          }
        }
      }
    }
  }
`

export default BlogPostsPage
