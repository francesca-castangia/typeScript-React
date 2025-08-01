import { useState } from "react";
<<<<<<< HEAD
import { useUser } from "../contexts/userContext"; 
import { useNavigate } from "react-router-dom";


function Login() {
  const { login, message } = useUser();
=======
import {useUser} from "../Context/userContext.tsx"
import { useNavigate } from "react-router-dom";

function Login() {
  const { login, message} = useUser();
>>>>>>> ab12aca160b55779d7b7f5e6b5cb35349ff7ff61
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate= useNavigate();


<<<<<<< HEAD
  const handleSubmit = (e) => {
=======
  const handleSubmit = (e: any) => {
>>>>>>> ab12aca160b55779d7b7f5e6b5cb35349ff7ff61
    e.preventDefault();
    login(username, password);
    setUsername("");
    setPassword("");
    setRemember(false);
    navigate("/dashboard");
  };

  // non devo accedere alla rotta dashboard se non sono loggata 

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setRemember(false);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        <button type="submit" disabled={!username || !password}>
          Login
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        {message && <p>{message}</p>}
      </form>
     
      {/*se esiste uno user loggato, mi fa un render condizionale della mia dashboard*/}
    </div>
  );
}

export default Login;

//fare un pulsante che permette di attivare una modalità modifica che permette di andare a modificare i dati di utente
