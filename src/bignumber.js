const BigNumber = require('bignumber.js');

const bignumberModule = {
    cutFixed:function(amount,decimals,fixed=4) {
        if (!amount) {
            amount = 0
        }
        let ret = new BigNumber(amount.toString())
        let string = "1e+" + decimals.toString()
        let divisor = new BigNumber(string)
        let data = ret.dividedBy(divisor).toFixed(fixed + 1);
        return data.substring(0, data.lastIndexOf(".") + fixed + 1);
    },
    cut:function(amount,decimals) {
        if (!amount) {
            amount = 0
        }
        let ret = new BigNumber(amount.toString())
        let string = "1e+" + decimals.toString()
        let divisor = new BigNumber(string)
        return ret.dividedBy(divisor);
    },
    power:function(amount,decimals) {
        if (!amount) {
            amount = 0
        }
        let ret = new BigNumber(amount.toString())
        let string = "1e-" + decimals.toString()
        let divisor = new BigNumber(string)
        return ret.dividedBy(divisor);
    },
}

module.exports = bignumberModule;