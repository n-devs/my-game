import Dexie from 'dexie';

const db = new Dexie('gameDB');
db.version(1).stores({ character: '++id,name' });

export default db;