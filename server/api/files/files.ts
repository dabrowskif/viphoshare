import express from 'express';
import { dbCreateFile } from '../../dbFunctions/files/files';

// TODO create req namespace for Express (do not use any!)

// import MulterS3 from 'multer-s3';
// declare namespace Express {
//     export interface Request {
//       file: Express.MulterS3.File;
//     }
//   }

export const uploadFile = async (req: any, res: express.Response): Promise<any> => {
    console.log('Uploading a video...');
    const fileAWSUrl = req?.file?.location;

    try {
        const newFile = await dbCreateFile(fileAWSUrl)

        res.status(201).json({ result: fileAWSUrl });
    } catch (error) {
        console.log('Error while uploading a video.');
        res.status(500).json({ message: error });
    }
}

// export const getFile = async (req: any, res: express.Response): Promise<any> => {
//     console.log('Downloading a video...');
//     const fileId = req?.params;

//     try {
//         const newFile = await dbCreateFile(fileAWSUrl)

//         res.status(201).json({ result: fileAWSUrl });
//     } catch (error) {
//         console.log('Error while uploading a video.');
//         res.status(500).json({ message: error });
//     }
// }
