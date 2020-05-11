import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  border: none;
  background-color: white;
  color: black;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  align-content: center;
  border-radius: 1rem;
  transition: all 0.1s ease-in-out;
  width: 10rem;
  height: 3rem;

  :hover {
    cursor: pointer;
    background-color: #222;
    border: 1px solid white;
    color: white;
  }

  :active {
    background-color: white;
    color: black;
  }
`;

const Button = ({ text }) => <StyledButton>{text}</StyledButton>;

export default Button;
