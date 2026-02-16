import './App.css'
import React from 'react';
import Header from './components/Header'; // Adjust path if you put Header in a subfolder like './components/Header'
import Feed from './components/Feed';     // Adjust path if needed

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* 1. Header (Sticky) */}
      <Header />

      {/* 2. Main Layout */}
      {/* We add padding-top (pt-6) so content doesn't hide behind header */}
      <main className="pt-6 px-4 pb-20">
        
        {/* We just drop the Feed component here. 
            It handles its own width and internal layout. */}
        <Feed />

      </main>
    </div>
  );
}

export default App;