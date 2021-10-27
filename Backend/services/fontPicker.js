const Jimp = require("jimp");

module.exports = {
    selectBlackFontSize: (size) => {
        let font = Jimp.FONT_SANS_16_BLACK;

        switch (size) {
            case "small":
                font = Jimp.FONT_SANS_8_BLACK;
                break;
            case "normal":
                font = Jimp.FONT_SANS_16_BLACK;
                break;
            case "big":
                font = Jimp.FONT_SANS_32_BLACK;
                break;
            case "huge":
                font = Jimp.FONT_SANS_64_BLACK;
                break;
            case "massive":
                font = Jimp.FONT_SANS_128_BLACK;
                break;
        }

        return font;
    },

    selectWhiteFontSize: (size) => {
        let font = Jimp.FONT_SANS_16_WHITE;

        switch (size) {
            case "small":
                font = Jimp.FONT_SANS_8_WHITE;
                break;
            case "normal":
                font = Jimp.FONT_SANS_16_WHITE;
                break;
            case "big":
                font = Jimp.FONT_SANS_32_WHITE;
                break;
            case "huge":
                font = Jimp.FONT_SANS_64_WHITE;
                break;
            case "massive":
                font = Jimp.FONT_SANS_128_WHITE;
                break;
        }

        return font;
    },
};
