import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Container from '../components/Container'
import IndexLayout from '../layouts'

import VioletContainer from '../components/VioletContainer'
import DownloadLink from '../components/DownloadLink'
import { withPrefix } from 'gatsby-link'

import styled from 'react-emotion'
import { colors } from '../styles/variables'
import WhiteContainer from '../components/WhiteContainer'
import LayoutPage from '../components/LayoutPage'

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-top: -100px;
  position: absolute;
  left: 50%;
  margin-left: -100px;
`

const FeaturesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 600px;
`

const Feature = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  width: 30%;
  height: 150px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: ${colors.gray.calm};
  > h5 {
    color: ${colors.gray.calm};
  }
`

const HorizontalContainer = styled(WhiteContainer)`
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 0;
  height: 100px;
  > a {
    margin: 10px;
  }
`

const BottomContainer = styled(Container)`
  text-align: center;
  height: 25px;
  color: ${colors.white};
  background: ${colors.lilac};
  > a {
    color: ${colors.white};
  }
`

const GithubImage = styled.img`
  width: 50px;
`

const AppStoreImage = styled.img`
  width: 150px;
`

const Right = styled.div`
  float: right;
  font-size: 10px;
  color: ${colors.white};
`

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: top;
  flex-direction: column;
  height: 100%;
`

const WhiteHeader = styled.p`
  color: ${colors.white};
  text-align: center;
  font-size: 5rem !important;
`

const TopVioletContainer = styled(VioletContainer)`
  height: 300px;
`
const VideoContainer = styled.div`
  align: center;
  text-align: center;
  height: 450px;
`

const Video = styled.div``

/*
const NavyHeader = styled.p`
  color: ${colors.brand};
  text-align: center;
  font-size: 5rem !important;
`;*/

const WhiteParagraph = styled.p`
  font-size: x-large;
  color: ${colors.white};
  text-align: center;
`

interface IndexPageProps {
  children: () => any
  site: {
    siteMetadata: {
      downloadLink: string
      itunesLink: string
      twitter: string
      github: string
    }
  }
}

const IndexPage: React.SFC<IndexPageProps> = () => (
  <StaticQuery
    query={graphql`
      query IndexPageQuery {
        site {
          siteMetadata {
            downloadLink
            itunesLink
            twitter
            github
          }
        }
      }
    `}
    render={(props: IndexPageProps) => (
      <IndexLayout>
        <LayoutPage>
          <TopVioletContainer>
            <CenteredContainer>
              <WhiteHeader>EasyDisplay</WhiteHeader>
              <WhiteParagraph>Don't throw away your good old iPad</WhiteParagraph>
              <WhiteParagraph>Use it Easy Secondary Support Display Without Husstle</WhiteParagraph>
            </CenteredContainer>
          </TopVioletContainer>

          <VideoContainer>
            <Video>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/v-krMNrh1ds"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Video>
          </VideoContainer>

          <WhiteContainer>
            <Logo src={withPrefix('/images/icon.svg')} />
            <FeaturesContainer>
              <Feature>
                <h5>Support display</h5>
                Use the iPhone / iPad on your desk as a secondary display board, without removing your hands of your keyboard, or stretching
                your arm.
              </Feature>
              <Feature>
                <h5>Browser</h5> a remote controlled-browser from your desktop app, the remote-control is a Mac app.
              </Feature>
              <Feature>
                <h5>Open Source</h5>
                The goal of the project is to write some good quality code and share it.
              </Feature>
              <Feature>
                <h5>Privacy</h5>
                All users on EasyDisplay are anonymous users. EasyDisplay has no users management of any kind.
              </Feature>
              <Feature>
                <h5>iOS client</h5>
                the iPhone or iPad is ready, you can download it right now.
              </Feature>
              <Feature>
                <h5>Android</h5>
                Android client coming soon...
              </Feature>
            </FeaturesContainer>
          </WhiteContainer>
          <HorizontalContainer>
            <DownloadLink href={props.site.siteMetadata.itunesLink}>
              <AppStoreImage src={withPrefix('/images/Download_on_the_App_Store_Badge.svg')} />
            </DownloadLink>
            <DownloadLink href={props.site.siteMetadata.downloadLink}>Download Mac Client</DownloadLink>
            <a href={props.site.siteMetadata.github}>
              <GithubImage src={withPrefix('/images/Octicons-mark-github.svg')} />
            </a>
          </HorizontalContainer>
          <BottomContainer>
            <a href={`https://twitter.com/${props.site.siteMetadata.twitter}`}>made by: @{props.site.siteMetadata.twitter}</a>
          </BottomContainer>
          <Right>{require('../../package.json').version}</Right>
        </LayoutPage>
      </IndexLayout>
    )}
  />
)

export default IndexPage
