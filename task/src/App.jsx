import React from "react";
import NavBar from "./components/navbar/NavBar";
import OpenChallenge from "./components/frame/OpenChallenge";
import BattleAmount from "./components/amount/BattleAmount";

const App = () => {
  return (
    <>
      <NavBar />
      <OpenChallenge />
      <BattleAmount />
    </>
  );
};

export default App;
