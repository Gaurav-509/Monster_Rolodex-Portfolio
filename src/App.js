import { useState, useEffect } from "react";

import './App.css';

import SearchBox from './components/SearchBox/SearchBox.component';
import CardList from "./components/CardList/CardList.component";

const App = () => {
  const [Monsters, setMonster] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((monster) => { setMonster(monster) })
  }, []);


  const handleChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchField(searchValue);
  }

  const filteredMonsters = Monsters.filter((monster) => { return monster.name.toLowerCase().includes(searchField) })

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeHolderDetail={"Search Monster"} keyUpFunction={handleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}
export default App;