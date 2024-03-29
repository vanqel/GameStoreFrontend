import React from 'react'

import PropTypes from 'prop-types'

import './category-card.css'
import { useHistory } from 'react-router-dom';



const CategoryCard = ({ name, categoryImg, imageAlt, ct }) => {
  const history = useHistory();
  
  const handleRedirect = () => {
    console.log(ct)
    history.push(`/market?category=${ct}`);
  };

  return (
    <div onClick={handleRedirect} className="category-card">
      <img
        alt={imageAlt}
        src={categoryImg}
        className="category-card-image"
      />
      <span className="category-card-text">{name}</span>
    </div>
  );
};

CategoryCard.defaultProps = {
  categoryImg:
    'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxjaGFpcnxlbnwwfHx8fDE2NTI4MTgxODk&ixlib=rb-1.2.1&w=1500',
  imageAlt: 'image',
  name: 'Desks',
  ct: '#'
};

CategoryCard.propTypes = {
  categoryImg: PropTypes.string,
  imageAlt: PropTypes.string,
  name: PropTypes.string,
  ct: PropTypes.string
};

export default CategoryCard
