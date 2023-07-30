import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {bots.map((bot) => (
        <div key={bot.id} className="flex justify-center">
          <BotCard bot={bot} />
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
