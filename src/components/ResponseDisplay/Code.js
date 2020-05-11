import React from "react";
import styled from "styled-components";
import AppContext from "../../context";

const StyledCode = styled.div`
  padding: 1rem;
  max-height: 80vh;
`;

const StyledPre = styled.pre`
  max-height: inherit;
  overflow: scroll;
  word-break: normal !important;
  word-wrap: normal !important;
  white-space: pre !important;
`;

const Code = () => (
  <AppContext.Consumer>
    {(context) => (
      <StyledCode>
        <StyledPre>
          {JSON.stringify(context.data.data, null, 2) || `{ ... }`}
        </StyledPre>
      </StyledCode>
    )}
  </AppContext.Consumer>
);

export default Code;
