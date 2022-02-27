import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// import userRoutes from './routes/user.js';

const app = express();
dotenv.config();

app.use(cors());

// app.use('/user', userRoutes);
// app.use('/videos', videosRoutes);

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.CONNECTION_URL || '')
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error));
