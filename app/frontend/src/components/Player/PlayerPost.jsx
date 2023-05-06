import React, { useState, useEffect } from "react";
import { requestData, postData } from '../../services/requests';

import './PlayerPost.css';

import Button from "../Button/Button";

const PlayerForm = () => {
  const [player, setPlayer] = useState({ name: "", age: "", club: "", position: "", starter: false });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await requestData("/players");
      const { data } = response;
      console.log(data);
    } catch (error) {
      console.error("Erro ao buscar jogadores:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayer({ ...player, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPlayer({ ...player, [name]: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postData("/players", player);
      fetchPlayers();
      setPlayer({ name: "", age: "", club: "", position: "", starter: false });
      setMessage("Jogador adicionado com sucesso.");
    } catch (error) {
      console.error("Erro ao salvar jogador:", error);
    }
  };

  return (
    <div>
      <h2>Jogadores</h2>
      <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={player.name}
              onChange={handleChange}
              placeholder="Nome do jogador"
            />
            <input
              type="number"
              name="age"
              value={player.age}
              onChange={handleChange}
              placeholder="Idade do jogador"
            />
            <input
              type="text"
              name="club"
              value={player.club}
              onChange={handleChange}
              placeholder="Time do jogador"
            />
            <input
              type="text"
              name="position"
              value={player.position}
              onChange={handleChange}
              placeholder="Posição do jogador"
            />
            <label>
                Jogador Titular ?
                <input
                type="checkbox"
                name="starter"
                value={player.starter}
                onChange={handleCheckboxChange}
                />
                <div>
                  <Button type="submit" onClick={handleSubmit} label="Adicionar" />
                </div>
              </label>
          </div>
        </form>
      {message && <p>{message}</p>}
    </div>
  );
};
export default PlayerForm;