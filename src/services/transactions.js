import PouchDB from 'pouchdb';

const db = new PouchDB('transactions');

export const createTransaction = async ({ fromCurrency, toCurrency, value, convertedValue, time }) => {
  db.post({ fromCurrency, toCurrency, value, convertedValue, time });
};

export const getTransactions = async () => {
  return await db.allDocs({ include_docs: true });
};
