'use strict';

const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, layout } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      let slug = permalink;

      if (!slug) {
        slug = `/${relativePath.replace('.md', '')}/`
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug || ''
      });

      // Used to determine a page layout.
      createNodeField({
        node,
        name: 'layout',
        value: layout || ''
      })
    }
  }
};


const createTagPages = (createPage, posts) => {
  const allTagsTemplate = path.resolve(`src/templates/all-tags.js`);

  const postsByTags = {};

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags){
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTags[tag]){
          postsByTags[tag] = []
        }
        postsByTags[tag].push(node);
      });
    }
  });

  const tags = Object.keys(postsByTags);

  createPage({
    path: `/tags`,
    component: allTagsTemplate,
    context: {
      tags: tags.sort()
    }
  });
  const tagPageTemplate = path.resolve(`src/templates/tags.js`);

  tags.forEach(tagName => {
    const posts = postsByTags[tagName];
    createPage({
      path: `/tags/${tagName}`,
      component: tagPageTemplate,
      context: {
        posts,
        tagName
      }
    });
  });

};




const createBlogPostsPages = async ({ graphql, actions }) => {

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000, filter: { frontmatter: { layout: { eq: "blog" } } }) {
        edges {
          node {
            html
            id
            frontmatter {
              date
              slug
              title
              excerpt
              tags
            }
          }
        }
      }
  }`);

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);
    throw new Error(allMarkdown.errors);
  }

  const { createPage } = actions;
  // Create pages for each markdown file.
  const posts = allMarkdown.data.allMarkdownRemark.edges;
  const blogPostTemplate = path.resolve(`./src/templates/blog.tsx`);
  createTagPages(createPage, posts);

  posts.forEach(({ node },index) => {
    console.log("node: ");
    console.log(node);
    console.log(node.id);
    const slug = node.frontmatter.slug;

    console.log(`slug: ${slug}, blogPostTemplate: ${blogPostTemplate}`);

    createPage({
      path: slug,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use path
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        prev: index === 0 ? null : posts[index-1].node,
        next: index === (posts.length - 1) ? null : posts[index + 1].node,
        slug,
      },
    })
  });

};



exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions;

  await createBlogPostsPages({graphql:graphql,actions:actions});

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000, filter: { frontmatter: { layout: { eq: "page" } } }) {
        edges {
          node {
            fields {
              layout
              slug
            }
          }
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);
    throw new Error(allMarkdown.errors)
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, layout } = node.fields;
    console.log(`node, slug: ${slug}, layout: ${layout}`);
    console.log(`createPage: ` , path.resolve(`./src/templates/${layout || 'page'}.tsx`));

    createPage({
      path: slug,
      // This will automatically resolve the template to a corresponding
      // `layout` frontmatter in the Markdown.
      //
      // Feel free to set any `layout` as you'd like in the frontmatter, as
      // long as the corresponding template file exists in src/templates.
      // If no template is set, it will fall back to the default `page`
      // template.
      //
      // Note that the template has to exist first, or else the build will fail.
      component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug
      }
    })
  })
};

