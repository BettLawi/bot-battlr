// import React from "react";
// import BotCard from "./BotCard";

// function BotCollection({ bots }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
//       {bots.map((bot) => (
//         <div key={bot.id} className="flex justify-center">
//           <BotCard bot={bot} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default BotCollection;

import React from "react";
import BotCard from "./BotCard"; // Assuming you already have a BotCard component

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-6">Bot Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} enlistBot={enlistBot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;

