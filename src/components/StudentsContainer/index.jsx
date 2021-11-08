import StudentsCard from "../StudentsCard";
import "./style.css";

function StudentsContainer({ showPlayers, players }) {
  return (
    <main className="mainContainer">
      {players.length === 0 ? (
        <div className="introduction"></div>
      ) : (
        <div className="mainContainer__players">
          {players.length > 0 &&
            players.map((player, index) => (
              <StudentsCard key={index} player={player} />
            ))}
        </div>
      )}

      <button onClick={() => showPlayers()}>Sortear</button>
    </main>
  );
}

export default StudentsContainer;
