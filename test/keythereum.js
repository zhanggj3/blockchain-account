var keythereumModule = require('../lib/keythereum');

describe('keythereumModule：工具方法测试', function() {
    //getMnemonic
    describe('keythereumModule.getPrivateKey', function() {
        var getPrivateKey = keythereumModule.getPrivateKey("123456",
        {"address":"7d37c4b21bbac2081cba3729ba8eeb3a53eb296c","crypto":{"cipher":"aes-128-ctr","ciphertext":"2578cc5c411bd035b6cb1eee94dba0edb807025e937e9b3964d8c380cdb4a19b","cipherparams":{"iv":"ee47c1dbf6d922bbcb6627b4ae53fba7"},"mac":"9bee3306af1acdcaa7f6121de0a43ff72e678e70459829fda971e7494af1e3e7","kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"r":8,"p":1,"salt":"fb9601925f551448193c40ee5013140ca830d84c86185e3dfe0b5d2f04e09705"}},"id":"caa184d6-1ced-4665-a804-1e61164a394e","version":3});

        it('keythereumModule.getPrivateKey 成功', function() {
            return getPrivateKey;
        });
    });
    //getMnemonic
    describe('keythereumModule.createAccount', function() {
        var createAccount = keythereumModule.createAccount("123456","a7adf4487e48acd138efcc1c2627d16cd09367830c933a5c35bb93c3837b922a");

        it('keythereumModule.createAccount 成功', function() {
            return createAccount;
        });
    });
})