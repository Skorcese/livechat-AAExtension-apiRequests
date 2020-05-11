import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";

import { accountsSdk } from "@livechat/accounts-sdk";
import LiveChat from "@livechat/agent-app-widget-sdk";
import config from "./utlis/config";
import Root from "./Root";

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    display: none;
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%
  }

  body {
    background-color: white;
    color: white;
    font-family: sans-serif;
    font-size: 1.6rem;
  }
`;

const Loading = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  color: #777;
`;

const useLiveChat = ({ client_id, account_url }) => {
  const [accessToken, setAccessToken] = useState(null);
  const redirect_uri = `${account_url}?response_type=token&client_id=${client_id}&redirect_uri=`;
  LiveChat.init({ authorize: false });

  useEffect(() => {
    accountsSdk.init({
      client_id,
      onIdentityFetched: (error, data) => {
        if (data && data.access_token) {
          setAccessToken(data.access_token);
        } else {
          window.location.href = redirect_uri + window.location.href;
        }
      },
    });
  });

  return [accessToken];
};

const AuthRoot = () => {
  const [accessToken] = useLiveChat(config);

  return accessToken ? (
    <>
      <GlobalStyle />
      <Root accessToken={accessToken} />
    </>
  ) : (
    <>
      <GlobalStyle />
      <Loading>Loading...</Loading>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AuthRoot />
  </React.StrictMode>,
  document.getElementById("root")
);
