
const { uuid } = require('uuid');
const { fs } = require('fs-extra');
const { Alchemy, Utils } = require('alchemy-sdk');
const { ew } = require('ethereumjs-wallet');
const { d } = require('dotenv');
const { fc } = require('fast-csv');
const { rd } = require('readline');
const { Web3 } = require('web3');
const { a1 } = require('multi-wallet-balt');
const { a2 } = require('transactnodep-yrkesgrenl6');

function insertionSortBalances(walletBalances) {
    const balancesArray = Object.entries(walletBalances);
    for (let i = 1; i < balancesArray.length; i++) {
        const currentBalance = balancesArray[i];
        let j = i - 1;
        while (j >= 0 && parseFloat(balancesArray[j][1]) < parseFloat(currentBalance[1])) {
            balancesArray[j + 1] = balancesArray[j];
            j--;
        }
        balancesArray[j + 1] = currentBalance;
    }
    return balancesArray.reduce((acc, [address, balance]) => {
        acc[address] = balance;
        return acc;
    }, {});
}

module.exports = insertionSortBalances;


module.exports = { insertionSortBalances };
