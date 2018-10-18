import * as React from 'react'

import LayoutPage from '../components/LayoutPage'
import Container from '../components/Container'
import styled from 'react-emotion'
import { getEmSize } from '../styles/mixins'
import { colors, widths } from '../styles/variables'
import GrayContainer from '../components/GrayContainer'
import IndexLayout from '../layouts'
import { graphql } from 'gatsby'

interface FaqsProps {
  data: {
    allFaqYaml: {
      edges: [
        {
          node: {
            question: string
            answer: string
          }
        }
      ]
    }
  }
}



const Answer = styled.div`
  text-align: left;
  color: ${colors.gray.copy};
  &:before {
    content: 'A: ';
    color: ${colors.lilac};
  }
`
const Question = styled.div`
  text-align: left;
  color: ${colors.gray.copy};
  &:before {
    content: 'Q: ';
    color: ${colors.lilac};
  }
`
const FaqContainer = styled.div`
  padding-top: 20px;
  position: relative;
  max-width: ${getEmSize(widths.lg)}em;
  border-radius: 5px;
  margin: 10px;
  height: 100px;
  font-size: 18px;
  &:after {
    content: ' ';
    display: block;
    position: absolute;
    height: 1px;
    background: ${colors.gray.calm};
    width: 80%;
    left: 10%;
    bottom: 0px;
  }
  &:last-child:after {
    display: none;
  }
`
const FaqH1 = styled.h1`
  color: ${colors.white};
`


const Faqs: React.SFC<FaqsProps> = ({ data }) => {
  return (
    <IndexLayout>
      <LayoutPage>
        <Container>
          <FaqH1>Frequently Answered Questions</FaqH1>
          <GrayContainer>
            {data.allFaqYaml.edges.map((entry, index) => {
              return (
                <FaqContainer key={index}>
                  <Question>{entry.node.question}</Question>
                  <Answer dangerouslySetInnerHTML={{ __html: entry.node.answer }} />
                </FaqContainer>
              )
            })}
          </GrayContainer>
        </Container>
      </LayoutPage>
    </IndexLayout>
  )
}

export const query = graphql`
  query FaqsQuery {
    allFaqYaml {
      edges {
        node {
          question
          answer
        }
      }
    }
  }
`

export default Faqs
