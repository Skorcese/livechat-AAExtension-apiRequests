import React from "react";
import styled from "styled-components";
import AppContext from "../../context";

const Wrapper = styled.div`
  align-content: center;
  justify-content: center;

  > h3 {
    margin: 1rem 0 0 1rem;
  }
  > h4 {
    margin: 1rem 0 0 2rem;
  }
`;

const Token = styled.h4`
  font-size: 2.5rem;
  color: red;
`;

const Details = ({ accessToken }) => (
  <AppContext.Consumer>
    {(context) => (
      <Wrapper>
        <h1>Details</h1>

        <h3>Access token:</h3>
        <Token>{accessToken}</Token>

        <h3>Request status:</h3>
        <h4>{context.data.status || "..."}</h4>

        <h3>Some other info:</h3>
        <h4>Null...</h4>
      </Wrapper>
    )}
  </AppContext.Consumer>
);

export default Details;
