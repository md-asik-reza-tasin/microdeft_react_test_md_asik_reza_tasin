import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import '../Home/Home.css';

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}
