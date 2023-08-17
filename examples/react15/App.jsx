import React, { version as reactVersion } from 'react';
import styled, { StyleSheetManager } from 'styled-components';


const StyledDynamicDiv1 = styled.div`
  position: absolute;
  top: 100px;
  height: 100px;
  width: 100px;
  height: 100px;
  background-color: red;
`;

const StyledDynamicDiv2 = styled.div`
  position: absolute;
  top: 220px;
  height: 100px;
  width: 100px;
  height: 100px;
  background-color: green;
`;

export default function App() {
  const [show, setShow] = React.useState(false);
  return (
      <div>
        <h1>react16-2</h1>
        <button onClick={() => setShow(true)}>click me</button>
        <StyledDynamicDiv1>红色</StyledDynamicDiv1>
        { show && <StyledDynamicDiv2>绿色</StyledDynamicDiv2> }
      </div>
  );
}