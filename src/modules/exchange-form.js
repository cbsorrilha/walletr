import React, { useContext, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import TransactionContext from '../contexts/transactions';
import { currencies } from '../helpers/currency';
import ExchangeFormTemplate from '../components/templates/exchange-form';

const getInitialValue = (balance, defaultInitialValue) => {
  return balance < defaultInitialValue ? balance : defaultInitialValue;
};

export default function ExchangeForm({ fromCurrency, toCurrency, btnLabel, balances }) {
  const balance = balances[fromCurrency];
  const [value, updateValue] = useState(getInitialValue(balance, currencies[fromCurrency].initialValue));
  const [sending, setSending] = useState(false);
  const { simulateTransaction, makeTransaction } = useContext(TransactionContext);
  const { addToast } = useToasts();

  const fromFormater = currencies[fromCurrency].formater;
  const toFormater = currencies[toCurrency].formater;
  const fromValidator = currencies[fromCurrency].validate;
  const fromCurrencySimbol = currencies[fromCurrency].simbol;
  const toCurrencySimbol = currencies[toCurrency].simbol;

  const validator = fromValidator(balance)(value);
  const error = validator !== null && validator;

  const allOfBalance = () => {
    updateValue(balance);
  };

  const onSubmit = (fromCurrency, toCurrency, value) => async e => {
    e.preventDefault();
    try {
      setSending(true);
      const transaction = await makeTransaction(fromCurrency, toCurrency, value);
      setSending(false);
      updateValue(0.0);
      addToast('Operação realizada com sucesso! :)', { autoDismiss: true, appearance: 'success' });
      return transaction;
    } catch (error) {
      addToast('Ops, tivemos um problema!', { autoDismiss: true, appearance: 'error' });
    }
  };

  return (
    <ExchangeFormTemplate
      btnLabel={btnLabel}
      sending={sending}
      balance={fromFormater(balance)}
      fromCurrencySimbol={fromCurrencySimbol}
      toCurrencySimbol={toCurrencySimbol}
      value={value}
      fromCurrency={fromCurrency}
      error={error}
      convertedResult={toFormater(simulateTransaction(fromCurrency, toCurrency, value))}
      allOfBalance={allOfBalance}
      onChange={e => updateValue(e.target.value)}
      onSubmit={onSubmit(fromCurrency, toCurrency, value)}
    />
  );
}
