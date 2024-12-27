import { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [add, setAdd] = useState(null);
  const [cards, setCards] = useState([]);

  const cookies = new Cookies();

  useEffect(() => {
    fetch("https://react-interview.crd4lc.easypanel.host/api/course", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookies.get("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCards(data.data.data);
      });
  }, [add , user]);

  const info = { setUser, user, cards, setAdd, setCards };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
}
