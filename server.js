import express from 'express';
import connect from './db';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3000`);
    connect();
});