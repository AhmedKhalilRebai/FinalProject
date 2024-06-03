import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarMenu from './component/NavbarMenu';
import BlocHeader from './component/BlocHeader';
import BlocPad from './component/BlocPad';
import PhotoGrid from './component/PhotoGrid';
import Footer from './component/Footer';
import Welcome from './Pages/Welcome';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <NavbarMenu />
            <BlocHeader />
            <BlocPad />
            <PhotoGrid />
            
          </div>
        } />
        <Route path ="/Welcome" element={<Welcome />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
