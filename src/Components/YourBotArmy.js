import React from "react";

function YourBotArmy({ yourBotArmy }) {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-6">Your Bot Army</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {/* Render enlisted bots */}
        {enlistedBots.map((bot) => (
          <div key={bot.id} className="bg-white rounded shadow-md p-4">
            <img
              alt="OH NO"
              src={bot.avatar_url}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-xl font-semibold">{bot.name}</div>
            <div className="text-gray-600 line-clamp-2">{bot.catchphrase}</div>
            <div className="text-green-500 font-semibold">
              Health: {bot.health}
            </div>
            <div className="text-red-500 font-semibold">
              Damage: {bot.damage}
            </div>
            <div className="text-blue-500 font-semibold">
              Armor: {bot.armor}
            </div>
            <button
              onClick={() => releaseBot(bot)}
              className="bg-blue-500 text-white rounded px-4 py-2 mt-4"
            >
              Release
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;


