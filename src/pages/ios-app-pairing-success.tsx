import * as React from "react";

import Page from "../components/Page";
import { withPrefix } from "gatsby-link";
import styled from 'react-emotion';

import WhiteContainer from "../components/WhiteContainer";
import { colors } from "../styles/variables";
import CenteredImage from "../components/CenteredImage";

const SuccessContainer = styled(WhiteContainer)`
  color: ${colors.white};
  text-align: center;
  height: 600px;
`;

const Title = styled.h1`
  padding-top: 15px;
`;

const Title2 = styled.h2`
  padding-top: 15px;
`;
const page = () => (
  <Page>
    <SuccessContainer>
      <Title>Pairing Success!</Title>
      <Title2>Please enter the address in the Mac App</Title2>
      <CenteredImage src={withPrefix("/images/ready.png")} />
    </SuccessContainer>
  </Page>
);

export default page;
