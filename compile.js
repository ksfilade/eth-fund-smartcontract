const path = require('path')
const fs = require('fs')
const solc = require('solc')

const inboxPath = path.resolve(__dirname,  'inbox', 'Inbox.sol')
const source = fs.readFileSync(inboxPath ,'utf8')
console.log(solc.compile(source, 1).contracts[':Inbox']);
module.exports = solc.compile(source, 1).contracts[':Inbox'];


//example web3 
// const prov= await _CONTRACT( ABI.contract['test'], '0x19E965EbE394B9bbb5Eafc586D64b09b1918F696' );
// 			console.log(prov.methods.send('0x28c10f7938AE87Ae91bF8a71B156182BaD2fC94d'));
// 			console.log(this.web3.utils.toWei('0.1', 'ether'));
// 			prov.methods.send('0x28c10f7938AE87Ae91bF8a71B156182BaD2fC94d').send
// 			(
// 				{
// 					from: '0x99F08ae81782DC764B94f7458A5ccE27b00B32Ec', 
// 					value: this.web3.utils.toWei('0.1', 'ether')
// 					// validate if it's ETH swap
// 				},
// 			// Initialize Web3 providers that require initialization
// 			// Opera tends to skip this after initial permission grant & coinbase don't need to be enabled
			
// 			)