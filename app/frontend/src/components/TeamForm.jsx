import React, { useState, useEffect } from "react";
import { requestData, api } from "./services/requests";

const TeamForm = () => {
  const [team, setTeam] = useState({ team_name: "", team_logo: "" });
  const [teams, setTeams] = useState([]);
  const [editing, setEditing] = useState(false);
  const [teamId, setTeamId] = useState(null);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await requestData("/api/teams");
      setTeams(response);
    } catch (error) {
      console.error("Erro ao buscar equipes:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeam({ ...team, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await api.put(`/api/teams/${teamId}`, team);
      } else {
        await api.post("/api/teams", team);
      }
      fetchTeams();
      setTeam({ team_name: "", team_logo: "" });
      setEditing(false);
      setTeamId(null);
    } catch (error) {
      console.error("Erro ao salvar equipe:", error);
    }
  };

  const handleEdit = (team) => {
    setTeamId(team.id);
    setEditing(true);
    setTeam({ team_name: team.team_name, team_logo: team.team_logo });
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/teams/${id}`);
      fetchTeams();
    } catch (error) {
      console.error("Erro ao excluir equipe:", error);
    }
  };

  return (
    <div>
      <h2>Equipes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="team_name"
          value={team.team_name}
          onChange={handleChange}
          placeholder="Nome da equipe"
        />
        <input
          type="text"
          name="team_logo"
          value={team.team_logo}
          onChange={handleChange}
          placeholder="Logo da equipe"
        />
        <button type="submit">{editing ? "Editar" : "Adicionar"}</button>
      </form>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            {team.team_name} - {team.team_logo}
            <button onClick={() => handleEdit(team)}>Editar</button>
            <button onClick={() => handleDelete(team.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamForm;