import React, { useState, useEffect } from "react";
import { requestData, postData, putData, deleteData } from '../services/requests';

const CoachForm = () => {
  const [coach, setCoach] = useState({ name: "", age: "", club: "" });
  const [coaches, setCoaches] = useState([]);
  const [editing, setEditing] = useState(false);
  const [coachId, setCoachId] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoach({ ...coach, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await putData(`/coaches/${coachId}`, coach);
      } else {
        await postData("/coaches", coach);
      }
      fetchCoaches();
      setCoach({ name: "", age: "", club: "" });
      setEditing(false);
      setCoachId(null);
    } catch (error) {
      console.error("Erro ao salvar treinador:", error);
    }
  };

  const handleEdit = (coach) => {
    setCoachId(coach.id);
    setEditing(true);
    setCoach({ name: coach.name, age: coach.age, club: coach.club });
  };

  const handleDelete = async (id) => {
    try {
      await deleteData(`/coaches/${id}`);
      fetchCoaches();
    } catch (error) {
      console.error("Erro ao excluir treinador:", error);
    }
  };

  return (
    <div>
      <h2>Treinadores</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">{editing ? "Editar" : "Adicionar"}</button>
      </form>
      <ul>
        {coaches.map((coach) => (
          <li key={coach.id}>
            {coach.name} - {coach.age} - {coach.club}
            <button onClick={() => handleEdit(coach)}>Editar</button>
            <button onClick={() => handleDelete(coach.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoachForm;