import React from "react";
import PlayerForm from "../components/Player/PlayerView";
import Header from "../components/Header/Header";

const PlayerPage = () => {
  return (
    <div className="container_match">
      <Header />
      <PlayerForm />
    </div>
  );
};

export default PlayerPage;