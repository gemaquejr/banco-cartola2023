import React, { useState, useEffect } from "react";
import { requestData } from '../../services/requests';

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
    <div>
      <table>
        <thead>
          <tr>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.team_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamView;