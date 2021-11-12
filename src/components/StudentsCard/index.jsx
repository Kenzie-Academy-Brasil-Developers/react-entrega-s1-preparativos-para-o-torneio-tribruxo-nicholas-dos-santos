import "./style.css";

function StudentsCard({ player }) {
  let pHouse = "";
  if (player.house === "Gryffindor") {
    pHouse = "red";
  } else if (player.house === "Slytherin") {
    pHouse = "green";
  } else if (player.house === "Hufflepuff") {
    pHouse = "yellow";
  } else {
    pHouse = "blue";
  }

  return (
    <div className="card">
      <div className="div__img" id={pHouse}>
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
