import React, { Component } from "react";
import styled from "styled-components";
import Bar from "./Bar";
import Textarea from "./Textarea";
import Button from "./Button";
import config from "../../utlis/config";
import AppContext from "../../context";

const StyledForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  > *:not(button) {
    align-items: center;
    border: none;
    border-radius: 0.7rem;
    width: 100%;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    padding-left: 1rem;
  }
`;

const headers = (token) => `{
    "Authorization": "Bearer ${token}",
    "Content-Type": "application/json"
}
`;

const data = `{

}`;

class Form extends Component {
  state = {
    url: config.server_url,
    headers: headers(this.props.accessToken),
    data: data,
    accessToken: this.props.accessToken,
    response: "",
  };

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    const { url, headers, data } = this.state;
    const { handleInputChange } = this;

    return (
      <AppContext.Consumer>
        {(context) => (
          <StyledForm onSubmit={(e) => context.getData(e, this.state)}>
            <Bar
              name="url"
              value={url}
              placeholder="API URL..."
              onChange={handleInputChange}
            />
            <Textarea
              name="headers"
              value={headers}
              placeholder="Headers..."
              onChange={handleInputChange}
            />
            <Textarea
              name="data"
              value={data}
              placeholder="Data..."
              onChange={handleInputChange}
            />
            <Button text="Send" />
          </StyledForm>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
