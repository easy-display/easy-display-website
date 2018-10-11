import styled from 'react-emotion';

import Container from "./Container";
import { colors } from "../styles/variables";

const WhiteContainer = styled(Container)`
  background-color: ${colors.white};
  height: 300px;
`;

export default WhiteContainer;
