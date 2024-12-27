import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (user) {
    return <div>{children}</div>;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
}
