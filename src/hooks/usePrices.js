import { useEffect, useState } from 'react';
import { getBTCPrice, getBTAPrice } from '../services/prices';

const useCoin = name => {
  const [coin, setter] = useState({ sell: 0, buy: 0, name });
  const coinSetter = payload => {
    setter({ ...payload, name });
  };
  return [coin, coinSetter];
};

export default function usePrices() {
  const [bta, setBtaPrice] = useCoin('br');
  const [btc, setBtcPrice] = useCoin('₿');

  useEffect(() => {
    getBTCPrice().then(prices => {
      setBtcPrice(prices);
    });
    getBTAPrice().then(prices => {
      setBtaPrice(prices);
    });
  }, []);

  return { bta, btc };
}
