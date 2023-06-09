import React, { useState, useEffect } from "react";
import { requestData, postData, putData, deleteData } from '../../services/requests';

import Button from "../Button/Button";

const TeamForm = () => {
  const [team, setTeam] = useState({ team_name: "" });
  const [teams, setTeams] = useState([]);
  const [editing, setEditing] = useState(false);
  const [teamId, setTeamId] = useState(null);
  const [editedTeamName, setEditedTeamName] = useState("");

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
        await putData(`/teams/${teamId}`, { team_name: editedTeamName });
      } else {
        await postData("/teams", team);
      }
      fetchTeams();
      setTeam({ team_name: "" });
      setEditing(false);
      setTeamId(null);
      setEditedTeamName("");
    } catch (error) {
      console.error("Erro ao salvar equipe:", error);
    }
  };

  const handleEdit = (team) => {
    setTeamId(team.id);
    setEditing(true);
    setEditedTeamName(team.team_name);
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
        { editing ? (
        <input
          type="text"
          name="team_name"
          value={team.team_name}
          onChange={handleChange}
          placeholder="Nome da equipe"
          hidden
        />
        ) : (
          <>
            <input
              type="text"
              name="team_name"
              value={team.team_name}
              onChange={handleChange}
              placeholder="Nome da equipe"
            />
            <Button type="submit" onClick={handleSubmit} label={editing ? "Editar" : "Adicionar"} />
          </>
        )}
      </form>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            {editing && team.id === teamId ? (
              <div>
                <input
                  type="text"
                  name="team_name"
                  value={editedTeamName}
                  onChange={(e) => setEditedTeamName(e.target.value)}
                  placeholder="Nome da equipe"
                />
                <Button onClick={handleSubmit} label="Salvar" />
                <Button onClick={() => setEditing(false)} label="Cancelar" />
              </div>
            ) : (
              <div>
                {team.team_name}
                <Button onClick={() => handleEdit(team)} label="Editar" />
                <Button onClick={() => handleDelete(team.id)} label="Excluir" />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamForm;