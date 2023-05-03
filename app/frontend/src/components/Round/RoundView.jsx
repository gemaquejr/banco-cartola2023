import React, { useState, useEffect } from "react";
import { requestData } from '../../services/requests';

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
    <div>
      <table>
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
              <td>{round.matches}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoundView;