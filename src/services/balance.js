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

export async function setBalance(balances) {
  const oldBalances = await db.get('balances');

  const updated = await db.put({ ...oldBalances, ...balances });
  balances._rev = updated.rev;
  return balances;
}
