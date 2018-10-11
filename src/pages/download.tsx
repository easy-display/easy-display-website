import * as React from 'react';

import Page from '../components/Page';
import Container from '../components/Container';
import DownloadLink from '../components/DownloadLink';
import WhiteContainer from '../components/WhiteContainer';
import styled from 'styled-components';
import IndexLayout from '../layouts';

const HorizontallyCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const VerticallyCentered = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 240px;
  font-size: 1.5rem;
`;

export default () => (
  <IndexLayout>
    <Page>
      <Container>
        <WhiteContainer>
          <VerticallyCentered>
            <HorizontallyCentered>
              <DownloadLink href="https://downloads.easydisplay.info/downloads/EasyDisplay-0.1.2.dmg">Download the MacOS App</DownloadLink>
            </HorizontallyCentered>
          </VerticallyCentered>
        </WhiteContainer>
      </Container>
    </Page>
  </IndexLayout>
);
