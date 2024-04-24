import dotenv from 'dotenv';
import express from 'express';
import userRoute from "./routes/auth";
import cors from 'cors';
import { connectDB } from './utils/features';

const app = express();
app.use(cors());

dotenv.config();
const PORT=process.env.PORT||5000;
connectDB(process.env.MONGO_URI);

app.get('/api/v1', userRoute);


app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
