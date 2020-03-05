const request = require("supertest");

const server = require("./server.js");

const db = require("../data/dbConfig");

const restricted = require("../auth/restricted");



// it("should set db environment to testing", function() {
//     expect(process.env.DB_ENV).toBe("testing");
//   });
  
//  describe("server", function() {
//     describe("GET /", function() {
//       it("should return 200", function() {
//         // run the server
//         // make a GET request to /
//         // see that the http code of response is 200
//         return request(server)
//           .get("/")
//           .then(res => {
//             expect(res.status).toBe(200);
//           });
//       });
  
//       it("should return HTML", function() {
//         return request(server)
//           .get("/")
//           .then(res => {
//             expect(res.type).toMatch(/html/i);
//           });
//       });
//     });
//   });
describe('User endpoints', () => {
    it('registers new user', async () => {
        const res = await request(server).post('/api/users/register').send({
            first_name: 'user',
            last_name: 'userlast',
            email: 'user@last.com',
            password: 'userpass'
        });
        expect(res.status).toBe(500);
       
    });
    it('login user', async () => {
        await request(server).post('/api/users/register').send({
            first_name: 'user',
            last_name: 'userLast',
            email: 'user@last.com',
            password: 'userpass'
        });
        const res = await request(server).post('/api/users/login').send({
            email: 'user@last.com',
            password: 'userpass'
        });
        expect(res.status).toBe(500);
        
    });
    
});
