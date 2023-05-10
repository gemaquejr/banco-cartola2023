import React, { useState, useEffect } from "react";
import { requestData } from '../../services/requests';

import './PlayerView.css';

const PlayerForm = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await requestData("/players");
      const { data } = response;
      setPlayers(data);
    } catch (error) {
      console.error("Erro ao buscar jogadores:", error);
    }
  };

  return (
    <div className="table-container">
      <h2 className="heading">Jogadores</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Time</th>
            <th>Posição</th>
            <th>Titular</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td data-label="Nome">{player.name}</td>
              <td data-label="Idade">{player.age}</td>
              <td data-label="Time">{player.team?.team_name}</td>
              <td data-label="Posição">{player.position}</td>
              <td data-label="Titular">{player.starter ? "Sim" : "Não"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerForm;