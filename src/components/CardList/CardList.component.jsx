import PropTypes from "prop-types";

import Card from "../Card/Card.component";
import './card-list.styles.css';

const CardList = (props) => {
  return(
          <div className="card-list">
            {props.monsters.map((monster) => ( 
              <Card monsterDetail={monster}/>
              )) 
            } 
          </div>
      )
}

CardList.propTypes={
  monsterDetail: PropTypes.object,
}

export default CardList;