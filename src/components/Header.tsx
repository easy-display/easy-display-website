import * as React from 'react'
import styled from 'react-emotion'
import { transparentize } from 'polished'
import Link, { withPrefix } from 'gatsby-link'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brandDark};
  color: ${transparentize(0.5, colors.white)};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 400;
  margin-right: 50px;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const HeaderIcon = styled.img`
  width: 70px;
  height: 100%;
  display: block;
  padding: 10px;
`

const HomepageNavLink = styled(HomepageLink)`
  font-size: 1rem;
  font-weight: 300;
  margin-right: 20px;
`

interface HeaderProps {
  title: string
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HeaderIcon src={withPrefix('/images/icon.svg')} />
      <HomepageLink to="/">{title}</HomepageLink>
      <HomepageNavLink to="/faqs">FAQs</HomepageNavLink>
      <HomepageNavLink to="/blog">Blog</HomepageNavLink>
      <HomepageNavLink to="/download">Download</HomepageNavLink>
      <HomepageNavLink to="/pricing">Pricing</HomepageNavLink>
      <HomepageNavLink to="/about">About</HomepageNavLink>
    </HeaderInner>
  </StyledHeader>
)

export default Header
