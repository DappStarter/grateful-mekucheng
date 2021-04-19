require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remember protect hidden prison sure ski'; 
let testAccounts = [
"0x3012bdd9b05f2f40a4eb4e99c9937c1d0e8055935dd971143084704439f3abe2",
"0x03d4b612321fe347a963818f156b80be2d88349437451791263b4d57ed275714",
"0xa3b877eaa5f2b9c7ac2abba6ba34521d27a82fe19b1f3bac675f350e8021f8b6",
"0x5ae91724fa36144afd5d609962193c43d629e0fbca466f01caea11449559aa7d",
"0x10552c5614cb5d45072617cbd658cd28e98c74af0188e2f03cb5be9610c613a3",
"0x1bc02c72d8616c95b1af2a1b5e8ebb93898de6aab303c4317ead1cd18da61236",
"0x8c2bda15418b5af1cce527ea4688594b118397c761fba5b7120b3a68e56dc397",
"0x2611741f910253f2b7317a0418aaf7e9bc2f136f6f9a70abcba7a0797ee777c6",
"0xfb2b7c7e2be53fe3ffb06821e4b258ca701645d1c3fdeed9ca0fb9230858591a",
"0x3b16458e77dcea04843a2e0c0cadf8751deb01394c56413493633270fd54a966"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
