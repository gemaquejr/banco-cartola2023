import React, { useState, useEffect } from "react";
import { requestData } from '../../services/requests';

import styles from './PlayerView.module.css';

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
    <div className={styles.container_matchview}>
      <div className={styles.table_container}>
        <div className={styles.table_cabecalho}>
          <div>Nome</div>
          <div>Idade</div>
          <div>Time</div>
          <div>Posição</div>
          <div>Titular</div>
        </div>
        {players.map((player) => (
          <div className={styles.row} key={player.id}>
            <div data-label="Nome">{player.name}</div>
            <div data-label="Idade">{player.age}</div>
            <div data-label="Time">{player.team?.team_name}</div>
            <div data-label="Posição">{player.position}</div>
            <div data-label="Titular">{player.starter ? "Sim" : "Não"}</div>
          </div>
        ))}
    </div>
  </div>
 );
};

export default PlayerForm;