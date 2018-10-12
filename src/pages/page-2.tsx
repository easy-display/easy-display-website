import * as React from 'react'
import { Link } from 'gatsby'

import LayoutPage from '../components/LayoutPage.tsx'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const PageTwo = () => (
  <IndexLayout>
    <LayoutPage>
      <Container>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <ul>
          <li>
            <Link to="/a-markdown-page/">Show me some Markdown!</Link>
          </li>
          <li>
            <Link to="/">Take me back home.</Link>
          </li>
        </ul>
      </Container>
    </LayoutPage>
  </IndexLayout>
)

export default PageTwo
