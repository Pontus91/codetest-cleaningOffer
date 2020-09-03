import React from 'react';
import { StyledInput } from './StyledInput';

const Input = ({ onChange, type, name, width, onClick, id }) => {
  return (
    <StyledInput
      onChange={onChange}
      type={type}
      name={name}
      width={width}
      onClick={onClick}
      id={id}
    />
  );
};

export default Input;
