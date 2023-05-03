import React, { useState, useEffect } from "react";
import { requestData } from "../../services/requests";

const CoachView = () => {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    fetchCoaches();
  }, []);

  const fetchCoaches = async () => {
    try {
      const response = await requestData("/coaches");
      const { data } = response;
      setCoaches(data);
    } catch (error) {
      console.error("Erro ao buscar treinadores:", error);
    }
  };

  return (
    <div>
      <h2>Treinadores</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {coaches.map((coach) => (
            <tr key={coach.id}>
              <td>{coach.name}</td>
              <td>{coach.age}</td>
              <td>{coach.club}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoachView;