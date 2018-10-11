import * as React from 'react';

import styled from 'react-emotion';
import Container from '../components/Container';
import { colors } from '../styles/variables';

import { graphql, Link } from 'gatsby';

const BlogContainer = styled(Container)`
  background-color: ${colors.white};
  width: 100%;
`;

interface BlogProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: string;
            frontmatter: {
              title: string;
              date: Date;
              slug: string;
              tags: [string];
              excerpt: string;
            };
          };
        }
      ];
    };
  };
}

const BlogPage: React.SFC<BlogProps> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  console.log(posts);
  return (
    <BlogContainer>
      {posts.map(({ node: post }) => {
        const { frontmatter } = post;
        return (
          <h2 key={post.id}>
            <Link to={frontmatter.slug}>{frontmatter.title}</Link>
            <p>{frontmatter.date}</p>
            <p>{frontmatter.excerpt}</p>
            <ul>
              {post.frontmatter.tags.map(tag => {
                return (
                  <li key={tag}>
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </li>
                );
              })}
            </ul>
          </h2>
        );
      })}
    </BlogContainer>
  );
};

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
`;

export default BlogPage;
