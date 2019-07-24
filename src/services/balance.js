// here goes the balance server
import PouchDB from 'pouchdb';

const db = new PouchDB('balances');

async function createBalances() {
  const initialBalances = {
    _id: 'balances',
    BRL: 100000,
    BTC: 0,
    BTA: 0,
  };
  try {
    await db.put(initialBalances);
    return db.get('balances');
  } catch (error) {
    throw new Error('Setup failed ', error);
  }
}

export async function getBalances() {
  try {
    return await db.get('balances');
  } catch (err) {
    if (err.name === 'not_found') {
      return createBalances();
    }
    throw err;
  }
}

export async function setBalance(coin, value) {
  const balances = await db.get('balances');

  if (!balances[coin]) {
    throw new Error('Not a valid coin');
  }

  balances[coin] = value;

  return db.put('balance');
}
