
const request = require('supertest');
const app = require('./index');

describe('Node App Tests', () => {

    test('Homepage should return status 200', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
    });

    test('Homepage should return correct message', async () => {
        const response = await request(app).get('/');

        expect(response.text).toBe(
            'Hello! My DevOps application is running.'
        );
    });

});
