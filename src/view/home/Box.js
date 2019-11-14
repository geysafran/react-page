import React from "react";
import styled from "styled-components";

import docin from '../../img/docin.jpg'

export default function Box() {
  return (
    <Section>
      <img src={docin} alt='docinho' width='200' height='200' />

    </Section>
  );
}

const Section = styled.section`
  width: 200px;
  height: 200px;
  margin: 20px;
  color: #fff;
  background: #000;
`;
