import './App.css';
import React, { useEffect, useState } from "react";
import BotCollection from "./Components/BotCollection";
import YourBotArmy from './Components/YourBotArmy';



function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy,setYourBotArmy] =useState([])

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const addedArmy = (bot) =>{
    if(!yourBotArmy.some((eachBot)=> eachBot.id === bot.id)){
      setYourBotArmy([...yourBotArmy, bot])
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <YourBotArmy yourBotArmy={yourBotArmy}/>
      <h1 className="text-3xl font-semibold mb-6">Welcome to Bot Collection</h1>
      <BotCollection
      addedArmy={addedArmy} 
      bots={bots} />
    </div>
  );
}

export default App;
