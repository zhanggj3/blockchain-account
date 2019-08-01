const bip39 = require('bip39'); //最新的库产生的不助记词转hex结果都一样，降为稳定版本2.5.0
const hdkey = require('ethereumjs-wallet/hdkey'); //0.6.2

const mnemonicModule = {
    getPrivateKeyFromMnemonic:function(mnemonic) {
        const hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));
        const wallet_hdpath = "m/44'/60'/0'/0/";
    
        const wallet = hdwallet.derivePath(wallet_hdpath + '0').getWallet();
        const privateKey = wallet._privKey.toString('hex');
    
        return privateKey;
    },
    checkMnemonicValidate:function(mnemonic) {
        return bip39.validateMnemonic(mnemonic);
    },
    getMnemonic:function() {
        const mnemonic = bip39.generateMnemonic();
        return mnemonic;
    }
}

module.exports =  mnemonicModule;
