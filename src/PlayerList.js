import Player from "./Player";
import players from "./players";

// Looping the array to create a different card for each player
const PlayerList = () => {
    return (
      <div>
        {players.map((person) => (
          <Player
            key={person.id} // Use a unique identifier as the key
            name={person.name}
            age={person.age}
            team={person.team}
            jerseyNumber={person.jerseyNumber}
            image={person.image}
          />
        ))}
      </div>
    );
  };

export default PlayerList

// let PlayerList = players.map((person) => {
//     return(
//         <Player name={person.name} age={person.age} team={person.team} jerseyNumber={person.jerseyNumber} image={person.image}/>
//     )
// })