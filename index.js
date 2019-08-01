
const keythereumModule = require("./lib/keythereum");
const mnemonicModule = require("./lib/mnemonic");
const bignumberModule = require("./lib/bignumber");
const BigNumber = require('bignumber.js');
const avatar = require('./lib/avatar');

const abmatrix = {
    base:{
        avatar:avatar
    },
    keythereum : keythereumModule,
    mnemonic:mnemonicModule,
    utils:bignumberModule,
    bignumber:BigNumber,
}
module.exports =  abmatrix;