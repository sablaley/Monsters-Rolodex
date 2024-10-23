import { Component } from "react";
import './search-box.style.css'
interface SearchProps {
    // onChangeHandler: (a: string)=> void
    placeholder?: string;
    className: string;
}
interface SearchProps {
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const SearchBox = ({ onChangeHandler, placeholder, className }: SearchProps) => {
    return (
        <input type="search"
            placeholder={placeholder}
            onChange={(e)=>onChangeHandler(e)}
            className={`search-box ${className}`} />
    )

}

export default SearchBox