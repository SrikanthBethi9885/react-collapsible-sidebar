// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const Home: React.FC = () => <div>Welcome to Home Page</div>;
const Settings: React.FC = () => <div>Welcome to Settings Page</div>;
const Locations: React.FC = () => <div>Welcome to Locations Page</div>;
const Sales: React.FC = () => <div>Welcome to Sales Page</div>;
const Revenue: React.FC = () => <div>Welcome to Revenue Page</div>;
const Services: React.FC = () => <div>Welcome to Services Page</div>;

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ display: 'flex', flexGrow: 1 }}>
          <Sidebar />
          <div style={{ padding: '10px', flexGrow: 1, marginTop: '-30px', marginLeft: '-10px' }}>
            <Header />
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/locations" element={<Locations />} />
                <Route path='/sales' element={<Sales />} />
                <Route path='/revenue' element={<Revenue />} />
                <Route path='/services' element={<Services />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
