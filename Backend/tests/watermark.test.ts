import request from 'supertest';
import app from '../app-test'

/**
 * Tests for *add-watermark* API
 */
const data = [
    {
        font: {
            size: "normal",
            color: "black",
        },
        watermarks: [{ x: 10, y: 10, content: "coucou" }],
        statusCode: 200,
    },
    {
        font: {
            size: "normal",
            color: "white",
        },
        watermarks: [{ x: 10, y: 10, content: "coucou" }],
        statusCode: 200,
    },
    {
        font: {
            size: "small",
            color: "white",
        },
        watermarks: [{ x: 10, y: 10, content: "coucou" }],
        statusCode: 200,
    },
    {
        font: {
            size: "big",
            color: "white",
        },
        watermarks: [{ x: 10, y: 10, content: "coucou" }],
        statusCode: 200,
    },
    {
        font: {
            size: "huge",
            color: "white",
        },
        watermarks: [{ x: 10, y: 10, content: "coucou" }],
        statusCode: 200,
    },
    {
        font: {
            size: "massive",
            color: "white",
        },
        watermarks: [{ x: 10, y: 10, content: "coucou" }],
        statusCode: 200,
    },
    {
        font: {
            size: "small",
            color: "black",
        },
        watermarks: [{ x: 10, y: 10, content: "coucou" }],
        statusCode: 200,
    },
    {
        font: {
            size: "big",
            color: "black",
        },
        watermarks: [{ x: 10, y: 10, content: "coucou" }],
        statusCode: 200,
    },
    {
        font: {
            size: "huge",
            color: "black",
        },
        watermarks: [{ x: 10, y: 10, content: "coucou" }],
        statusCode: 200,
    },
    {
        font: {
            size: "massive",
            color: "black",
        },
        watermarks: [{ x: 10, y: 10, content: "coucou" }],
        statusCode: 200,
    },
    {
        font: null,
        watermarks: [{ x: 10, y: 10, content: "coucou" }],
        statusCode: 500,
    },
];

describe.each(data)(`Add watermark with`, (a) => {
    jest.setTimeout(10 * 10000);
    it(`font ${a?.font?.color} and ${a?.font?.size}`, async () => {
        const res = await request(app).post("/sendImage").set("content-type", "multipart/form-data").attach("file", `${__dirname}/favicon.png`);
        const res2 = await request(app).post("/add-watermark").send({ path: res.body, watermarks: a.watermarks, font: a.font });
        
        expect(res2.statusCode).toEqual(a.statusCode);
    });
});
