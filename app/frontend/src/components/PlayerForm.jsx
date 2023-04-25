import React, { useState, useEffect } from "react";
import { requestData, postData, putData, deleteData } from '../services/requests';

const PlayerForm = () => {
  const [player, setPlayer] = useState({ name: "", age: "", club: "", position: "", starter: false });
  const [players, setPlayers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [playerId, setPlayerId] = useState(null);

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
      if (editing) {
        await putData(`/players/${playerId}`, player);
      } else {
        await postData("/players", player);
      }
      fetchPlayers();
      setPlayer({ name: "", age: "", club: "", position: "", starter: false });
      setEditing(false);
      setPlayerId(null);
    } catch (error) {
      console.error("Erro ao salvar jogador:", error);
    }
  };

  const handleEdit = (player) => {
    setPlayerId(player.id);
    setEditing(true);
    setPlayer({ name: player.name, age: player.age, club: player.club, position: player.position, starter: player.starter });
  };

  const handleDelete = async (id) => {
    try {
      await deleteData(`/players/${id}`);
      fetchPlayers();
    } catch (error) {
      console.error("Erro ao excluir jogador:", error);
    }
  };

  return (
    <div>
      <h2>Jogadores</h2>
      <form onSubmit={handleSubmit}>
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
        </label>
        <button type="submit">{editing ? "Editar" : "Adicionar"}</button>
      </form>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name} - {player.age} - {player.club} - {player.position} - {player.starter ? "Sim" : "Não"}
            <button onClick={() => handleEdit(player)}>Editar</button>
            <button onClick={() => handleDelete(player.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerForm;