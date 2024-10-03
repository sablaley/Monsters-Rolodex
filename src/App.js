import { Component } from "react";
import CardList from "./components/card-list/cardList.component";
import SearchBox from "./components/search-box/searchBox.component";
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchString: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) => this.setState(
        () => {
          this.setState({ monsters: result })
        }
      ))
    // .then((res)=>this.setState({users:res}))
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase()
    this.setState(
      () => {
        return { searchString: searchString }
      }
    )
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchString)
    })
    return (
      <>
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox onChangeHandler={this.onSearchChange}  placeholder="search monsters" className = "monsters-search-box" />
        <CardList monsters={filteredMonsters} />
      </>
    )
  }
}
export default App