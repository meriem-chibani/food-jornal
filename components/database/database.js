import * as SQLite from 'expo-sqlite';

let db;
let isInitialized = false;

const openDatabase = async () => {
  if (!db) {
    db = await SQLite.openDatabaseAsync('data.db');
  }
  return db;
};

const executeSql = async (query, params = []) => {
  try {
    const database = await openDatabase();
    
    if (query.trim().toUpperCase().startsWith('SELECT')) {
      const result = await database.getAllAsync(query, params);
      return result || []; // Always return an array
    } else {
      const result = await database.runAsync(query, params);
      return {
        rowsAffected: result?.changes || 0,
        lastInsertRowId: result?.lastInsertRowId || null
      };
    }
  } catch (error) {
    console.error('SQL execution error:', error);
    throw error;
  }
};

const initDatabase = async () => {
  if (isInitialized) return true;

  try {
    await executeSql(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        password TEXT
      );
    `);

     // Add journals table creation
    await executeSql(`
      CREATE TABLE IF NOT EXISTS journal (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER,
        imageUri TEXT,  
        text TEXT,      
        date TEXT,
        category TEXT,
        FOREIGN KEY(userId) REFERENCES users(id)
      );
    `);
    
    isInitialized = true;
    return true;
  } catch (error) {
    console.error('Database initialization error:', error);
    throw error;
  }
};

export { initDatabase, executeSql };