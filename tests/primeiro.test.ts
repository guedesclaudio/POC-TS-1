import server from "../src/server";
import supertest from "supertest";

const api = supertest(server);

describe("GET /movies", () => {

    it("should respond with status 200", async () => {

        const response = await api.get("/movies");
        expect(response.status).toBe(200)
    })
})