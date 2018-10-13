import * as React from 'react'

import LayoutPage from '../components/LayoutPage'
import Container from '../components/Container'
import DownloadLink from '../components/DownloadLink'
import WhiteContainer from '../components/WhiteContainer'
import styled from 'react-emotion'
import IndexLayout from '../layouts'
import { graphql, StaticQuery } from 'gatsby'

const HorizontallyCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const VerticallyCentered = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 240px;
  font-size: 1.5rem;
`

interface DownloadPageProps {
  children: () => any
  site: {
    siteMetadata: {
      downloadLink: string
      macosLatestVersiion: string
    }
  }
}

const DownloadPage: React.SFC<DownloadPageProps> = () => (
  <StaticQuery
    query={graphql`
      query DownloadPageQuery {
        site {
          siteMetadata {
            downloadLink
            macosLatestVersiion
          }
        }
      }
    `}
    render={(props: DownloadPageProps) => (
      <IndexLayout>
        <LayoutPage>
          <Container>
            <WhiteContainer>
              <VerticallyCentered>
                <HorizontallyCentered>
                  <DownloadLink href={props.site.siteMetadata.downloadLink}>
                    Download the latest MacOS App, v: {props.site.siteMetadata.macosLatestVersiion}
                  </DownloadLink>
                </HorizontallyCentered>
              </VerticallyCentered>
            </WhiteContainer>
          </Container>
        </LayoutPage>
      </IndexLayout>
    )}
  />
)

export default DownloadPage
