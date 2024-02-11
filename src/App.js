import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Anasayfa from './pages/AnaSayfa';
import Hakkimizda from './pages/Hakkimizda';
import SaglikliMi from './pages/SaglikliMi';
import SaglikliTarifler from './pages/SaglikliTarifler';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar/navbar';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <ResponsiveAppBar/>
          <Routes>
            
            <Route path="/" exact element={<Anasayfa/>} />
            <Route path="/hakkimizda" element={<Hakkimizda/>} />
            <Route path="/saglikliMi" element={<SaglikliMi/>} />
            <Route path="/saglikliTarifler" element={<SaglikliTarifler/>} />
           
          </Routes>
        </Router>
      </header>
      <main>
      <Container maxWidth="xl">
      </Container>
      </main>
    </div>
  );
}

export default App;
