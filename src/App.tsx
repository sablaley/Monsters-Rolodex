import { Component, useEffect, useState,ChangeEvent } from "react";
import CardList from "./components/card-list/cardList.component";
import SearchBox from "./components/search-box/searchBox.component";
import './App.css'
import { getData } from "./utils/data.utils";

// Declare the Monster type outside the component
export type Monster = {
  id: string;
  name: string;
  email: string;
};


const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [searchString, setSearchString] = useState('')
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users)
    }
    fetchUsers()
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchString]);

  const onSearchChange = (event:ChangeEvent<HTMLInputElement>):void => {
    const searchString = event.target.value.toLowerCase()
    setSearchString(searchString)
  }

  
  return (
    <>
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder="search monsters" className="monsters-search-box" />
      <CardList monsters={filteredMonsters} />
    </>
  )

}
export default App