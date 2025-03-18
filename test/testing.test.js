const request = require("supertest");
const express = require("express");
const app = require("../path/to/your/app"); // Update with the correct path to your Express app

describe("Basic API Test", () => {
    test("GET / should return a 200 status code", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });
});
