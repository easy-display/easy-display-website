import * as React from 'react'
import { graphql } from 'gatsby'

import LayoutPage from '../components/LayoutPage'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import WhiteContainer from '../components/WhiteContainer'
import styled from 'react-emotion'

const WhiteContentContainer = styled(WhiteContainer)`
  margin: 10px;
  height: 300px;
  padding-top: 20px;
  padding-left: 20px;
`

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => (
  <IndexLayout>
    <LayoutPage>
      <Container>
        <WhiteContentContainer>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </WhiteContentContainer>
      </Container>
    </LayoutPage>
  </IndexLayout>
)

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`
