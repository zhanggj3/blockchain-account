var mnemonicModule = require('../lib/mnemonic');

describe('mnemonicModule：工具方法测试', function() {
    //getMnemonic
    describe('mnemonicModule.mnemonic', function() {
        var mnemonic = mnemonicModule.getMnemonic();

        it('mnemonicModule.mnemonic 成功', function() {
            return mnemonic;
        });
    });
    //getMnemonic
    describe('mnemonicModule.checkMnemonicValidate', function() {
        var checkMnemonicValidate = mnemonicModule.checkMnemonicValidate("marble upgrade heavy duty zone cruel hedgehog replace domain hedgehog enter tuition");

        it('mnemonicModule.checkMnemonicValidate 成功', function() {
            return checkMnemonicValidate;
        });
    });

     //getPrivateKeyFromMnemonic
     describe('mnemonicModule.getPrivateKeyFromMnemonic', function() {
        var getPrivateKeyFromMnemonic = mnemonicModule.getPrivateKeyFromMnemonic("marble upgrade heavy duty zone cruel hedgehog replace domain hedgehog enter tuition");

        it('mnemonicModule.getPrivateKeyFromMnemonic 成功', function() {
            return getPrivateKeyFromMnemonic;
        });
    });
})