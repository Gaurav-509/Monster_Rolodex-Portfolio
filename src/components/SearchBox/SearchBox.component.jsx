import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
  render(){
    return(
      <input 
        type={'search'} 
        className="search-box" 
        onKeyUp={this.props.keyUpFunction} 
        placeholder={this.props.placeHolderDetail} 
      />
    )
  }
}
export default SearchBox;