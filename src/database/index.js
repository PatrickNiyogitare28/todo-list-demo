import 'dotenv/config';
import mongoose from 'mongoose';

const enviroment = process.env.NODE_ENV;
// database url according to environment 
const dev_db_url = process.env.DEVELOPMENT_DB;
const prod_db_url = process.env.PRODUCTION_DB;
const test_db_url = process.env.TEST_DB;

const connectionUrl = (enviroment=='dev') ? dev_db_url : (enviroment == 'test') ? test_db_url : prod_db_url;

mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("App connected to Mongodb successfully")
})
.catch((e) => {
    console.log("Mongodb connection error "+e.message);
})