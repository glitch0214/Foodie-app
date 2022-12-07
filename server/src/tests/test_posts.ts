// @ts-nocheck
const request = require("supertest");
const app = require("../server");

describe("Authentication Post", function () {
	it("Should fetch authenticated posts on providing auth token", function (done) {
		request(app)
			.get("/api/v1/auth/")
			.set(
				"Authorization",
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkYWY3ODJjNjg2YmYzNGE4YWNlNTJlIn0sImlhdCI6MTY1MDg3ODQ3NCwiZXhwIjoxNjUwODgyMDc0fQ.jxdajBgZlRGiIEoG7D1hbmTtmwLFkoCsP4hp4gko3eY"
			)
			.body({
				userId: "5d9f3c3c8a8e1a2d2e4f4c4a",
				usernname: "testnode",
				password: "testnode",
			})
			.expect("content-type", /json/)
			.expect(200, done);
	});

	it("Should return invalid token", function (done) {
		request(app)
			.get("/api/v1/auth")
			.set(
				"Authorization",
				"eyJbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkYWY3ODJjNjg2YmYzNGE4YWNlNTJlIn0sImlhdCI6MTY1MDg3ODQ3NCwiZXhwIjoxNjUwODgyMDc0fQ.jxdajBgZlRGiIEoG7D1hbmTtmwLFkoCsP4hp4gko3eY"
			)
			.body({
				userId: "5d9f3c3c8a8e1a2d2e4f4c4a",
				usernname: "testnode",
				password: "testnode",
			})
			.expect("content-type", /json/)
			.expect(401, done);
	});
});
