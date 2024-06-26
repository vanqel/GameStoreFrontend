import React from 'react'

import PropTypes from 'prop-types'

import './item-card.css'

import { useHistory } from 'react-router-dom';
const ItemCard = (props) => {
  const history = useHistory();
  
  const handleRedirect = () => {
    console.log(props.index)

    history.push(`/product?index=${props.index}`);
  };

  return (
    <div className={`item-card-gallery-card`} style={{margin:"1%", width:"200px", height:"300px"}}>
      <img
        src={props.imageSrc}
        style={{width:"150px",height:"300px",overflow:"hidden",objectFit:"cover" }}
      />
      <div className="item-card-container">
        <h3 className="item-card-text">{props.name}</h3>
        <div className="item-card-container2">
          <span className="item-card-currency">{props.currency}</span>
          <span className="item-card-value">{props.value}</span>
        </div>
        <button class="button" onClick={handleRedirect}>Узнать больше</button>
      </div>
    </div>
  )
}

ItemCard.defaultProps = {
  index: 1,
  name: 'Loading',
  imageSrc:
    '-',
  currency: 'Р',
  value: '0',
  rootClassName: '',
}

ItemCard.propTypes = {
  index: PropTypes.string,
  name: PropTypes.string,
  imageSrc: PropTypes.string,
  currency: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string,
}

export default ItemCard
