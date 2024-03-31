import React, {useEffect, useState} from 'react'

import getLink from "../api/kassa-api";
import PropTypes from 'prop-types'
import './item-page.css'
import {useHistory} from "react-router-dom";

const ItemPage = ({props, handleSubmit}) => {

  return (
      <div className={`item-card-gallery-card ${props.rootClassName} `}>
        <div className="item-card-container">
          <div>
            <img
                src={props.imageSrc}
                style={{maxHeight:"300px"}}
            />
          </div>
          <br/>
          <div className="item-card-details" style={{
            display:"contents",
            width: "500px",
            justifyContent: "center",
            textAlign: "center"}}>
            <h3 className="item-card-text">{props.name}</h3>
            <p>{props.description}</p>
            <div className="item-card-container2">
              <span className="item-card-currency">{props.currency}</span>
              <span className="item-card-value">{props.value}</span>
            </div>
            <button className="button" onClick={handleSubmit}>Купить</button>

          </div>
        </div>
      </div>
  )
}

ItemPage.defaultProps = {
  index: 1,
  name: 'Loading',
  imageSrc:
      '-',
  currency: 'Р',
  value: '0',
  description: '',
}

ItemPage.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  imageSrc: PropTypes.string,
  currency: PropTypes.string,
  value: PropTypes.number,
  description: PropTypes.string,
}

export default ItemPage
