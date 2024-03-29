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
    <div className={`item-card-gallery-card ${props.rootClassName} `}>
      <img
        src={props.imageSrc}
        className="item-card-image"
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
  name: 'Project Title',
  imageSrc:
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&w=1500',
  currency: 'Р',
  value: '500',
  rootClassName: '',
}

ItemCard.propTypes = {
  index: PropTypes.string,
  name: PropTypes.string,
  imageSrc: PropTypes.string,
  currency: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ItemCard
