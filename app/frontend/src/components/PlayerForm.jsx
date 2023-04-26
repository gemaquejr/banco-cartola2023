import React, { useState, useEffect } from "react";
import { requestData, postData, putData, deleteData } from '../services/requests';

import Button from "./Button/Button";

const PlayerForm = () => {
  const [player, setPlayer] = useState({ name: "", age: "", club: "", position: "", starter: false });
  const [players, setPlayers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [playerId, setPlayerId] = useState(null);
  const [editedPlayerName, setEditedPlayerName] = useState("");
  const [editedPlayerAge, setEditedPlayerAge] = useState("");
  const [editedPlayerClub, setEditedPlayerClub] = useState("");
  const [editedPlayerPosition, setEditedPlayerPosition] = useState("");
  const [editedPlayerStarter, setEditedPlayerStarter] = useState("");

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
        await putData(`/players/${playerId}`, {
          name: editedPlayerName,
          age: editedPlayerAge,
          club: editedPlayerClub,
          position: editedPlayerPosition,
          starter: editedPlayerStarter
        });
      } else {
        await postData("/players", player);
      }
      fetchPlayers();
      setPlayer({ name: "", age: "", club: "", position: "", starter: false });
      setEditing(false);
      setPlayerId(null);
      setEditedPlayerName("");
      setEditedPlayerAge("");
      setEditedPlayerClub("");
      setEditedPlayerPosition("");
      setEditedPlayerStarter(false);
    } catch (error) {
      console.error("Erro ao salvar jogador:", error);
    }
  };

  const handleEdit = (player) => {
    setPlayerId(player.id);
    setEditing(true);
    setEditedPlayerName(player.name);
    setEditedPlayerAge(player.age);
    setEditedPlayerClub(player.club);
    setEditedPlayerPosition(player.position);
    setEditedPlayerStarter(player.starter);
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
        { editing ? (
          <>
            <input
              type="text"
              name="name"
              value={player.name}
              onChange={handleChange}
              placeholder="Nome do jogador"
              hidden
            />
            <input
              type="number"
              name="age"
              value={player.age}
              onChange={handleChange}
              placeholder="Idade do jogador"
              hidden
            />
            <input
              type="text"
              name="club"
              value={player.club}
              onChange={handleChange}
              placeholder="Time do jogador"
              hidden
            />
            <input
              type="text"
              name="position"
              value={player.position}
              onChange={handleChange}
              placeholder="Posição do jogador"
              hidden
            />
            <label hidden>
                Jogador Titular ?
                <input
                type="checkbox"
                name="starter"
                value={player.starter}
                onChange={handleCheckboxChange}
                hidden
                />
            </label>
          </>
          ) : (
            <>
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
            <Button type="submit" onClick={handleSubmit} label={editing ? "Editar" : "Adicionar"} />
          </>
        )}
      </form>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {editing && player.id === playerId ? (
              <div>
                <input
                  type="text"
                  name="name"
                  value={editedPlayerName}
                  onChange={(e) => setEditedPlayerName(e.target.value)}
                  placeholder="Nome do jogador"
                />
                <input
                  type="number"
                  name="age"
                  value={editedPlayerAge}
                  onChange={(e) => setEditedPlayerAge(e.target.value)}
                  placeholder="Idade do jogador"
                />
                <input
                  type="text"
                  name="club"
                  value={editedPlayerClub}
                  onChange={(e) => setEditedPlayerClub(e.target.value)}
                  placeholder="Time do jogador"
                />
                <input
                  type="text"
                  name="position"
                  value={editedPlayerPosition}
                  onChange={(e) => setEditedPlayerPosition(e.target.value)}
                  placeholder="Posição do jogador"
                />
                <label>
                    Jogador Titular ?
                    <input
                    type="checkbox"
                    name="starter"
                    value={editedPlayerStarter}
                    onChange={(e) => setEditedPlayerStarter(e.target.value)}
                    />
                </label>
                <Button onClick={handleSubmit} label="Salvar" />
                <Button onClick={() => setEditing(false)} label="Cancelar" />
            </div>
          ) : (
            <div>
              {player.name} - {player.age} - {player.club} - {player.position} - {player.starter ? "Sim" : "Não"}
              <Button onClick={() => handleEdit(player)} label="Editar" />
              <Button onClick={() => handleDelete(player.id)} label="Excluir" />
            </div>
          )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerForm;