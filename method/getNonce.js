require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const url = `https://eth-mainnet.g.alchemy.com/v2/${API_KEY}`;

async function getNonce(address) {
    const response = await axios.post(url, {
			jsonrpc: "2.0",
			id: 1,
			method: "eth_getTransactionCount", // <-- fill in the method
			params: [address, "latest"], // <-- fill in the params
		});
    
    // use this if you want to inspect the response data!
    // console.log(response.data);

    // return the nonce for the address
    return response.data.result;
}

module.exports = getNonce;