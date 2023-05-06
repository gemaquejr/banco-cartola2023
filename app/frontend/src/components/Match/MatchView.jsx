import React, { useState, useEffect } from "react";
import { requestData } from '../../services/requests';

import './MatchView.css';

const MatchForm = () => {
  const [matches, setMatches] = useState([]);

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
  
  return (
    <div className="table-container">
      <h2 className="heading">Confrontos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Mandante</th>
            <th>Gols Mandante</th>
            <th>Visitante</th>
            <th>Gols Visitante</th>
            <th>Data</th>
            <th>Estádio</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match.id}>
              <td>{match.home_team}</td>
              <td>{match.home_score}</td>
              <td>{match.away_team}</td>
              <td>{match.away_score}</td>
              <td>{match.date}</td>
              <td>{match.stadium}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchForm;