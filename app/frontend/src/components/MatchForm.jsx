import React, { useState, useEffect } from "react";
import { requestData, postData, putData, deleteData } from '../services/requests';

const MatchForm = () => {
  const [match, setMatch] = useState({ home_team: "", away_team: "", home_score: "", away_score: "", date: "", stadium: "" });
  const [matches, setMatches] = useState([]);
  const [editing, setEditing] = useState(false);
  const [matchId, setMatchId] = useState(null);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const response = await requestData("/matches");
      const { data } = response;
      setMatches(data);
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
      if (editing) {
        await putData(`/matches/${matchId}`, match);
      } else {
        await postData("/matches", match);
      }
      fetchMatches();
      setMatch({ home_team: "", away_team: "", home_score: "", away_score: "", date: "", stadium: "" });
      setEditing(false);
      setMatchId(null);
    } catch (error) {
      console.error("Erro ao salvar confrontos:", error);
    }
  };

  const handleEdit = (match) => {
    setMatchId(match.id);
    setEditing(true);
    setMatch({ home_team: match.home_team, away_team: match.away_team, home_score: match.home_score, away_score: match.away_score, date: match.date, stadium: match.stadium });
  };

  const handleDelete = async (id) => {
    try {
      await deleteData(`/matches/${id}`);
      fetchMatches();
    } catch (error) {
      console.error("Erro ao excluir confrontos:", error);
    }
  };

  return (
    <div>
      <h2>Confrontos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="home_team"
          value={match.home_team}
          onChange={handleChange}
          placeholder="Nome do time da casa"
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
          name="home_score"
          value={match.home_score}
          onChange={handleChange}
          placeholder="Placar do time da casa"
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
        <button type="submit">{editing ? "Editar" : "Adicionar"}</button>
      </form>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            {match.home_team} - {match.away_team} - {match.home_score} - {match.away_score} - {match.date} - {match.stadium}
            <button onClick={() => handleEdit(match)}>Editar</button>
            <button onClick={() => handleDelete(match.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchForm;