import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MissionsPage from './pages/MissionsPage';
import ProfilePage from './pages/ProfilePage';
import RocketsPage from './pages/RocketsPage';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RocketsPage />} />
        <Route path="/Missions" element={<MissionsPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
