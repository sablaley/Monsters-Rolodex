import { Component, useEffect, useState } from "react";
import CardList from "./components/card-list/cardList.component";
import SearchBox from "./components/search-box/searchBox.component";
import './App.css'
import { getData } from "./utils/data.utils";

const App = () => {
  const [monsters, setMonsters] = useState([])
  const [searchString, setSearchString] = useState('')

  type Monster = {
    id: string;
    name: string;
    email: string;
  }
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((result) => this.setState(
  //       () => {
  //         this.setState({ monsters: result })
  //       }
  //     ))
  //   // .then((res)=>this.setState({users:res}))
  // }
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
    }
  }, [])

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase()
    // this.setState(
    //   () => {
    //     return { searchString: searchString }
    //   }
    // )
    setSearchString(searchString)
  }

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchString)
  })
  return (
    <>
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder="search monsters" className="monsters-search-box" />
      <CardList monsters={filteredMonsters} />
    </>
  )

}
export default App