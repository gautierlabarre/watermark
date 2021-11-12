import FontColor from '../Enums/fontColor.enum';
import express, { Request, Response } from 'express';
import Jimp from 'jimp';
import multer from 'multer';
import path from 'path';
import fontPicker from '../services/fontPicker';
import { Watermark } from '../types/watermark.type';

const app = express.Router();
const upload = multer({ dest: 'upload/' });

// Fake route for test :)
app.get('/', (req: Request, res: Response) => {
    res.json('Welcome !');
});

/**
 * Send image API used for upload file.
 * Only one file is allowed (upload.single)
 */
app.post('/sendImage', upload.single('file'), (req: Request, res: Response) => {
    res.json(req?.file?.filename);
});

/**
 * Display the image with the specified path
 */
app.get('/showImage/:path', async (req: Request, res: Response) => {
    res.sendFile(path.resolve(path.resolve(__dirname, `../upload/${req.params.path}`)));
});

/**
 * Add watermark(s) to a specific image and returns a base64.
 * ? Change how it works, it should upload file in a folder and retrieve it.
 * ? Unless i keep the base64 to avoid keeping in the fs.
 */
app.post('/add-watermark', async (req: Request, res: Response) => {
    try {
        const image = await Jimp.read(`./upload/${req.body.path}`);

        const font = await Jimp.loadFont(
            req.body.font.color === FontColor.BLACK
                ? fontPicker.selectBlackFontSize(req.body.font.size)
                : fontPicker.selectWhiteFontSize(req.body.font.size),
        );

        req.body.watermarks.forEach(async (watermark: Watermark) => {
            image.print(font, watermark.x, watermark.y, watermark.content);
        });

        // @ts-ignore
        image.getBase64(Jimp.AUTO, (err: unknown, base64: string) => {
            if (err) {
                res.status(500).json(err);
            }

            res.json(base64);
        });
    } catch (e) {
        res.status(500).json(e);
    }
});

export default app;
