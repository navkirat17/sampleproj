'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../src/app.js');

const taxData = { 
	"paymentPeriod": "31 july", 
	"firstName": "John", 
	"lastName": "David", 
	"annualSalary": "40000",
	"superRate": "9" 
}

const taxResult = {
    "error": false,
    "data": {
        "name": "John David",
        "grossSalary": 3333,
        "tax": 379,
        "netSalary": 2954,
        "superAmount": 300
    }
}

describe('API endpoint', function() {
    context('POST /payslip', () => {

        it('should return status 200', ()  => {
            return chai
            .request(app)
            .post('/payslip')
            .send(taxData)
            .then(function(res) {
                expect(res.status)
                    .to.equal(200);
            });
        });

        it('should return response body as sample output', () => {
            return chai
            .request(app)
            .post('/payslip')
            .send(taxData)
            .then(function(res) {
                expect(res.body)
                    .to.deep.equal(taxResult);
            });
        });

        it('should return error status 400 if payment period not defined ', () => {
            const taxData1 = JSON.parse(JSON.stringify(taxData));
            delete taxData1.paymentPeriod;
            return chai
            .request(app)
            .post('/payslip')
            .send(taxData1)
            .catch(function(err) {
                expect(res.status)
                    .to.equal(400);
            });
        });

        it('should return error message when payment period is empty or undefined', function() {
            const taxData1 = JSON.parse(JSON.stringify(taxData));
            delete taxData1.paymentPeriod;
            return chai
            .request(app)
            .post('/payslip')
            .send(taxData1)
            .then(function(res) {
                expect(res.error.text).to.deep.equal('{"error":true,"message":"Payment period is required"}');
            });
        });

        it('should return error status 400 if firstName not defined or empty', () => {
            const taxData2 = JSON.parse(JSON.stringify(taxData));
            delete taxData2.firstName;
            return chai
            .request(app)
            .post('/payslip')
            .send(taxData2)
            .catch(function(err) {
                expect(res.status)
                    .to.equal(400);
            });
        });

        it('should return error message when firstName is not defined or empty', function() {
            const taxData2 = JSON.parse(JSON.stringify(taxData));
            delete taxData2.firstName;
            return chai
            .request(app)
            .post('/payslip')
            .send(taxData2)
            .then(function(res) {
                expect(res.error.text).to.deep.equal('{"error":true,"message":"Invalid data"}');
            });
        });

        it('should return error status 400 if lastName not defined or empty', () => {
            const taxData3 = JSON.parse(JSON.stringify(taxData));
            delete taxData3.lastName;
            return chai
            .request(app)
            .post('/payslip')
            .send(taxData3)
            .catch(function(err) {
                expect(res.status)
                    .to.equal(400);
            });
        });

        it('should return error message when lastName is not defined or empty', function() {
            const taxData3 = JSON.parse(JSON.stringify(taxData));
            delete taxData3.lastName;
            return chai
            .request(app)
            .post('/payslip')
            .send(taxData3)
            .catch(function(err) {
                expect(err.response.body).to.deep.equal({error: true, message: "Invalid data"});
            });
        });

        it('should return error status 400 if annualSalary not defined or empty', () => {
            const taxData4 = JSON.parse(JSON.stringify(taxData));
            delete taxData4.annualSalary;
            return chai
            .request(app)
            .post('/payslip')
            .send(taxData4)
            .catch(function(err) {
                expect(res.status)
                    .to.equal(400);
            });
        });

        it('should return error message when annualSalary is not defined or empty', function() {
            const taxData4 = JSON.parse(JSON.stringify(taxData));
            delete taxData4.annualSalary;
            return chai
            .request(app)
            .post('/payslip')
            .send(taxData4)
            .catch(function(err) {
                expect(err.response.body).to.deep.equal({error: true, message: "Invalid data"});
            });
        });

        it('should return error status 400 if superRate not defined or empty', () => {
            const taxData5 = JSON.parse(JSON.stringify(taxData));
            delete taxData5.superRate;
            return chai
            .request(app)
            .post('/payslip')
            .send(taxData5)
            .catch(function(err) {
                expect(res.status)
                    .to.equal(400);
            });
        });

        it('should return error message when superRate is not defined or empty', function() {
            const taxData5 = JSON.parse(JSON.stringify(taxData));
            delete taxData5.superRate;
            return chai
            .request(app)
            .post('/payslip')
            .send(taxData5)
            .catch(function(err) {
                expect(err.response.body).to.deep.equal({error: true, message: "Invalid data"});
            });
        });
    });

});
