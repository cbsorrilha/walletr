import React, { useEffect, useState } from 'react';
import PriceContext from '../contexts/price';
import PriceWidget from '../components/templates/price-widget';

export default function Prices() {
  const [current, setCurrent] = useState(true);

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

  return <PriceContext.Consumer>{({ btc, bta }) => <PriceWidget {...(current ? bta : btc)} />}</PriceContext.Consumer>;
}
