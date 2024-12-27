import { useContext } from "react";
import imageAvater from "../../../public/profile.jpeg";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { setUser, user, setCards } = useContext(AuthContext);
  const cookies = new Cookies();
  const navigate = useNavigate();

  const handleSignOut = () => {
    cookies.remove("token");
    navigate("/login");
    setUser(null);
    setCards([]);
  };

  return (
    <div className="avatar flex flex-col justify-center items-center border-b p-12">
      <div className="w-24 rounded-full">
        <img src={imageAvater} />
      </div>
      <h1 className="font-fontDisplay mt-2">Name : {user?.name}</h1>
      <h1 className="font-fontDisplay ">Email : {user?.email}</h1>
      <button onClick={handleSignOut} className="btn btn-outline btn-sm mt-2">sign out</button>
    </div>
  );
}
