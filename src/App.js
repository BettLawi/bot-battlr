import React, { useEffect, useState } from "react";
import BotCollection from "./Components/BotCollection";
import YourBotArmy from './Components/YourBotArmy'

function App() {
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [dischargedBots, setDischargedBots] = useState([]);
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const storedEnlistedBots = localStorage.getItem("enlistedBots");
    if (storedEnlistedBots) {
      setEnlistedBots(JSON.parse(storedEnlistedBots));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("enlistedBots", JSON.stringify(enlistedBots));
  }, [enlistedBots]);

  const enlistBot = (bot) => {
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const releaseBot = (botId) => {
    setEnlistedBots(enlistedBots.filter((bot) => bot.id !== botId));
  };

  const dischargeBot = async (botId) => {
    try {
      // Perform API call to delete the bot from the backend
      const response = await fetch(` http://localhost:3000/bots/${botId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete bot from the backend.");
      }

      // Update the enlistedBots state by filtering out the discharged bot
      setEnlistedBots(enlistedBots.filter((bot) => bot.id !== botId));
      // Update the dischargedBots state with the discharged bot
      const botToDischarge = enlistedBots.find((bot) => bot.id === botId);
      setDischargedBots([...dischargedBots, botToDischarge]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <YourBotArmy
        enlistedBots={enlistedBots}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
}

export default App;
