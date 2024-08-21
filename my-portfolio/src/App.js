import React from 'react';
import './index.css'; 
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Articles from './components/Article';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <main className="content">
        <Articles />
      </main>
      <Footer />
    </div>
  );
}

export default App;
