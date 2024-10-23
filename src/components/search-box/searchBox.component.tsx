import { Component } from "react";
import './search-box.style.css'
interface ISearchProps {
    onChangeHandler: (a: string)=> void
    placeholder?: string
    className: string
}
const SearchBox = ({ onChangeHandler, placeholder, className }: ISearchProps) => {
    return (
        <input type="search"
            placeholder={placeholder}
            onChange={(e)=>onChangeHandler(e)}
            className={`search-box ${className}`} />
    )

}

export default SearchBox