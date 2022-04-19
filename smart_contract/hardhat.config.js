require('@nomiclabs/hardhat-waffle')

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  defaultNetwork: 'ropsten',
  networks: {
    hardhat: {},
    ropsten: {
      url:
        'https://eth-ropsten.alchemyapi.io/v2/iSS9LMH-2DFHkTYFu7-fYWslP4wAgQfw',
      accounts: [
        '17995b01574971b9ef535ca76c0d83a6f8363c6d8f283d00fe5b62f0e2aea3bd',
      ],
    },
  },
}
