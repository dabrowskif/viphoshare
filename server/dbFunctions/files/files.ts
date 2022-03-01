import FileModel from '../../models/file'

export const dbCreateFile = async (fileAWSUrl: string) => {
    const file = new FileModel({ url: fileAWSUrl });
    await file.save();

    return file;
};