import styled from "styled-components";
import Container from "./Container";
import { colors } from "../styles/variables";

const VioletContainer = styled(Container)`
  background-color: ${colors.brand};
  height: 300px;
`;

export default VioletContainer;
