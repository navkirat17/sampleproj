class TaxCalculator {
    constructor() {
        this.slabs = {
            A: { lLimit: 0, uLimit: 18000, basicTax: 0, perDollar: 0 },
            B: {lLimit: 18201, uLimit: 37000, basicTax: 0, perDollar: 19},
            C: {lLimit: 37001, uLimit: 87000, basicTax: 3572, perDollar: 32.5},
            D: {lLimit: 87001, uLimit: 180000, basicTax: 19822, perDollar: 37},
            E: {lLimit: 180001, uLimit: null, basicTax: 54232, perDollar: 45}
        };
    }

    calculateTax(grossIncome) {
        let slab = this.getSlab(grossIncome);
        let tax = slab.basicTax;
        let taxAboveLowerLimit = ((grossIncome - slab.lLimit) * slab.perDollar) / 100;
        tax = tax + taxAboveLowerLimit;
        let monthlyTax = Math.round(tax /12);
        return monthlyTax;
    }

    getSlab(val) {
        let keys = Object.keys(this.slabs);
        let taxSlab;
        for (let i = 0; i < keys.length; i = i+1) {
            let slab = this.slabs[keys[i]];
            if (val >= slab.lLimit && slab.uLimit != null && val <= slab.uLimit) {
                taxSlab = slab;
                break;
            } else if (slab.uLimit == null & val >= slab.lLimit) {
                taxSlab = slab;
                break;
            }
        }
        return taxSlab;
    }

}

exports.TaxCalculator = TaxCalculator;
