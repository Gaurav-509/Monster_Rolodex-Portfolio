import PropTypes from "prop-types";

import './card.styles.css';

const Card = (props) => {
  return (
    <div className="card-container" key={props.monsterDetail.id}>
          <img
            src={`https://robohash.org/${props.monsterDetail.id}?set=set2&size=180x180`}
            alt="monster"
          />
          <h2>{props.monsterDetail.name}</h2>
          <p>{props.monsterDetail.email}</p>
    </div>
  )
}

Card.propTypes={
  name : PropTypes.string,
  id : PropTypes.number,
  
}
export default Card;