import FontSize from '../Enums/fontSize.enum';
import Jimp from 'jimp';

export default class FontPicker {
    /**
     * Select black font size
     * @param size string
     * @returns string
     */
    public static selectBlackFontSize(size: string): string {
        let font = Jimp.FONT_SANS_16_BLACK;

        switch (size) {
            case FontSize.SMALL:
                font = Jimp.FONT_SANS_8_BLACK;
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
            default:
                font = Jimp.FONT_SANS_16_BLACK;
                break;
        }

        return font;
    }

    /**
     * Select white font size
     * @param size string
     * @returns string
     */
    public static selectWhiteFontSize(size: string): string {
        let font = Jimp.FONT_SANS_16_WHITE;

        // eslint-disable-next-line default-case
        switch (size) {
            case FontSize.SMALL:
                font = Jimp.FONT_SANS_8_WHITE;
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
            default:
                font = Jimp.FONT_SANS_16_WHITE;
                break;
        }

        return font;
    }
}
