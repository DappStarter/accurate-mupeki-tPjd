require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remember push idea clip surge gather'; 
let testAccounts = [
"0xc3b5294ec8370305c55d268d7fb94c5027795b9c6e63b07589a2bd003163b0b3",
"0xf0c8fc03e26537f9956709c471b150e968a391efc0e108c538e2478bb1d6cf8e",
"0xebdf1d347aad0bd0cbae8c372048c412746eb03e747a1ba25c0d156eb399c110",
"0xb6f43e1a91fe2ea1eff85773a4ac32dff2b73336d4b9ebe5006d8ab05fce5e69",
"0xdf1910262dbdfc1e2be992a5e59786f992fbd6daa60d9c05bd47832b48398c22",
"0xba3e4bc5f73a656368ea8a9ebde5829233f0e0267896976968ddd6275c10afcb",
"0x5b9c742784f03d62dc12ec5d8fcc96cdd4929eb96eb6d00723894e72f2084eb9",
"0x7f54304e349a14e396fe932ccaca0ed264d0271047cb99627826e82998041acc",
"0x066c0599c53c4a9154ab05adf16c396e4e904a46ed86a844e9985b0d0db64274",
"0xaf6ba1f4c8118dd5d92b2d065980315ac6fda063fd32f808239aa7f9454ed233"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

