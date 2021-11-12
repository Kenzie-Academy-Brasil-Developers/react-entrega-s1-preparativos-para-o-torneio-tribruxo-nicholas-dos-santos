import "./App.css";
import { useState, useEffect } from "react";
import StudentsContainer from "./components/StudentsContainer/";

function App() {
  const [students, setStudents] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => {
        setStudents(response.filter((item) => item.image !== ""));
      });
  }, []);

  function showPlayers() {
    let list = [];

    while (list.length < 3) {
      let min = Math.ceil(0);
      let max = Math.floor(students.length);

      let num = Math.floor(Math.random() * (max - min)) + min;

      const value = list.some((item) => item.house === students[num].house);

      if (value === false) {
        list.push(students[num]);
        console.log(list.length);
      }
    }

    setPlayers(list);
  }

  return (
    <div className="App">
      <StudentsContainer showPlayers={showPlayers} players={players} />
    </div>
  );
}

export default App;

// Integrar as respostas da API na interface da sua aplicação de forma aleatória
// Acessar, requisitar e renderizar três objetos referentes ao endpoint students através da API
// Ao renderizar um objeto de students, você deverá utilizar pelo menos o item name e mais dois itens, exemplo:
