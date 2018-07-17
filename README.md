
## Installation

```sh
Run `npm install` to install the packages

```
## Run test cases
To run test cases: npm test
```
## Run server
To run the app: npm start
```
## POST endpoint Link
localhost:8000/payslip

## sample data and result

taxData = { 
	"paymentPeriod": "31 july", 
	"firstName": "John", 
	"lastName": "David", 
	"annualSalary": "40000",
	"superRate": "9" 
}

taxResult = {
  "error": false,
  "data": {
      "name": "John David",
      "grossSalary": 3333,
      "tax": 379,
      "netSalary": 2954,
      "superAmount": 300
  }
};

