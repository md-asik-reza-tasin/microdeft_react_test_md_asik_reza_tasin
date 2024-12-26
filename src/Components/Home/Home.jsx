import { Outlet } from "react-router-dom";
import "../Home/Home.css";
import Profile from "../Profile/Profile";
import Add from "../Add/Add";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div>
        <Profile></Profile>
        <div className="mt-5">
          <Add></Add>
        </div>
      </div>
      <div></div>
    </div>
  );
}
