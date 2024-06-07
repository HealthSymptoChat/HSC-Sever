import express from "express"
import route from "./routers/index.js";
import db from "./config/database/index.js";
import dotenv from "dotenv";  
import cors from "cors";
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:false})); 
app.use(cors());

const PORT = process.env.PORT || 5000;


dotenv.config();

await db.connect();

route(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Link: https://localhost:${PORT}`);
  // Fix server 13
});