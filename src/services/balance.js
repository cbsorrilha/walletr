// here goes the balance server
import PouchDB from 'pouchdb';

const db = new PouchDB('http://localhost:5984/kittens');

export function getBalance() {
  return db.get('balance');
}

export async function setBalance() {
  const balance = await db.get('balance');
  balance;
  return db.put('balance');
}
