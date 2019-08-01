var bignumberModule = require('../lib/bignumber');

describe('bignumberModule：工具方法测试', function() {
    //getMnemonic
    describe('bignumberModule.cutValue', function() {
        var cutValue = bignumberModule.cut(1,10);

        it('bignumberModule.cutValue 成功', function() {
            return cutValue;
        });
    });
    //getMnemonic
    describe('bignumberModule.cutFixedValue', function() {
        var cutFixedValue = bignumberModule.cutFixed(1,10,4);

        it('bignumberModule.cutFixedValue 成功', function() {
            return cutFixedValue;
        });
    });

    describe('bignumberModule.powerValue', function() {
        var powerValue = bignumberModule.power(1,10);

        it('bignumberModule.powerValue 成功', function() {
            return powerValue;
        });
    });
})