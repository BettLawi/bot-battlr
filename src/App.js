import './App.css';
import React, { useEffect, useState } from "react";
import BotCollection from "./Components/BotCollection";



function App() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-6">Welcome to Bot Collection</h1>
      <BotCollection bots={bots} />
    </div>
  );
}

export default App;
