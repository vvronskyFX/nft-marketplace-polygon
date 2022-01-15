require("@nomiclabs/hardhat-waffle");
const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"

// const projectId = "a1bc762a38f412f3af976f545cd134df77c63626"


module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url:'https://rpc-mumbai.maticvigil.com/v1/a1bc762a38f412f3af976f545cd134df77c63626', 
      accounts: [privateKey]
    },
    // mainnet: {
      // url: "https://rpc-mainnet.maticvigil.com/v1/${projectId}"
      // accounts: ""
    // }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
