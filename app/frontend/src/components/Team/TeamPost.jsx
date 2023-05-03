import React, { useState, useEffect } from "react";
import { requestData, postData } from '../../services/requests';

import Button from "../Button/Button";

const TeamForm = () => {
  const [team, setTeam] = useState({ team_name: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await requestData("/teams");
      const { data } = response;
      console.log(data);
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
        await postData("/teams", team);
      fetchTeams();
      setTeam({ team_name: "" });
      setMessage("Time adicionado com sucesso.");
    } catch (error) {
      setMessage("Não foi possível adicionar o técnico.", error);
    }
  };

  return (
    <div>
      <h2>Times</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="team_name"
            value={team.team_name}
            onChange={handleChange}
            placeholder="Nome da equipe"
          />
          <div>
            <Button type="submit" onClick={handleSubmit} label="Adicionar" />
          </div>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TeamForm;