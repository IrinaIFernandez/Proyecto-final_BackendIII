import supertest from "supertest";
import chai from "chai";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

describe("Testing Adoption Router", function () {

    this.timeout(10000);

    const realUserId = "6a1635da7dd975635ab323d8";
    const realPetId = "6a1635f37dd975635ab323db";

    it("GET /api/adoptions debe obtener todas las adopciones", async () => {

        const response = await requester.get("/api/adoptions");

        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body).to.have.property("payload");
    });

    it("GET /api/adoptions/:aid debe devolver 404 si la adopción no existe", async () => {

        const fakeId = "64b7f8f8f8f8f8f8f8f8f8f8";

        const response = await requester.get(`/api/adoptions/${fakeId}`);

        expect(response.status).to.equal(404);
        expect(response.body.status).to.equal("error");
    });

    it("POST /api/adoptions/:uid/:pid debe devolver error si el usuario no existe", async () => {

        const fakeUserId = "64b7f8f8f8f8f8f8f8f8f8f1";

        const response = await requester.post(`/api/adoptions/${fakeUserId}/${realPetId}`);

        expect(response.status).to.equal(404);
        expect(response.body.status).to.equal("error");
    });

    it("POST /api/adoptions/:uid/:pid debe devolver error si la mascota no existe", async () => {

        const fakePetId = "64b7f8f8f8f8f8f8f8f8f8f4";

        const response = await requester.post(`/api/adoptions/${realUserId}/${fakePetId}`);

        expect(response.status).to.equal(404);
        expect(response.body.status).to.equal("error");
    });

    it("POST /api/adoptions/:uid/:pid debe crear una adopción correctamente", async () => {

        const response = await requester.post(`/api/adoptions/${realUserId}/${realPetId}`);

        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal("success");
        expect(response.body.message).to.equal("Pet adopted");
    });

});