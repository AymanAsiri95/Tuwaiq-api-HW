import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Poke from './components/Poke';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='Pokemon' element={<Poke />}></Route>
        <Route path="Login" element={<Login />}></Route>
      </Routes>

    </>
  );
}

export default App;