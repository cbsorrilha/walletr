import React from 'react';

const PricesContext = React.createContext({ btc: { sell: 0, buy: 0 }, bta: { sell: 0, buy: 0 } });

export default PricesContext;
