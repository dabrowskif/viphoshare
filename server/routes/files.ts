import express, { Router } from 'express'

import { uploadFile } from '../api/files/files';
import { uploadS3 } from '../api/multer/multer';

const router = express.Router();

router.post('/upload', uploadS3.single('file'), uploadFile);

export default router;
