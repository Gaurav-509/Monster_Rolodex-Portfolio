import { Component } from 'react';
import './App.css';

import CardList from './components/CardList/CardList.component.jsx';
import SearchBox from './components/SearchBox/SearchBox.component.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    }
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((monster) => { this.setState(() => { return { monsters: monster } }, () => { console.log(monster.name) }) })
  }

  searchDetails = (event) => {
    const searchValue = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField: searchValue };
    })
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => { return monster.name.toLowerCase().includes(this.state.searchField) })
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox keyUpFunction={this.searchDetails} placeHolderDetail={"Enter Monster"} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}

export default App;
