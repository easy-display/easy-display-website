import * as React from 'react';

import LayoutPage from '../components/LayoutPage.tsx';
import Container from '../components/Container';
import styled from 'react-emotion';
import { getEmSize } from '../styles/mixins';
import { colors, widths } from '../styles/variables';
import GrayContainer from '../components/GrayContainer';
import IndexLayout from '../layouts';
import { graphql } from 'gatsby';

interface FaqsProps {
  data: {
    allFaqYaml: {
      edges: [
        {
          node: {
            question: string;
            answer: string;
          };
        }
      ];
    };
  };
}
const Answer = styled.div`
  text-align: left;
  color: ${colors.gray.dark};
`;
const Question = styled.div`
  text-align: left;
  color: ${colors.gray.dark};
`;
const FaqContainer = styled.div`
  position: relative;
  max-width: ${getEmSize(widths.lg)}em;
  border-style: solid;
  border-width: 1px;
  border-color: ${colors.lilac}
  border-radius: 5px;
  margin: 10px;
  height: 70px;
  font-size: 18px;
`;

const Faqs: React.SFC<FaqsProps> = ({ data }) => {
  return (
    <IndexLayout>
      <LayoutPage>
        <Container>
          <h1>Frequently Answered Questions</h1>
          <GrayContainer>
            {data.allFaqYaml.edges.map((entry, index) => {
              return (
                <FaqContainer key={index}>
                  <Question>{entry.node.question}</Question>
                  <Answer>{entry.node.answer}</Answer>
                </FaqContainer>
              );
            })}
          </GrayContainer>
        </Container>
      </LayoutPage>
    </IndexLayout>
  );
};

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
`;

export default Faqs;
