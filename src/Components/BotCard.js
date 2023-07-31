// import React from "react";

// function BotCard({ bot,enlistBot, dischargeBot }) {
//   return (
//     <div className="grid grid-cols-5 gap-4 p-4 bg-white rounded shadow-md">
//       <div className="col-span-2">
//         <img
//           alt="OH NO"
//           src={bot.avatar_url}
//           className="w-full h-auto rounded-lg filter saturate-150 contrast-125"
//         />
//       </div>
//       <div className="col-span-3 space-y-2">
//         <h2 className="text-xl font-semibold">{bot.name}</h2>
//         <p className="text-gray-600 line-clamp-5">{bot.catchphrase}</p>
//         <p className="text-green-500 font-semibold">Health: {bot.health}</p>
//         <p className="text-red-500 font-semibold">Damage: {bot.damage}</p>
//         <p className="text-blue-500 font-semibold">Armor: {bot.armor}</p>
//         <button onClick={enlistBot} className="bg-green-500 text-white rounded px-4 py-2">
//             Add To Army
//         </button>
//         <button
//           onClick={() => dischargeBot(bot)}
//           className="bg-red-500 text-white rounded px-4 py-2"
//         >
//           Discharge
//         </button>
//       </div>
//     </div>
//   );
// }

// export default BotCard;


import React from "react";

function BotCard({ bot, enlistBot }) {
  return (
    <div className="grid grid-cols-5 gap-4 p-4 bg-green-100 rounded shadow-md">
      <div className="col-span-2">
        <img
          alt="OH NO"
          src={bot.avatar_url}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="col-span-3 space-y-2">
        <div className="text-xl font-semibold">{bot.name}</div>
        <div className="text-gray-600 line-clamp-2">{bot.catchphrase}</div>
        <div className="text-green-500 font-semibold">Health: {bot.health}</div>
        <div className="text-red-500 font-semibold">Damage: {bot.damage}</div>
        <div className="text-blue-500 font-semibold">Armor: {bot.armor}</div>
        <button
          onClick={() => enlistBot(bot)}
          className="bg-green-500 text-white rounded px-4 py-2"
        >
          Add to army
        </button>
      </div>
    </div>
  );
}

export default BotCard;

