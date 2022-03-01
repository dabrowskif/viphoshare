import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "eu-central-1"
});


export const uploadS3 = multer({
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: 'viphoshare',
        key: (req, file, cb) => {
            cb(null, Date.now().toString() + '-' + file.originalname)
        }
    })
});
