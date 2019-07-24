import React, { useEffect, useState, useContext } from 'react';
import PriceContext from '../contexts/price';
import PriceWidget from '../components/templates/price-widget';

export default function Prices() {
  const [current, setCurrent] = useState(true);
  const { btc, bta } = useContext(PriceContext);

  useEffect(
    () => {
      const timer = window.setTimeout(() => {
        setCurrent(!current);
      }, 10000);
      return () => {
        window.clearTimeout(timer);
      };
    },
    [current]
  );

  return <PriceWidget {...(current ? bta : btc)} />;
}
