import { useRef, useState } from "react";
import { Dashboard } from "./Dashboard";

function UncontrolledLogin({ onLogin, database }) {
    const username = useRef();
    const password = useRef();
    const remember = useRef();


  const [users, setUsers] = useState(database);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || null));

  const handleSubmit = (e) => {
    e.preventDefault();
    const credenziali = {
        username: username.current.value,
        password: password.current.value,
        remember: remember.current.checked } //react prende il current value al submit e lo mette nelle credenziali (non in tempo reale)

    const userExist = users.find(
      (x) => x.username === username && x.password === password
    );
    if (userExist) {
      setMessage(`Il Login al sito e' avvenuta con successo!`);
      setUser(userExist);
      localStorage.setItem("user", JSON.stringify(userExist))
    } else {
      setMessage(`Credenziali errate!`);
    }
  };


  function handleLogout(){
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
   <div>
     <form onSubmit={handleSubmit}>
      <input
        type="text" ref={username}
        
      />
      <input
        type="password" ref={password}
        
      />
      <input
        type="checkbox" ref={remember}
       
      />
      <button type="submit">
        Login
      </button>
      <button type= "reset">
        Reset
      </button>
      {message && <p>{message}</p>}
    </form>
    {user && <Dashboard user={user} logout={handleLogout}/>}
   </div>
  );
}

export default UncontrolledLogin;


