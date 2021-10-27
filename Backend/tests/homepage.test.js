const request = require("supertest");
const app = require("../server-test");

/**
 * Tests for ByDates API
 */
describe("Homepage API", () => {
    it("should display a 200", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual("Welcome !");
    });
});
