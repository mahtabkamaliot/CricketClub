
import './App.css';
import Home from './Pages/Home';
import Team from './Pages/Team';
import Schedule from './Pages/Schedule';
import About from './Pages/About';
import PlayerList from './Pages/Player_List';
import PlayerSignup from './Pages/Player_SignUp';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
     
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/schedule' element={<Schedule />} />
  <Route path='/playerlist' element={<PlayerList/>} />
  <Route path='/team' element={<Team/>} />
  <Route path='/playersignup' element={<PlayerSignup/>} />
  <Route path='/about' element={<About/>} />
  
  </Routes>
  </BrowserRouter>   
    </div>
  );
}

export default App;
