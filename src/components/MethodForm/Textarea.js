import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  height: 15rem;
  font-size: 1.5rem !important;
`;

const Textarea = ({ name, value, placeholder, onChange }) => (
  <StyledTextarea
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default Textarea;
