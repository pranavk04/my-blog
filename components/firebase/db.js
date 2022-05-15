import app from './client'
import { getFirestore } from 'firebase/firestore'

const db = getFirestore(app);

export default db;