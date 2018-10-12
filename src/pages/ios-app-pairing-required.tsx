import * as React from "react";

import LayoutPage from "../components/LayoutPage.tsx";
import WhiteContainer from "../components/WhiteContainer";
import styled from 'react-emotion';
import { colors } from "../styles/variables";
import { withPrefix } from "gatsby-link";
import CenteredImage from "../components/CenteredImage";

const QRContainer = styled(WhiteContainer)`
  color: ${colors.white};
  text-align: center;
  height: 600px;
`;


const CenteredImage1 = styled(CenteredImage)`
  z-index: 1;
`;

const CenteredImage2 = styled(CenteredImage)`
  z-index: 2;
  top: 100px;
`;

const Title = styled.h1`
  padding-top: 15px;
`;

export default () => (
  <LayoutPage>
    <QRContainer>
      <Title>Please open your MacOS application and scan this QR code using your iPad</Title>
      <CenteredImage1 src={withPrefix("/images/awaiting.png")} />
      <CenteredImage2 src={withPrefix("/images/qr.png")} />
    </QRContainer>
  </LayoutPage>
);
