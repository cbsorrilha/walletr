import format from 'date-fns/format';
import isSunday from 'date-fns/is_sunday';
import isSaturday from 'date-fns/is_saturday';
import subDays from 'date-fns/sub_days';
import { request } from '../helpers/request';

const getPriceDate = day => {
  if (isSunday(day)) {
    return format(subDays(day, 2), 'MM-DD-YYYY');
  }
  if (isSaturday(day)) {
    return format(subDays(day, 1), 'MM-DD-YYYY');
  }
  return format(day, 'MM-DD-YYYY');
};
const BTCAPIUrl = 'https://www.mercadobitcoin.net/api/BTC/ticker/';
const BTAAPIUrl = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${getPriceDate(
  new Date()
)}%27&$format=json`;

export async function getBTCPrice() {
  const { data } = await request(BTCAPIUrl);
  const { buy, sell } = data.ticker;
  return { buy, sell, date: getPriceDate(new Date()) };
}

export async function getBTAPrice() {
  const { data } = await request(BTAAPIUrl);
  const [{ cotacaoCompra, cotacaoVenda }] = data.value;
  return {
    buy: cotacaoCompra,
    sell: cotacaoVenda,
    date: getPriceDate(new Date()),
  };
}
