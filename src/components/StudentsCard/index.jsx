import "./style.css";

function StudentsCard({ player }) {
  return (
    <div className="card">
      <div className="div__img">
        <img src={player.image} />
      </div>
      <hr />
      <div className="card__infos">
        <h2>{player.name}</h2>
        <p>{player.house}</p>
        <p>{player.dateOfBirth}</p>
      </div>
    </div>
  );
}

export default StudentsCard;
