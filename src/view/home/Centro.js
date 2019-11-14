import React from "react";
import styled from "styled-components";

import docin from "../../img/docin.jpg";
import wwdw from "../../img/wwdw.jpg";
import lindinha from "../../img/lindinha.jpg";
import lindu from "../../img/lindu.jpg";
import ssss from "../../img/ssss.png";

export default function Centro() {
  return (
    <Aside>
      <Section>
        <img src={docin} alt="logo" width="200" height="200" />
      </Section>
      <Section>
        <img src={lindinha} alt="logo" width="200" height="200" />
      </Section>
      <Section>
        <img src={wwdw} alt="logo" width="200" height="200" />
      </Section>
      <Section>
        <img src={lindu} alt="logo" width="200" height="200" />
      </Section>
      <Section>
        <img src={ssss} alt="logo" width="200" height="200" />
      </Section>
      <Section>
        <img src={lindinha} alt="logo" width="200" height="200" />
      </Section>
    </Aside>
  );
}

const Aside = styled.aside`
  background: #6606;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  margin: 10px;
  padding: 10px;
  width: 200px;
  height: 200px;
  border: solid 2px #00f;
`;
