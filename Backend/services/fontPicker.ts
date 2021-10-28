import Jimp from "jimp";
import { FontSize } from "../Enums/fontSize.enum";

export default class FontPicker {
    public static selectBlackFontSize (size: string) {
        let font = Jimp.FONT_SANS_16_BLACK;

        switch (size) {
            case FontSize.SMALL:
                font = Jimp.FONT_SANS_8_BLACK;
                break;
            case FontSize.NORMAL:
                font = Jimp.FONT_SANS_16_BLACK;
                break;
            case FontSize.BIG:
                font = Jimp.FONT_SANS_32_BLACK;
                break;
            case FontSize.HUGE:
                font = Jimp.FONT_SANS_64_BLACK;
                break;
            case FontSize.MASSIVE:
                font = Jimp.FONT_SANS_128_BLACK;
                break;
        }

        return font;
    }

    public static selectWhiteFontSize (size: string) {
        let font = Jimp.FONT_SANS_16_WHITE;

        switch (size) {
            case FontSize.SMALL:
                font = Jimp.FONT_SANS_8_WHITE;
                break;
            case FontSize.NORMAL:
                font = Jimp.FONT_SANS_16_WHITE;
                break;
            case FontSize.BIG:
                font = Jimp.FONT_SANS_32_WHITE;
                break;
            case FontSize.HUGE:
                font = Jimp.FONT_SANS_64_WHITE;
                break;
            case FontSize.MASSIVE:
                font = Jimp.FONT_SANS_128_WHITE;
                break;
        }

        return font;
    }
}

