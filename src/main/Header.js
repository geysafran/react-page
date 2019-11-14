import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Head>
      <Link to="/">HOME</Link>
      <Link to="/sobre">SOBRE</Link>
      <Link to="/fotos">FOTOS</Link>
      <Link to="/contato">CONTATOS</Link>
      <Link to="/cadastro">CADASTRO</Link>
    </Head>
  );
}

const Head = styled.header`
  background: greenyellow;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
  color: white;
`;
