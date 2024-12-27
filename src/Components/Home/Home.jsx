import { Outlet } from "react-router-dom";
import "../Home/Home.css";
import Profile from "../Profile/Profile";
import Add from "../Add/Add";
import Cards from "../Cards/Cards";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="mt-10">
        <Profile></Profile>
        <div className="mt-5">
          <Add></Add>
        </div>
      </div>
      <Cards></Cards>
    </div>
  );
}
