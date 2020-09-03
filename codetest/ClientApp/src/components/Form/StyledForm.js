import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

export const FormContainer = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLORS.grey};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background: ${COLORS.white};
  @media (min-width: 1024px) and (max-width: 1025px) {
    width: 100%;
    height: 500px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 500px;
  }
  @media (max-width: 576px) {
    width: 100%;
    height: 500px;
  }
`;

export const FormHeader = styled.h1`
  font-family: ${FONTS.Montserrat};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const FormLabel = styled.label`
  font-family: ${FONTS.Lato};
  margin: 15px;
  width: 70%;
  font-weight: bold;
  font-size: 12px;
`;

export const FormButton = styled.button`
  width: 70%;
  height: 45px;
  border: none;
  margin-top: 15px;
  border-radius: 5px;
  font-family: ${FONTS.Montserrat};
  background: ${({ disabled }) => (disabled ? COLORS.grey : COLORS.green)};
  text-transform: uppercase;
  font-size: 12px;
  color: ${COLORS.white};
  &:hover {
    font-weight: bold;
    background: ${({ disabled }) =>
      disabled ? COLORS.grey : COLORS.darkGreen};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;

export const FormSelect = styled.select`
  width: 70%;
  height: 30px;
  border: 1px solid ${COLORS.grey};
  border-radius: 5px;
  font-size: 12px;
`;

export const FormOption = styled.option`
  font-size: 12px;
`;

export const AdditionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const FormPriceText = styled.div`
  font-size: 12px;
  margin: 10px;
  width: 88px;
`;

export const FormSpan = styled.span`
  font-size: 12px;
  margin: 10px;
  width: 250px;
`;
