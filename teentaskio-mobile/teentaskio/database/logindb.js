import SQLite from 'react-native-sqlite-storage';

const databaseName = 'TeenTaskio.db';
const databaseVersion = '1.0';
const databaseDisplayName = 'TeenTaskio Database';

const db = SQLite.openDatabase(
  databaseName,
  databaseVersion,
  databaseDisplayName
);

export function initLoginDB() {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)',
      [],
      () => console.log('Users table created successfully.'),
      (error) => console.log('Error creating users table: ', error)
    );
  });
}

export function login(username, password) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows.item(0));
          } else {
            reject('Invalid credentials');
          }
        },
        (_, error) => reject(error)
      );
    });
  });
}