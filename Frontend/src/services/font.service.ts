import type { Font as FontType } from '../types/font.type';
import FontSize from '../Enums/fontSize.enum';

export default class Font {
    /**
     * Magic method with weird numbers to adhere to what JIMP will display really.
     */
    public static shiftCorrector(font: FontType) {
        let shift = 10;

        switch (font.size) {
            case FontSize.SMALL:
                shift = 10;
                break;
            case FontSize.BIG:
                shift = 30;
                break;
            case FontSize.HUGE:
                shift = 22;
                break;
            case FontSize.MASSIVE:
                shift = 10;
                break;
            default:
                shift = 33;
                break;
        }

        return shift;
    }
}
