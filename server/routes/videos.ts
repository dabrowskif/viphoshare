import express from 'express'
import { uploadVideo } from '../api/videos/videos';

const router = express.Router();

router.post('/uploadVideo', uploadVideo);

export default router;
