import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool();

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/db', async (_req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.status(200).json({ time: result.rows[0].now });
  } catch (error) {
    console.error('Database query failed:', error);
    res.status(500).json({ error: 'Database query failed' });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
