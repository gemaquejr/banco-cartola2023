import React, { useState, useEffect } from "react";
import { requestData } from '../../services/requests';

import './TeamView.css';

const TeamView = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await requestData("/teams");
      const { data } = response;
      setTeams(data);
    } catch (error) {
      console.error("Erro ao buscar equipes:", error);
    }
  };

  return (
    <div className="table-container">
      <h2 className="heading">Times</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Logo</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.team_name}</td>
              <td>
                {team.logo_name && (
                  <img
                    src={require(`../../assets/${team.logo_name}`)}
                    alt={`Logo do ${team.team_name}`}
                    className="team-logo"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamView;