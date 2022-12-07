// @ts-nocheck
const request = require("supertest");
const app = require("../server");

describe("Authenticate User", function () {
	it("Should login user", function (done) {
		request(app)
			.get("/api/v1/auth/login")
			.body({
				username: "testnode",
				password: "testnode",
			})
			.set(
				"Authorization",
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkYWY3ODJjNjg2YmYzNGE4YWNlNTJlIn0sImlhdCI6MTY1MDg3ODQ3NCwiZXhwIjoxNjUwODgyMDc0fQ.jxdajBgZlRGiIEoG7D1hbmTtmwLFkoCsP4hp4gko3eY"
			)
			.expect("content-type", /json/)
			.expect(200, done);
	});

	it("Should fetch users", function (done) {
		request(app)
			.get("/api/v1/users")
			.set(
				"Authorization",
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkYWY3ODJjNjg2YmYzNGE4YWNlNTJlIn0sImlhdCI6MTY1MDg3ODQ3NCwiZXhwIjoxNjUwODgyMDc0fQ.jxdajBgZlRGiIEoG7D1hbmTtmwLFkoCsP4hp4gko3eY"
			)
			.body({
				username: "testnode",
				password: "testnode1",
			})
			.expect("content-type", /json/)
			.expect(200, done);
	});
});
