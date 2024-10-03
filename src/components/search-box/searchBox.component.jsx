import { Component } from "react";
import './search-box.style.css'

class SearchBox extends Component {
    render() {
        const {onChangeHandler, placeholder , className} = this.props
        return (
            <input type="search" 
            placeholder={placeholder} 
            onChange={onChangeHandler} 
            className={`search-box ${className}`} />
        )
    }
}

export default SearchBox