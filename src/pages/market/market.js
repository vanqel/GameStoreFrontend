import React from 'react'

import { useLocation } from 'react-router-dom';

import WidgetMarket from '../../widget/market/market'

const Market = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  return (
    <WidgetMarket category={`${category}`}/>
  )
}

export default Market
