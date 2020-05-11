import React, { Component } from "react";
import styled from "styled-components";
import AppContext from "./context";
import MethodForm from "./components/MethodForm/MethodForm";
import ResponseDisplay from "./components/ResponseDisplay/ResponseDisplay";
import Details from "./components/Details/Details";
import createApiRequest from "./utlis/api";

const Grid = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #222;
  width: 90vw;
  height: 90vh;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 0.4rem;
  padding: 1rem;

  > div {
    background-color: rgb(58, 52, 60);
    border-radius: inherit;
    margin: 1rem;
    padding: 1rem;
  }
`;

class Root extends Component {
  state = {
    response: "",
  };

  getData = async (e, { url, headers, data, accessToken }) => {
    e.preventDefault();

    try {
      const response = await createApiRequest(
        "post",
        url,
        accessToken,
        headers,
        data
      );

      this.setState({
        response: response,
      });
    } catch (err) {
      alert(err);
    }
  };

  render() {
    const { accessToken } = this.props;
    const contextElements = {
      getData: this.getData,
      data: this.state.response,
    };

    return (
      <AppContext.Provider value={contextElements}>
        <Grid>
          <Details accessToken={accessToken} />
          <MethodForm accessToken={accessToken} />
          <ResponseDisplay />
        </Grid>
      </AppContext.Provider>
    );
  }
}

export default Root;
