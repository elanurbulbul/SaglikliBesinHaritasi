import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Anasayfa from './pages/AnaSayfa';
import Hakkimizda from './pages/Hakkimizda';
import SaglikliMi from './pages/SaglikliMi';
import SaglikliTarifler from './pages/SaglikliTarifler';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar/navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Router>
            <ResponsiveAppBar/>  
          </Router>
        </header>
        <main>
        <Container maxWidth="xl" margintop="5px">
          <Router>
              <Routes>
                
                <Route path="/" exact element={<Anasayfa/>} />
                <Route path="/hakkimizda" element={<Hakkimizda/>} />
                <Route path="/saglikliMi" element={<SaglikliMi/>} />
                <Route path="/saglikliTarifler" element={<SaglikliTarifler/>} />
              
              </Routes>
            </Router> 
        </Container>
        <footer>
          <Box sx={{ bgcolor: '#f5f5f5', py: 2, mt:10, position:'fixed', width:'100%', bottom:'0' }}>
          <Typography variant="body2" align="center">
            Telif Hakkı © 2024
          </Typography>
          </Box>
        </footer>
      </main>
    </div>
  );
}

export default App;
