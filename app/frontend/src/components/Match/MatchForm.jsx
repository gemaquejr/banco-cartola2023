import React, { useState, useEffect } from "react";
import { requestData, postData, putData, deleteData } from '../../services/requests';

import Button from "../Button/Button";

const MatchForm = () => {
  const [match, setMatch] = useState({ home_team: "", home_score: "", away_team: "", away_score: "", date: "", stadium: "" });
  const [matches, setMatches] = useState([]);
  const [editing, setEditing] = useState(false);
  const [matchId, setMatchId] = useState(null);
  const [editedMatchHomeTeam, setEditedMatchHomeTeam] = useState("");
  const [editedMatchAwayTeam, setEditedMatchAwayTeam] = useState("");
  const [editedMatchHomeScore, setEditedMatchHomeScore] = useState("");
  const [editedMatchAwayScore, setEditedMatchAwayScore] = useState("");
  const [editedDate, setEditedDate] = useState("");
  const [editedStadium, setEditedStadium] = useState("");

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
        await putData(`/matches/${matchId}`, {
          home_team: editedMatchHomeTeam,
          home_score: editedMatchHomeScore,
          away_team: editedMatchAwayTeam,
          away_score: editedMatchAwayScore,
          date: editedDate,
          stadium: editedStadium,
        });
      } else {
        await postData("/matches", match);
      }
      fetchMatches();
      setMatch({ home_team: "", home_score: "", away_team: "", away_score: "", date: "", stadium: "" });
      setEditing(false);
      setMatchId(null);
      setEditedMatchHomeTeam("");
      setEditedMatchAwayTeam("");
      setEditedMatchHomeScore("");
      setEditedMatchAwayScore("");
      setEditedDate("");
      setEditedStadium("");

    } catch (error) {
      console.error("Erro ao salvar confrontos:", error);
    }
  };

  const handleEdit = (match) => {
    setMatchId(match.id);
    setEditing(true);
    setEditedMatchHomeTeam(match.home_team);
    setEditedMatchHomeScore(match.home_score);
    setEditedMatchAwayTeam(match.away_team);
    setEditedMatchAwayScore(match.away_score);
    setEditedDate(match.date);
    setEditedStadium(match.stadium);
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
      { editing ? (
        <>
          <input
            type="text"
            name="home_team"
            value={match.home_team}
            onChange={handleChange}
            placeholder="Nome do time da casa"
            hidden
          />
          <input
            type="number"
            name="home_score"
            value={match.home_score}
            onChange={handleChange}
            placeholder="Placar do time da casa"
            hidden
          />
          <input
            type="text"
            name="away_team"
            value={match.away_team}
            onChange={handleChange}
            placeholder="Nome do time visitante"
            hidden
          />
          <input
            type="number"
            name="away_score"
            value={match.away_score}
            onChange={handleChange}
            placeholder="Placar do time visitante"
            hidden
          />
          <input
            type="text"
            name="date"
            value={match.date}
            onChange={handleChange}
            placeholder="Data do confronto"
            hidden
          />
          <input
            type="text"
            name="stadium"
            value={match.stadium}
            onChange={handleChange}
            placeholder="Local do confronto"
            hidden
          />
        </>
        ) : (
          <>
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
            <Button type="submit" onClick={handleSubmit} label={editing ? "Editar" : "Adicionar"} />
          </>
        )}
      </form>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            {editing && match.id === matchId ? (
              <div>
                <input
                  type="text"
                  name="home_team"
                  value={editedMatchHomeTeam}
                  onChange={(e) => setEditedMatchHomeTeam(e.target.value)}
                  placeholder="Nome do time da casa"
                />
                <input
                  type="number"
                  name="home_score"
                  value={editedMatchHomeScore}
                  onChange={(e) => setEditedMatchHomeScore(e.target.value)}
                  placeholder="Placar do time da casa"
                />
                <input
                  type="text"
                  name="away_team"
                  value={editedMatchAwayTeam}
                  onChange={(e) => setEditedMatchAwayTeam(e.target.value)}
                  placeholder="Nome do time visitante"
                />
                <input
                  type="number"
                  name="away_score"
                  value={editedMatchAwayScore}
                  onChange={(e) => setEditedMatchAwayScore(e.target.value)}
                  placeholder="Placar do time visitante"
                />
                <input
                  type="text"
                  name="date"
                  value={editedDate}
                  onChange={(e) => setEditedDate(e.target.value)}
                  placeholder="Data do confronto"
                />
                <input
                  type="text"
                  name="stadium"
                  value={editedStadium}
                  onChange={(e) => setEditedStadium(e.target.value)}
                  placeholder="Local do confronto"
                />
                  <Button onClick={handleSubmit} label="Salvar" />
                  <Button onClick={() => setEditing(false)} label="Cancelar" />
              </div>
            ) : (
              <div>
                {match.home_team}  {match.home_score} X {match.away_score} {match.away_team} ( {match.date} - {match.stadium} )
                <Button onClick={() => handleEdit(match)} label="Editar" />
                <Button onClick={() => handleDelete(match.id)} label="Excluir" />
              </div>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchForm;