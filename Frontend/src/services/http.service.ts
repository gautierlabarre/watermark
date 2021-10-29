import axios from 'axios';
import type { Watermark } from '../types/watermark.type';
import type { Font } from '../types/font.type';

export default class Http {
    private static baseUrl = 'http://localhost:8088'; // Should be put somewhere else, like in the main.ts file (axios.defaultUrl...)

    /**
     * Send image to backend. (upload system)
     *
     * @param formData file image
     * @returns Promise
     */
    public static async sendImage(formData): Promise<string> {
        return axios.post(`${this.baseUrl}/sendImage`, formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then((response) => response.data);
    }

    /**
     * Generate watermark based on user input, with **watermarks** and **font** properties.
     *
     * @param path string
     * @param watermarks Watermark[]
     * @param font Font
     * @returns Promise
     */
    public static async generateWatermark(path: string, watermarks: Watermark[], font: Font): Promise<string> {
        return axios.post(`${this.baseUrl}/add-watermark`, { path, watermarks, font }, { headers: { 'Content-Type': 'application/json' } }).then((response) => response.data);
    }
}
