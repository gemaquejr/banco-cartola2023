import React, { useState, useEffect } from "react";
import { requestData } from '../../services/requests';

import styles from './TeamView.module.css';

const TeamView = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await requestData("/teams");
      const { data } = response;
      setTeams(data);
    } catch (error) {
      console.error("Erro ao buscar equipes:", error);
    }
  };

  return (
    <div className={styles.container_teamview}>
      <div className={styles.table_container}>
        <div className={styles.table_cabecalho}>
          <div>Time</div>
          <div>Escudo</div>
        </div>
        {teams.map((team) => (
          <div className={styles.row} key={team.id}>
            <div className={styles.logo}>{team.team_name}</div>
            <div className={styles.shield}>
                <img
                  className={styles.team_logo}
                  src={require(`../../assets/${team.logo_name}`)}
                  alt={`Logo do ${team.team_name}`}
                />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamView;