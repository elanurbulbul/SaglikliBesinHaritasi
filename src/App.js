import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import { BrowserRouter as Router} from 'react-router-dom';
import Footer from './components/Footer';
import RoutePage from './components/Routes/RoutePage';
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <main>
        <div className='container' maxWidth="xl" margintop="5px">
          <RoutePage/>
        </div>
        </main>
          <Box sx={{ bgcolor: '#f5f5f5', width:'100%', bottom:'0' }}>
             <Footer/>    
          </Box>
          </Router>   
    </div>
  );
}

export default App;
