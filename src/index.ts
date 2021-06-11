import app from './app';
// import { createConnection } from 'typeorm';

async function init(): Promise<void> {
    try {
        // const con = await createConnection();
        console.log('Postgres is Online');
        // createData(con);
    } catch (err) {
        console.log('Error Creating Postgres Connection:', err.message)
    }

    app.listen(app.get('port'));
    console.log(`Server is running on: http//:127.0.0.1:${app.get('port')}`);
}

init();
