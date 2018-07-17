const CalcTax = require('../controller/tax');

class CalcTaxRoute {
  constructor(router) {
    this.router = router;
    this.calcTaxMethod = new CalcTax();
  }

  routes() {
    this.router.route('/payslip')
      .post((req, res) => this.calcTaxMethod.tax(req, res));

    return this.router;
  }
}

module.exports = CalcTaxRoute;

