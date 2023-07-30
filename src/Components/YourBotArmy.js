import React from "react";

function YourBotArmy({ enlistedBots, releaseBot, dischargeBot }) {
  return (
    <div className="bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Your Bot Army</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {enlistedBots.map(({ id, name, avatar_url, catchphrase, health, damage, armor }) => (
          <div key={id} className="bg-white rounded shadow-md p-4">
            <img
              alt="OH NO"
              src={avatar_url}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-xl font-semibold">{name}</div>
            <div className="text-gray-600 line-clamp-2">{catchphrase}</div>
            <div className="text-green-500 font-semibold">
              Health: {health}
            </div>
            <div className="text-red-500 font-semibold">
              Damage: {damage}
            </div>
            <div className="text-blue-500 font-semibold">
              Armor: {armor}
            </div>
            <button
              onClick={() => releaseBot(id)}
              className="bg-blue-500 text-white rounded px-4 py-2 mt-4"
            >
              Release
            </button>
            <button
              onClick={() => dischargeBot(id)}
              className="bg-red-500 text-white rounded px-4 py-2 mt-4"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;

