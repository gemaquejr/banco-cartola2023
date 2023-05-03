import React, { useState, useEffect } from "react";
import { requestData, postData } from '../../services/requests';

import Button from "../Button/Button";

const RoundForm = () => {
  const [round, setRound] = useState({ number: "", matches: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchRounds();
  }, []);

  const fetchRounds = async () => {
    try {
      const response = await requestData("/rounds");
      const { data } = response;
      console.log(data);
    } catch (error) {
      console.error("Erro ao buscar rodada:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRound({ ...round, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postData("/rounds", round);
      fetchRounds();
      setRound({ number: "", matches: "" });
      setMessage("Rodada adicionada com sucesso.");
    } catch (error) {
      setMessage("Erro ao salvar rodada:", error);
    }
  };

  return (
    <div>
      <h2>Rodada</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="number"
            name="number"
            value={round.number}
            onChange={handleChange}
            placeholder="Número da rodada"
          />
          <input
            type="number"
            name="matches"
            value={round.matches}
            onChange={handleChange}
            placeholder="Número do Jogo"
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

export default RoundForm;