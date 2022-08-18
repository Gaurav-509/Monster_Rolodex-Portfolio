import React, {Component} from "react";
import Card from "../Card/Card.component";
import "./card-list.styles.css";

class CardList extends Component{
  render(){
    return ( 
      <div className="card-list">
        {
          this.props.monsters.map((monster) => ( 
            <Card monster={monster}/>
          )) 
        } 
      </div> 
    )
  }
}
export default CardList;