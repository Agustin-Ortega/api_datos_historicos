import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const URL = process.env.URL;
const DB = process.env.DB;
const BASE = process.env.BASE;

export default{
    PORT,
    URL,
    DB,
    BASE,
};