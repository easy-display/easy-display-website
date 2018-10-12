import * as React from 'react'
import { Link } from 'gatsby'

import LayoutPage from '../components/LayoutPage.tsx'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const NotFoundPage = () => (
  <IndexLayout>
    <LayoutPage>
      <Container>
        <h1>404: Page not found.</h1>
        <p>
          You've hit the void. <Link to="/">Go back.</Link>
        </p>
      </Container>
    </LayoutPage>
  </IndexLayout>
)

export default NotFoundPage
