const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface,bytecode } = require('./compile')

const provider = new HDWalletProvider('note meat emerge play whale have office any unfold eight tooth trash',
'https://ropsten.infura.io/v3/e9ad3979c3454a2b989598f12df94f91'
)
const web3 = new Web3(provider)

const deploy = async () =>{
    const accounts = await web3.eth.getAccounts();
    console.log('attpemtin');
    const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({ data: bytecode, arguments: ['hi']}).send({ gas: '1000000', from: accounts[0] })
    console.log('deployd to',result.options.address);
}
deploy()