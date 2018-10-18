import * as React from 'react'

import styled from 'react-emotion'
import Container from '../components/Container'
import { colors, widths } from '../styles/variables'

import { graphql, Link } from 'gatsby'
import IndexLayout from '../layouts'
import LayoutBlog from '../components/LayoutBlog'
import WhiteContainer from '../components/WhiteContainer'
import { getEmSize } from '../styles/mixins'
import Helmet from 'react-helmet'

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
  > h2 {
    font-size: 26px;
    margin-bottom: 20px;
  }
`

const Author = styled.p`
  color: ${colors.gray.calm};
  > em {
    color: ${colors.brand};
  }
  padding-bottom: 5px;
  display: inline;
  position: absolute;
  bottom: 0;
`

const Tags = styled.ul`
  list-style-type: none;
  padding-bottom: 5px;
  display: inline;
  position: absolute;
  right: 0;
  bottom: 40px;
`
const Tag = styled.li`
  display: inline-block;
  padding-right: 10px;
  font-size: 12px;
  font-weight: bold;
  font-style: oblique;
  color: ${colors.lilac};
  &:after {
    content: ', ';
  }
  &:last-child:after {
    content: '';
  }
  > a {
    color: ${colors.lilac};
  }
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
  // console.log(posts)
  return (
    <IndexLayout>
      <Helmet title="Blog" />
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
                <Author>
                  <Img src={frontmatter.author_image} />
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { layout: { eq: "blog" } } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
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
