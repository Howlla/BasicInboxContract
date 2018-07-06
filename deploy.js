const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'praise wolf enhance skill zone laptop adapt upgrade often obey dilemma degree',
    'https://rinkeby.infura.io/LbatmIOh6BM4PEpBearb'
);

const web3 = new Web3(provider);

 deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('attempting',accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: '0x'+bytecode, arguments: ['Hi there!']})
        .send({gas:'1000000', from: accounts[0]});
    console.log('Contract deployed to',result.options.address);
};

deploy();