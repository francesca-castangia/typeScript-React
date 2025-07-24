import { useState } from "react";
import Welcome from "./Welcome";
import Private from "./Private";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/userContext";

function InteractiveWelcome() {
  const { user } = useUser(); 
  const [value, setValue] = useState("");
  return (
    <>
    {/* Se uso Private mi sbatte fuori dalla pagina indipendentemente dal fatto che il tag p in merito ai contenuti pubblici sia fuori dal wrap del Private. Questo perché dipende solo dalla sua key, che è user preso dal contesto, quindi se user è loggato te lo mostra, altrimenti no. Diversamente, posso usare un semplice rendering condizionale. */}
      <p>Questi contenuti sono pubblici.</p>
      {user ? <Link to="/dashboard">Vai alla dashboard</Link> : <Link to="/login">Login</Link>}
     
      {/* <Private isAuth= {user}><p>{user.name}</p></Private> */}
    </>
  );
}

export default InteractiveWelcome;
