import React, { useState, useEffect } from "react";
import { requestData, postData } from '../../services/requests';

import Button from "../Button/Button";

const CoachForm = () => {
  const [coach, setCoach] = useState({ name: "", age: "", club: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchCoaches();
  }, []);

  const fetchCoaches = async () => {
    try {
      const response = await requestData("/coaches");
      const { data } = response;
      console.log(data);
    } catch (error) {
      console.error("Erro ao buscar treinadores:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoach({ ...coach, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postData("/coaches", coach);
      fetchCoaches();
      setCoach({ name: "", age: "", club: "" });
      setMessage("Técnico adicionado com sucesso.");
    } catch (error) {
      setMessage("Não foi possível adicionar o técnico.", error);
    }
  };

  return (
    <div>
      <h2>Treinadores</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={coach.name}
            onChange={handleChange}
            placeholder="Nome do treinador"
          />
          <input
            type="number"
            name="age"
            value={coach.age}
            onChange={handleChange}
            placeholder="Idade do treinador"
          />
          <input
            type="text"
            name="club"
            value={coach.club}
            onChange={handleChange}
            placeholder="Time do treinador"
          />
          <div>
            <Button type="submit" onClick={handleSubmit} label="Adicionar" />
          </div>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CoachForm;