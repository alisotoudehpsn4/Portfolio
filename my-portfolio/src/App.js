import React, { useEffect, useState } from 'react';
import './index.css'; 
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Articles from './components/Article';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Short delay to ensure the animation starts after the components are rendered

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app-container ${isLoaded ? 'loaded' : ''}`}>
      <Sidebar />
      <div className={`main-content ${isLoaded ? 'loaded' : ''}`}>
        <Header />
        <main className="content">
          <Articles />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
