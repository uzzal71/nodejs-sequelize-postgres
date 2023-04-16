import 'dotenv/config';
import app from './app';
import connect from './db';
import Service from './src/models/Service';
import Contact from './src/models/Contact';

const PORT = process.env.PORT || 3000;

// Project.sync({ force: true });
// Project.drop();

// Service.sync({ force: true })
// Service.drop();

// Contact.sync({ force: true });
// Contact.drop();

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