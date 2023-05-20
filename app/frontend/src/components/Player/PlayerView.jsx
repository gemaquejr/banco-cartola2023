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
    <div className={styles.container_playerview}>
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
            <div className={styles.name}>{player.name}</div>
            <div className={styles.age}>{player.age}</div>
            <div className={styles.team}>{player.team?.team_name}</div>
            <div className={styles.position}>{player.position}</div>
            <div className={styles.starter}>{player.starter ? "Sim" : "Não"}</div>
          </div>
        ))}
    </div>
  </div>
 );
};

export default PlayerForm;