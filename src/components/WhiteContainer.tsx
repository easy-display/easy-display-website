import styled from "styled-components";
import Container from "./Container";
import { colors } from "../styles/variables";

const WhiteContainer = styled(Container)`
  background-color: ${colors.white};
  min-height: 300px;
  text-align: center;
`;

export default WhiteContainer;
