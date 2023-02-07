import express from 'express';
import cors from 'cors';
import conn from './conn/conn.js';
import router from './routes/routes.js';
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors())
app.use(router)
app.use(express.urlencoded({extended:true}))

try {
    await conn.authenticate();
    await conn.sync(true)
    console.log("Connection has been established successfully.")
} catch (error) {
    console.log('Unable to connect to the database: ', error)

}

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})