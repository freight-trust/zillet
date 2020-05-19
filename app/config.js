export default {
  VIEWBLOCK_URL: 'https://0xfreight.com/addresses/',
  MULTIPLIER: 12,
  MINIMUM_GAS_PRICE: 21000, // in Li
  NODES: [
    {
      name: 'Freight Trust Network',
      url: 'htts://13.57.207.168:3435',
      explorer: 'https://0xfreight.com',
      version: 211,
      id: 1
    },
  ],
  WALLET_METHODS: [
    {
      id: 1001,
      img: 'private-key.svg',
      title: 'Private Key',
      body: 'Access your wallet using 64 character hex string',
      allowed: true,
      buttonText: 'Access',
      securityLevel: 1
    },
    {
      id: 1002,
      img: 'keystore.svg',
      title: 'Keystore file',
      body: 'Access your wallet using Keystore(JSON) file',
      allowed: true,
      buttonText: 'Import File',
      securityLevel: 2
    },
    {
      id: 1003,
      img: 'mnemonic.svg',
      title: 'Mnemonic phrase',
      body: 'Access your wallet using 12-word mnemonic Phrase',
      allowed: true,
      buttonText: 'Access',
      securityLevel: 2
    },
    {
      id: 1004,
      img: 'zilpay.svg',
      title: 'ZilPay',
      body: 'Access your wallet using ZilPay Extension',
      allowed: true,
      buttonText: 'Connect',
      securityLevel: 3
    },
    {
      id: 1005,
      img: 'moonlet.svg',
      title: 'Moonlet',
      body: 'Access your wallet using Moonlet Extension',
      allowed: true,
      buttonText: 'Connect (Beta)',
      securityLevel: 3
    },
    {
      id: 1006,
      img: 'ledger.svg',
      title: 'Ledger',
      body: 'Access your wallet using Ledger Hardware wallet',
      allowed: true,
      buttonText: 'Connect',
      securityLevel: 3
    }
  ]
};
