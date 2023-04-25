import React, { useState, useEffect } from "react";
import { requestData, postData, putData, deleteData } from '../services/requests';

const TeamForm = () => {
  const [team, setTeam] = useState({ team_name: "" });
  const [teams, setTeams] = useState([]);
  const [editing, setEditing] = useState(false);
  const [teamId, setTeamId] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeam({ ...team, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await putData(`/teams/${teamId}`, team);
      } else {
        await postData("/teams", team);
      }
      fetchTeams();
      setTeam({ team_name: "" });
      setEditing(false);
      setTeamId(null);
    } catch (error) {
      console.error("Erro ao salvar equipe:", error);
    }
  };

  const handleEdit = (team) => {
    setTeamId(team.id);
    setEditing(true);
    setTeam({ team_name: team.team_name });
  };

  const handleDelete = async (id) => {
    try {
      await deleteData(`/teams/${id}`);
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
        <button type="submit">{editing ? "Editar" : "Adicionar"}</button>
      </form>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            {editing && team.id === teamId ? (
              <div>
                <input
                  type="text"
                  name="team_name"
                  value={team.team_name}
                  onChange={handleChange}
                  placeholder="Nome da equipe"
                />
                <button onClick={handleSubmit}>Salvar</button>
                <button onClick={() => setEditing(false)}>Cancelar</button>
              </div>
            ) : (
              <div>
                {team.team_name}
                <button onClick={() => handleEdit(team)}>Editar</button>
                <button onClick={() => handleDelete(team.id)}>Excluir</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamForm;