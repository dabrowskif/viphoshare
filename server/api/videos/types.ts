export interface Video {
    name: string,
    createdAt: string,
}

export interface IVideoRequest extends Request, Video { }

export interface IVideoResponse extends Response, Video {
error?: (code: number, message: string) => Response;
    success?: (code: number, message: string, result: any) => Response
}
