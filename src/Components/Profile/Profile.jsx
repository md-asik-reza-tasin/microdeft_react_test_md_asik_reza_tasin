import { useContext } from "react";
import imageAvater from "../../../public/profile.jpeg";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function Profile() {
  const { user } = useContext(AuthContext);
  return (
    <div className="avatar flex flex-col justify-center items-center border-b p-12">
      <div className="w-24 rounded-full">
        <img src={imageAvater} />
      </div>
      <h1 className="font-fontDisplay mt-2">Name : {user?.name}</h1>
      <h1 className="font-fontDisplay ">Email : {user?.email}</h1>
    </div>
  );
}
