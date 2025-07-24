import React, { useState} from "react";
import { useUser } from "../contexts/userContext";

function Registrazione() {
  const { registrazione, message } = useUser();
  const [formData, setFormData] = useState({
    username: "",
    nome: "",
    cognome: "",
    email: "",
    password: "",
    friends: [],
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleRegistrazione(e) {
    e.preventDefault();
    registrazione(formData);
    setFormData({
      username: "",
      nome: "",
      cognome: "",
      email: "",
      password: "",
    }); // Reset form after submission
  }

  return (
    <form onSubmit={handleRegistrazione}>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input
          type="text"
          name="cognome"
          placeholder="Cognome"
          value={formData.cognome}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Registrati</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default Registrazione;
