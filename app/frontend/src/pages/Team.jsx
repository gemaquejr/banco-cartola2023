import React from "react";
import TeamForm from "../components/Team/TeamView";
import Header from "../components/Header/Header";

const TeamPage = () => {
  return (
    <div className="container_match">
      <Header />
      <TeamForm />
    </div>
  );
};

export default TeamPage;