const request = require("supertest");
const express = require("express");
const app = require("../path/to/your/app"); // Update with the correct path to your Express app

describe("Event Planner API Tests", () => {
    
    test("GET / should return welcome message", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Welcome to the Event Planner");
    });

    test("POST /create_user should create a user", async () => {
        const newUser = { name: "Alice", email: "alice@example.com" };
        const response = await request(app).post("/create_user").send(newUser);
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty("id");
        expect(response.body.name).toBe(newUser.name);
        expect(response.body.email).toBe(newUser.email);
    });

    test("POST /create_event/:userId should create an event", async () => {
        const newEvent = {
            name: "Birthday Party",
            description: "Alice's birthday celebration",
            date: "2025-04-01",
            time: "18:00",
            category: "Birthdays"
        };
        const response = await request(app).post("/create_event/1").send(newEvent);
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty("event_id");
        expect(response.body.name).toBe(newEvent.name);
    });

    test("GET /view_events/:userId should return events for a user", async () => {
        const response = await request(app).get("/view_events/1");
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});
