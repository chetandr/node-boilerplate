const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("Server!", () => {
    it("Request list API", done => {
        chai
            .request(app)
            .get("/requestlist")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.status).to.equals("success");
                done();
            });
    });
    
});