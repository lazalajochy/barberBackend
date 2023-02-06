import express from 'express';
import cors from 'cors';
import conn from './conn/conn.js';
import router from './routes/routes.js';

const app = express();
app.use(express.json());
app.use(cors())
app.use('/api',router)
app.use(express.urlencoded({extended:true}))

try {
    await conn.authenticate();
    await conn.sync(true)
    console.log("Connection has been established successfully.")
} catch (error) {
    console.log('Unable to connect to the database: ', error)

}

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})