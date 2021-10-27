const express = require("express");
const app = express.Router();
const Jimp = require("jimp");
const multer = require("multer");
const path = require("path");
const fontPicker = require("../services/fontPicker");
const upload = multer({ dest: "upload/" });

// Fake route for test :)
app.get("/", (req, res) => {
    res.json("Welcome !");
});

app.post("/sendImage", upload.single("file"), (req, res) => {
    res.json(req.file.filename);
});

app.get("/showImage/:path", async (req, res) => {
    res.sendFile(path.resolve(path.resolve(__dirname, "../upload/" + req.params.path)));
});

/**
 * Change how it works, it should upload file in a folder and retrieve it.
 * Unless i keep the base64 to avoid keeping in the fs.
 */
app.post("/add-watermark", async (req, res) => {
    try {
        const image = await Jimp.read("./upload/" + req.body.path);

        // Minor hack for now to add only one font... (from first watermark)
        const font = await Jimp.loadFont(req.body.font.color === "black" ? fontPicker.selectBlackFontSize(req.body.font.size) : fontPicker.selectWhiteFontSize(req.body.font.size));

        req.body.watermarks.forEach(async (watermark) => {
            image.print(font, watermark.x, watermark.y, watermark.content);
        });

        //TODO Change the then into a const toto = ... res.json(toto)
        await image.getBase64(Jimp.AUTO, (err, base64) => {
            res.json(base64);
        });
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = app;
