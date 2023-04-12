import 'dotenv/config';
import app from './app';
import connect from './db';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3000`);
    connect();
});