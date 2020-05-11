import React from "react";
import styled from "styled-components";
import Form from "./Form";

const Wrapper = styled.div`
  grid-column: 1;
  grid-row: 2 / span 2;
`;

const MethodForm = ({ accessToken }) => (
  <Wrapper>
    <h1>Method form</h1>
    <h4>AgentChatApi POST Methods</h4>
    <Form accessToken={accessToken} />
  </Wrapper>
);

export default MethodForm;
