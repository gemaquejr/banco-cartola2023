import React, { useState, useEffect } from "react";
import { requestData, postData } from '../../services/requests';

import Button from "../Button/Button";

const MatchForm = () => {
  const [match, setMatch] = useState({ home_team: "", home_score: "", away_team: "", away_score: "", date: "", stadium: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const response = await requestData("/matches");
      const { data } = response;
      console.log(data);
    } catch (error) {
      console.error("Erro ao buscar confrontos:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMatch({ ...match, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postData("/matches", match);
      fetchMatches();
      setMatch({ home_team: "", home_score: "", away_team: "", away_score: "", date: "", stadium: "" });
      setMessage("Confronto adicionado com sucesso.");
    } catch (error) {
      console.error("Erro ao salvar confrontos:", error);
    }
  };

  return (
    <div>
      <h2>Confrontos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="home_team"
            value={match.home_team}
            onChange={handleChange}
            placeholder="Nome do time da casa"
          />
          <input
            type="number"
            name="home_score"
            value={match.home_score}
            onChange={handleChange}
            placeholder="Placar do time da casa"
          />
          <input
            type="text"
            name="away_team"
            value={match.away_team}
            onChange={handleChange}
            placeholder="Nome do time visitante"
          />
          <input
            type="number"
            name="away_score"
            value={match.away_score}
            onChange={handleChange}
            placeholder="Placar do time visitante"
          />
          <input
            type="text"
            name="date"
            value={match.date}
            onChange={handleChange}
            placeholder="Data do confronto"
          />
          <input
            type="text"
            name="stadium"
            value={match.stadium}
            onChange={handleChange}
            placeholder="Local do confronto"
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

export default MatchForm;