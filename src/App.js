import "./App.css";
import { useState, useEffect } from "react";
import StudentsContainer from "./components/StudentsContainer/";

function App() {
  const [students, setStudents] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => {
        setStudents(response.filter((item) => item.image !== ""));
      });
  }, []);

  function showPlayers() {
    let list = [];

    for (let i = 0; i < 3; i++) {
      let min = Math.ceil(0);
      let max = Math.floor(students.length);

      let num = Math.floor(Math.random() * (max - min)) + min;
      list.push(students[num]);
    }

    setPlayers([...list]);
  }

  return (
    <div className="App">
      <main className="App-main">
        <header>
          <h2>Torneio tribruxo</h2>
        </header>
        <StudentsContainer players={players} showPlayers={showPlayers} />
      </main>
    </div>
  );
}

export default App;
