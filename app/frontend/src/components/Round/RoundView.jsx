import React, { useState, useEffect } from "react";
import { requestData } from '../../services/requests';

import './RoundView.css';

const RoundView = () => {
  const [rounds, setRounds] = useState([]);

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
            <tr key={round.id}>
              <td>{round.number}</td>
              <td>{round.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoundView;