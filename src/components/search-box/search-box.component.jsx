import { Component } from "react";
import "./search-box.styles.css"

class SearchBox extends Component{
    render(){
        console.log("rendering search box");
        return(
            <input
          className={`${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
        )
    }
}

export default SearchBox