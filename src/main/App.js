import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

export default function App() {
  return (
    <BrowserRouter>
      <Main>
        <Header />
        <Routes />
        <Footer />
      </Main>
    </BrowserRouter>
  );
}

const Main = styled.main`
  width: 800px;
  height: 500px;
  text-align: center;
  font-family: sans-serif;
  margin: 0 auto;
  background: palegreen;
`;
