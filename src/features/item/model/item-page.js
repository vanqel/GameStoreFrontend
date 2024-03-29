import React from 'react'

import PropTypes from 'prop-types'

import './item-page.css'

const ItemPage = (props) => {
  return (
    <div className={`item-card-gallery-card ${props.rootClassName} `}>
      <img
        src={props.imageSrc}
        className="item-card-image"
      />
      <div className="item-card-container">
        <h3 className="item-card-text">{props.name}</h3>
        <p>{props.description}</p>
        <div className="item-card-container2">
          <span className="item-card-currency">{props.currency}</span>
          <span className="item-card-value">{props.value}</span>
        </div>
        <a href={`https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=robo-demo-test&InvId=0&IsTest=1&Culture=ru&Encoding=utf-8&OutSum=10000&Receipt=%257B%2522items%2522%253A%255B%257B%2522name%2522%253A%2522%25D0%2594%25D0%25BE%25D0%25BA%25D1%2583%25D0%25BC%25D0%25B5%25D0%25BD%25D1%2582%25D0%25B0%25D1%2586%25D0%25B8%25D1%258F%2520Robokassa%2522%252C%2522quantity%2522%253A1%252C%2522sum%2522%253A5000%252C%2522payment_method%2522%253A%2522full_payment%2522%252C%2522payment_object%2522%253A%2522payment%2522%252C%2522tax%2522%253A%2522vat20%2522%257D%252C%257B%2522name%2522%253A%2522%25D0%2594%25D0%25BE%25D0%25BA%25D1%2583%25D0%25BC%25D0%25B5%25D0%25BD%25D1%2582%25D0%25B0%25D1%2586%25D0%25B8%25D1%258F%2520Robo.market%2522%252C%2522quantity%2522%253A1%252C%2522sum%2522%253A5000%252C%2522payment_method%2522%253A%2522full_payment%2522%252C%2522payment_object%2522%253A%2522payment%2522%252C%2522tax%2522%253A%2522vat20%2522%257D%255D%257D&SignatureValue=bd7588af055879f93d48276fe07cd0fe`} ><button class="button">Купить</button></a>
      </div>
    </div>
  )
}

ItemPage.defaultProps = {
  index: 1,
  name: 'Project Title',
  imageSrc:
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&w=1500',
  currency: 'Р',
  value: '500',
  rootClassName: '',
  description: ''
}

ItemPage.propTypes = {
  index: PropTypes.string,
  name: PropTypes.string,
  imageSrc: PropTypes.string,
  currency: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ItemPage
