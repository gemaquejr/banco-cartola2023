import React, { useState, useEffect } from "react";
import { requestData } from '../../services/requests';

import './RoundView.css';

const RoundView = () => {
  const [rounds, setRounds] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetchRounds();
  }, []);

  const fetchRounds = async () => {
    try {
      const response = await requestData("/rounds");
      const { data } = response;
      setRounds(data);
    } catch (error) {
      console.error("Erro ao buscar rodada:", error);
    }
  };

  const fetchMatches = async (matchId) => {
    try {
      const response = await requestData(`/matches/${matchId}`);
      const { data } = response;
      setMatches([data]);
    } catch (error) {
      console.error(`Erro ao buscar partidas da rodada ${matchId}:`, error);
    }
  };

  const renderMatchTable = (match) => {
    return (
      <tr>
        <td colSpan="2">
          <table>
            <thead>
              <tr>
                <th>Time mandante</th>
                <th>Time visitante</th>
                <th>Local</th>
              </tr>
            </thead>
            <tbody>
              <tr key={match.id}>
                <td>{match.home_team}</td>
                <td>{match.away_team}</td>
                <td>{match.stadium}</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    );
  };

  return (
    <div className="table-container">
      <h2 className="heading">Rodada</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Rodada</th>
            <th>Jogo</th>
          </tr>
        </thead>
        <tbody>
          {rounds.map((round) => (
            <React.Fragment key={round.id}>
              <tr>
                <td>{round.number}</td>
                <td>{round.name}</td>
                <td>
                  <button onClick={() => fetchMatches(round.id)}>Ver partidas</button>
                </td>
              </tr>
              {matches.length > 0 && renderMatchTable(matches[0])}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoundView;