import React from 'react';
import './assets/styles.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Articles from './components/Article';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
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
