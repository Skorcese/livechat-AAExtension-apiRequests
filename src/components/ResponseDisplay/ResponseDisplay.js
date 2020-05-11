import React, { Component } from "react";
import styled from "styled-components";
import Code from "./Code";

const Wrapper = styled.div`
  grid-column: 2 / span 2;
  grid-row: 1 / span 3;
`;

class ResponseDisplay extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Response contents</h1>
        <Code />
      </Wrapper>
    );
  }
}

export default ResponseDisplay;
