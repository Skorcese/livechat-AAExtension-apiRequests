import React from "react";
import styled from "styled-components";

const StyledBar = styled.input`
  height: 3rem;
  font-size: 1.4rem !important;
  font-weight: 400;
`;

const Bar = ({ name, value, onChange }) => (
  <StyledBar type="text" name={name} value={value} onChange={onChange} />
);

export default Bar;
