let taxCalc = require('../TaxCalculation/taxCalculator.js');

class CalcTax {

    tax(req, res) {
        try {
            const {paymentPeriod, firstName, lastName, annualSalary, superRate} = req.body;
            
            if (paymentPeriod !== undefined && paymentPeriod.length > 0) {
                const calculator = new taxCalc.TaxCalculator();
                const monthlyTax = calculator.calculateTax(annualSalary);
                const grossSalary = Math.round(annualSalary / 12);
                const netSalary = Math.round(grossSalary - monthlyTax);

                let finalResult = {};
                finalResult.name = firstName + ' ' + lastName;
                finalResult.grossSalary = grossSalary;
                finalResult.tax = monthlyTax;
                finalResult.netSalary = netSalary;
                finalResult.superAmount = Math.round(((grossSalary * superRate) / 100));

                if(!firstName || !lastName || !annualSalary || !superRate) {
                    return res.status(400).send({error: true, message: 'Invalid data'});
                }else {
                    return res.status(200).send({error: false, data: finalResult});
                }
            } else {
                return res.status(400).send({error: true, message: "Payment period is required"});
            }
        } catch (e) {
            return res.status(500).send({error: true, message: 'Oops! Server error'});
        }
    }
}

module.exports = CalcTax;
