import styled from 'react-emotion'
import Container from './Container'
import { colors } from '../styles/variables'

const GrayContainer = styled(Container)`
  background-color: ${colors.ui.light};
  min-height: 450px;
  text-align: center;
  padding: 1px;
`

export default GrayContainer
