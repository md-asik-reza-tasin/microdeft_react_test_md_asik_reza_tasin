import { createContext, useState } from "react";
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null); 
  
  const info = { setUser, user };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
}
