import React from 'react';
import Link from 'gatsby-link'

const Tags = ({pageContext}) => {
  const { posts, tagName } = pageContext;
  if (posts) {
    return (
      <div>
        <span>
          Posts about {tagName}
        </span>
        <ul>
          {posts.map(post => {
            return (
              <li>
                <Link to={post.frontmatter.slug}>
                  {post.frontmatter.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
};

export default Tags;
