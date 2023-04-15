import 'dotenv/config';
import app from './app';
import connect from './db';
import Service from './src/models/Service';

const PORT = process.env.PORT || 3000;

// Project.sync({ force: true });
// Project.drop();

Service.sync({ force: true })

connect()
    .then(() => {
        app.listen(PORT, () => {
            connect();
            // sequelize.sync({ force: true });
            console.log('Database connected');
            console.log(`Server is running on http://localhost:3000`);
        });
    })
    .catch((err) => {
        console.log(err);
    });