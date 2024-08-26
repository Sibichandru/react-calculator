import { useState } from 'react'


import Wrapper from "./components/Wrapper";
import { Display } from "./components/Display";
import { History } from "./components/History";
import { ButtonBox } from "./components/ButtonBox";
import { Button } from "./components/Button";
import { HistoryContext } from "./context/HistoryContext";
function App() {
  const buttons = [
    ["C", "+/-", "%", "/"],
    [1, 2, 3, "x"],
    [4, 5, 6, "+"],
    [7, 8, 9, "-"],
    [".", 0, "="],
  ];
const historyMode = false
// const toggleHistory = setHistoryMode(!historyMode)
  return (
    <div>
      <HistoryContext.Provider value={historyMode}>
        <Wrapper>
          <History />
          <Display />
          <ButtonBox>
            {buttons.flat().map((button, index) => {
              return <Button value={button} key={index} />;
            })}
          </ButtonBox>
        </Wrapper>
      </HistoryContext.Provider>
    </div>
  );
}

export default App;
