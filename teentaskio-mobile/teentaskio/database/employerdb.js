import SQLite from 'react-native-sqlite-storage';

const databaseName = 'TeenTaskio.db';
const databaseVersion = '1.0';
const databaseDisplayName = 'TeenTaskio Database';

const db = SQLite.openDatabase(
  databaseName,
  databaseVersion,
  databaseDisplayName
);

export function initEmployerDB() {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS employers (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT, type TEXT, companyName TEXT, yearStarted INTEGER, firstName TEXT, lastName TEXT,dob TEXT, age INTEGER)',
      [],
      () => console.log('Employers table created successfully.'),
      (error) => console.log('Error creating employers table: ', error)
    );
  });
}
export function addCompanyEmployer(username, password, companyName, yearStarted) {
    return new Promise((resolve, reject) => {
      const type = 'company';
      const firstName = null;
      const lastName = null;
      const dob = null; 
      const age = null; 
  
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO employer(username, password, type, companyName, yearStarted, firstName, lastName, dob, age) VALUES (?,?,?,?,?,?,?,?,?)',
          [username, password, type, companyName, yearStarted, firstName, lastName, dob, age],
          (_, { insertId }) => resolve(insertId),
          (_, error) => reject(error),
        );
      });
    });
  }
  export function addPersonalEmployer(username, password, firstName, lastName, dob, age) {
    return new Promise((resolve, reject) => {
      const type = 'personal';
      const companyName = null; 
      const yearStarted = null; 
  
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO employer(username, password, type, companyName, yearStarted, firstName, lastName, dob, age) VALUES (?,?,?,?,?,?,?,?,?)',
          [username, password, type, companyName, yearStarted, firstName, lastName, dob, age],
          (_, { insertId }) => resolve(insertId),
          (_, error) => reject(error),
        );
      });
    });
  }