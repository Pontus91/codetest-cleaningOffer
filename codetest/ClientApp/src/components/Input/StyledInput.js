import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const StyledInput = styled.input`
  width: ${(props) => props.width};
  height: 30px;
  border: 1px solid ${COLORS.grey};
  border-radius: 5px;
  margin: 5px 0px 5px 0px;
`;
