import PropTypes from 'prop-types';

import '../SearchBox/search-box.styles.css';

const SearchBox = (props) =>{
  return (
<input 
          type= 'search' 
          className="search-box" 
          onKeyUp={props.keyUpFunction} 
          placeholder={props.placeHolderDetail} 
        />
  )
}
SearchBox.propTypes ={
  placeholder : PropTypes.string,
  keyUpFunction : PropTypes.object.isRequired,
}
export default SearchBox;
