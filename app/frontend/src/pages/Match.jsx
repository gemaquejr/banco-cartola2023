import React from "react";
import MatchForm from "../components/Match/MatchView";
import Header from "../components/Header/Header";

const MatchPage = () => {
  return (
    <div className="container_match">
      <Header />
      <MatchForm />
    </div>
  );
};

export default MatchPage;