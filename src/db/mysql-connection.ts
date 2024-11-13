import mysql from 'mysql2/promise';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE} from '../shared/contants';

let connectionIntance: mysql.Pool | null = null;

export async function createConnection() {
  if (!connectionIntance) {
    connectionIntance = mysql.createPool(
      {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE
      }
    );
  }

  return connectionIntance;
}

export const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
  },
});
