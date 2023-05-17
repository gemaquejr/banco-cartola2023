import React, { useState, useEffect } from "react";
import { requestData } from '../../services/requests';

  import styles from './MatchView.module.css';

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
    <div className={styles.container_matchview}>
      <div className={styles.table_container}>
        <div className={styles.table_cabecalho}>
          <div>Mandante</div>
          <div>Placar</div>
          <div>Visitante</div>
          <div>Data</div>
          <div>Estádio</div>
          <div>Rodada</div>
        </div>
        {matches.map((match) => (
          <div className={styles.row} key={match.id}>
              <div className={styles.home_team}>{match.home_team}</div>
              <div className={styles.score}>
                <span>{match.home_score}</span>
                <span>X</span>
                <span>{match.away_score}</span>
              </div>
              <div className={styles.away_team}>{match.away_team}</div>
              <div className={styles.date}>{match.date}</div>
              <div className={styles.stadium}>{match.stadium?.stadium_name}</div>
              <div className={styles.round}>{match.round?.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MatchForm;