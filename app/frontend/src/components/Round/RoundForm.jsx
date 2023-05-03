import React, { useState, useEffect } from "react";
import { requestData, postData, putData, deleteData } from '../../services/requests';

import Button from "../Button/Button";

const RoundForm = () => {
  const [round, setRound] = useState({ number: "", matches: "" });
  const [rounds, setRounds] = useState([]);
  const [editing, setEditing] = useState(false);
  const [roundId, setRoundId] = useState(null);
  const [editedRoundNumber, setEditedRoundNumber] = useState("");
  const [editedRoundMatches, setEditedRoundMatches] = useState("");

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRound({ ...round, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await putData(`/rounds/${roundId}`, {
          number: editedRoundNumber,
          matches: editedRoundMatches
        });
      } else {
        await postData("/rounds", round);
      }
      fetchRounds();
      setRound({ number: "", matches: "" });
      setEditing(false);
      setRoundId(null);
      setEditedRoundNumber("");
      setEditedRoundMatches("");
    } catch (error) {
      console.error("Erro ao salvar rodada:", error);
    }
  };

  const handleEdit = (round) => {
    setRoundId(round.id);
    setEditing(true);
    setEditedRoundNumber(round.number);
    setEditedRoundMatches(round.matches);
  };

  const handleDelete = async (id) => {
    try {
      await deleteData(`/rounds/${id}`);
      fetchRounds();
    } catch (error) {
      console.error("Erro ao excluir rodada:", error);
    }
  };

  return (
    <div>
      <h2>Rodada</h2>
      <form onSubmit={handleSubmit}>
        { editing ? (
        <>
          <input
            type="number"
            name="number"
            value={round.number}
            onChange={handleChange}
            placeholder="Número da rodada"
            hidden
          />
          <input
            type="number"
            name="matches"
            value={round.matches}
            onChange={handleChange}
            placeholder="Número do Jogo"
            hidden
          />
        </>
        ) : (
          <>
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
            <Button type="submit" onClick={handleSubmit} label={editing ? "Editar" : "Adicionar"} />
          </>
        )}
      </form>
      <ul>
        {rounds.map((round) => (
          <li key={round.id}>
            {editing && round.id === roundId ? (
              <div>
                 <input
                    type="number"
                    name="number"
                    value={editedRoundNumber}
                    onChange={(e) => setEditedRoundNumber(e.target.value)}
                    placeholder="Número da rodada"
                 />
                  <input
                    type="number"
                    name="matches"
                    value={editedRoundMatches}
                    onChange={(e) => setEditedRoundMatches(e.target.value)}
                    placeholder="Número do Jogo"
                  />
                  <Button onClick={handleSubmit} label="Salvar" />
                  <Button onClick={() => setEditing(false)} label="Cancelar" />
              </div>
            ) : (
              <div>
                {round.number} - {round.matches}
                <Button onClick={() => handleEdit(round)} label="Editar" />
                <Button onClick={() => handleDelete(round.id)} label="Excluir" />
            </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoundForm;