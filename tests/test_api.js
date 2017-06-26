const request = require("request");
var base_url = "http://localhost:3000"

describe("Hello World Server", function() {
  describe("GET /api", function() {
    it("returns status code 200", function(done) {
      request.get(base_url + "/api", function(error, response, body) {

        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});

// TODO: Add more tests