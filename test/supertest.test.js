import chai from "chai";

const expect = chai.expect;

describe("Testing básico", () => {

    it("debe validar número", () => {
        expect(1).to.equal(1);
    });

    it("debe validar boolean", () => {
        expect(true).to.equal(true);
    });

    it("debe validar string", () => {
        expect("backend").to.equal("backend");
    });

});