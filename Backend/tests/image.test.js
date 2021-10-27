const request = require("supertest");
const app = require("../server-test");
const fs = require("fs");
const fsExtra = require("fs-extra");

/**
 * Tests for ByDates API
 */

beforeAll(() => {
    // We clean the upload directory before.
    fsExtra.emptyDirSync(`${__dirname}/../upload/`);
});

describe("Send Image API", () => {
    it("should return 200 when image is uploaded", async () => {
        const res = await request(app).post("/sendImage").set("content-type", "multipart/form-data").attach("file", `${__dirname}/favicon.png`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(32);
        expect(fs.existsSync(`${__dirname}/../upload/${res.statusCode}`)).toBe(false);
        expect(fs.existsSync(`${__dirname}/../upload/${res.body}`)).toBe(true);
    });

    it("should return 500 when no image is uploaded", async () => {
        const res = await request(app).post("/sendImage").set("content-type", "multipart/form-data").attach("file", "");
        expect(res.statusCode).toEqual(500);
        expect(res.body).toEqual({});
    });
});

/**
 * Tests for ByDates API
 */
describe("Show Image API", () => {
    it("should return 404 when the image does not exist", async () => {
        const res = await request(app).get("/showImage/rfi");
        expect(res.statusCode).toEqual(404);
    });

    it("should return 200 when the image exist", async () => {
        const res = await request(app).post("/sendImage").set("content-type", "multipart/form-data").attach("file", `${__dirname}/favicon.png`);
        expect(res.statusCode).toEqual(200);

        const res2 = await request(app).get(`/showImage/${res.body}`);
        expect(res2.statusCode).toEqual(200);
    });
});

afterAll(() => {
    fsExtra.emptyDirSync(`${__dirname}/../upload/`);
});
