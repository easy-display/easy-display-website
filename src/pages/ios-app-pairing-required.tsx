import * as React from 'react'

import LayoutPage from '../components/LayoutPage'
import WhiteContainer from '../components/WhiteContainer'
import styled from 'react-emotion'
import { colors } from '../styles/variables'
import { withPrefix } from 'gatsby-link'
import CenteredImage from '../components/CenteredImage'

const QRContainer = styled(WhiteContainer)`
  color: ${colors.white};
  text-align: center;
  height: 600px;
`

const CenteredImage1 = styled(CenteredImage)`
  z-index: 1;
  margin-top: 50px;
`

const CenteredImage2 = styled(CenteredImage)`
  z-index: 2;
  margin-top: 30px;
`

const Title = styled.h2`
  div {
    padding: 15px;
  }
`

const TitleLink = styled.h2`
  color: ${colors.brand};
  display: inline;
`

export default () => (
  <LayoutPage>
    <QRContainer>
      <Title>
        <div>
          Get the MacOS app from:
          <TitleLink>www.easydisplay.info/download</TitleLink>
        </div>
        <div>run the app and scan QR code to pair</div>
      </Title>
      <CenteredImage1 src={withPrefix('/images/awaiting.png')} />
      <CenteredImage2 src={withPrefix('/images/qr.png')} />
    </QRContainer>
  </LayoutPage>
)
