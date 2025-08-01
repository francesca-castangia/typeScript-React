import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface UserContextType {
  user: User | null;
  db: User[];
  message: string;
  registrazione: (formData: User) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
  editUser: (editUser: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// hook personalizzato che usa il contesto, così da non dover importare il contesto in ogni file.
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve essere usato dentro <UserProvider>");
  }
  return context;
};

type User = {
    username: string;
    nome: string;
    cognome: string;
    email: string;
    password: string;
    friends: []
}
export const UserProvider = ({ children }: {children:ReactNode}) => {

  const [message, setMessage] = useState< string>("");
  const [user, setUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );
  const [db, setDb] = useState<User[]>(
    JSON.parse(localStorage.getItem("users") || "[]")
  );

  function registrazione(formData: User) {
    setMessage("");
    const userExist = db.find(
      (x) => x.username === formData.username || x.email === formData.email
    );
    if (!userExist) {
      setMessage("Registrazione avvenuta con successo!");
      setDb((prev) => [...prev, formData]); // metto setUsers qui cosi che al click dell'handle registrazione mi carica user
    }
  }
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(db));
  }, [db]);

  function login(username: string, password:string ) {
    setMessage("");
    const userExist = db.find(
      (x) => x.username === username && x.password === password
    );
    if (userExist) {
      setMessage("Login avvenuto con successo!");
      setUser(userExist);
      localStorage.setItem("user", JSON.stringify(userExist));
    } else {
      setMessage("Credenziali errate");
    }
  }
  function logout() {
    setMessage("");
    setUser(null);
    localStorage.removeItem("user");
  }
  function editUser(editUser: User) {
    if(user){
      const index = db.findIndex((x) => x.email === user.email);
    const copiaDatabase = [...db];
    copiaDatabase.splice(index, 1, editUser); //splice modifica l'array originale, ma a noi interessa un nuovo database, per questo ne faccio una copia su cui opero con splice. Così setDb capisce che è un nuovo array.
    setDb(copiaDatabase);
    setUser(editUser); // modifica il nostro user
    localStorage.setItem("user", JSON.stringify(editUser));
    }
  }

  return (
    <UserContext.Provider
      value={{ db, registrazione, login, logout, message, user, editUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
