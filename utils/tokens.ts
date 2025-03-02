import { TokenInfo } from '@utils/constants';

export const safeTokens: TokenInfo[] = [
  {
    chainId: 42161,
    address: '0x519EfB2bEFBd3f00D335dc9DF42BF721D591604f',
    _scan: 'https://arbiscan.io/token/0x519EFB2BEFBD3F00D335DC9DF42BF721D591604F',
    symbol: 'SAFE',
    name: 'SAFE',
    decimals: 6,
    logoURI: 'https://safe-yields.s3.amazonaws.com/SAFE.png',
  },
  // {
  //   chainId: 42161,
  //   address: '0x519EfB2bEFBd3f00D335dc9DF42BF721D591604f',
  //   _scan: 'https://arbiscan.io/token/0x519EfB2bEFBd3f00D335dc9DF42BF721D591604f',
  //   symbol: 'SAFE+',
  //   name: 'SAFE+',
  //   decimals: 18,
  //   logoURI: 'https://safe-yields.s3.amazonaws.com/SAFE-plus.png',
  // },
];
export const safeTokensLocal: TokenInfo[] = [
  {
    chainId: 1337,
    address: '0x5A0028531B35a9B2Ce725B42d3ff52455421f607',
    _scan: 'https://arbiscan.io/token/0x519EFB2BEFBD3F00D335DC9DF42BF721D591604F',
    symbol: 'SAFE',
    name: 'SAFE',
    decimals: 6,
    logoURI: 'https://safe-yields.s3.amazonaws.com/SAFE.png',
  },
  // {
  //   chainId: 42161,
  //   address: '0x519EfB2bEFBd3f00D335dc9DF42BF721D591604f',
  //   _scan: 'https://arbiscan.io/token/0x519EfB2bEFBd3f00D335dc9DF42BF721D591604f',
  //   symbol: 'SAFE+',
  //   name: 'SAFE+',
  //   decimals: 18,
  //   logoURI: 'https://safe-yields.s3.amazonaws.com/SAFE-plus.png',
  // },
];

export const safeTokensGoerli: TokenInfo[] = [
  {
    chainId: 421613,
    address: '0xeeC181F2008b0f719e572000b1F02F120634326C',
    _scan: 'https://goerli.arbiscan.io/token/0xeeC181F2008b0f719e572000b1F02F120634326C',
    symbol: 'SAFE',
    name: 'SAFE',
    decimals: 6,
    logoURI: 'https://safe-yields.s3.amazonaws.com/SAFE.png',
  },
];

export const arbitrumTokens: TokenInfo[] = [
  {
    chainId: 42161,
    address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    _scan: 'https://arbiscan.io/token/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    symbol: 'USDC',
    name: 'USDC',
    decimals: 6,
    logoURI: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
  },
  // {
  //   chainId: 42161,
  //   address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
  //   _scan: 'https://arbiscan.io/token/0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
  //   symbol: 'USDT',
  //   name: 'USDT',
  //   decimals: 6,
  //   logoURI: 'https://coin.top/production/logo/usdtlogo.png',
  // },
  // {
  //   chainId: 42161,
  //   address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
  //   _scan: 'https://arbiscan.io/token/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
  //   symbol: 'DAI',
  //   name: 'DAI',
  //   decimals: 18,
  //   logoURI: 'https://assets.coingecko.com/coins/images/9956/large/dai-multi-collateral-mcd.png',
  // },
  // {
  //   chainId: 42161,
  //   address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
  //   _scan: 'https://arbiscan.io/token/0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
  //   symbol: 'WETH',
  //   name: 'Wrapped Ether',
  //   decimals: 18,
  //   logoURI:
  //     'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  // },
  // {
  //   chainId: 42161,
  //   address: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
  //   _scan: 'https://arbiscan.io/token/0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
  //   symbol: 'WBTC',
  //   name: 'WBTC',
  //   decimals: 8,
  //   logoURI: 'https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png',
  // },
  // {
  //   chainId: 42161,
  //   address: '0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A',
  //   _scan: 'https://arbiscan.io/token/0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A',
  //   symbol: 'MIM',
  //   name: 'MIM',
  //   decimals: 18,
  //   logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/162.png',
  // },
  // {
  //   chainId: 42161,
  //   address: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
  //   _scan: 'https://arbiscan.io/token/0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
  //   decimals: 18,
  //   name: 'MAI',
  //   symbol: 'MAI',
  //   logoURI: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MAI.svg',
  // },
  // {
  //   chainId: 42161,
  //   address: '0x9d2f299715d94d8a7e6f5eaa8e654e8c74a988a7',
  //   _scan: 'https://arbiscan.io/token/0x9d2f299715d94d8a7e6f5eaa8e654e8c74a988a7',
  //   decimals: 18,
  //   name: 'Frax Share',
  //   symbol: 'FXS',
  //   logoURI: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/FXS.svg',
  // },
  // {
  //   chainId: 42161,
  //   address: '0x080f6aed32fc474dd5717105dba5ea57268f46eb',
  //   _scan: 'https://arbiscan.io/token/0x080f6aed32fc474dd5717105dba5ea57268f46eb',
  //   decimals: 18,
  //   name: 'Synapse',
  //   symbol: 'SYN',
  //   logoURI: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/SYN.svg',
  // },
  // {
  //   chainId: 42161,
  //   address: '0x319f865b287fcc10b30d8ce6144e8b6d1b476999',
  //   _scan: 'https://arbiscan.io/token/0x319f865b287fcc10b30d8ce6144e8b6d1b476999',
  //   decimals: 18,
  //   name: 'Cartesi',
  //   symbol: 'CTSI',
  //   logoURI: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/CTSI.png',
  // },
  // {
  //   chainId: 42161,
  //   address: '0x9fb9a33956351cf4fa040f65a13b835a3c8764e3',
  //   _scan: 'https://arbiscan.io/token/0x9fb9a33956351cf4fa040f65a13b835a3c8764e3',
  //   decimals: 18,
  //   name: 'Multchain',
  //   symbol: 'MULTI',
  //   logoURI: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/MULTI.png',
  // },
  // {
  //   chainId: 42161,
  //   address: '0x6694340fc020c5e6b96567843da2df01b2ce1eb6',
  //   _scan: 'https://arbiscan.io/token/0x6694340fc020c5e6b96567843da2df01b2ce1eb6',
  //   decimals: 18,
  //   name: 'Stargate Finance',
  //   symbol: 'STG',
  //   logoURI: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/STG.svg',
  // },
  // {
  //   chainId: 42161,
  //   address: '0x99c409e5f62e4bd2ac142f17cafb6810b8f0baae',
  //   _scan: 'https://arbiscan.io/token/0x99c409e5f62e4bd2ac142f17cafb6810b8f0baae',
  //   decimals: 18,
  //   name: 'Beefy.Finance',
  //   symbol: 'BIFI',
  //   logoURI: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/BIFI.png',
  // },
  // {
  //   chainId: 42161,
  //   address: '0x68ead55c258d6fa5e46d67fc90f53211eab885be',
  //   _scan: 'https://arbiscan.io/token/0x68ead55c258d6fa5e46d67fc90f53211eab885be',
  //   decimals: 18,
  //   name: 'Popcorn',
  //   symbol: 'POP',
  //   logoURI: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/POP.png',
  // },
  // {
  //   chainId: 42161,
  //   address: '0xd74f5255d557944cf7dd0e45ff521520002d5748',
  //   _scan: 'https://arbiscan.io/token/0xd74f5255d557944cf7dd0e45ff521520002d5748',
  //   decimals: 18,
  //   name: 'Sperax USD',
  //   symbol: 'USDS',
  //   logoURI: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/USDS.svg',
  // },
  // {
  //   chainId: 42161,
  //   address: '0xee9801669c6138e84bd50deb500827b776777d28',
  //   _scan: 'https://arbiscan.io/token/0xee9801669c6138e84bd50deb500827b776777d28',
  //   decimals: 18,
  //   name: 'O3 Swap',
  //   symbol: 'O3',
  //   logoURI: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/O3.png',
  // },
  // {
  //   chainId: 42161,
  //   address: '0x21e60ee73f17ac0a411ae5d690f908c3ed66fe12',
  //   _scan: 'https://arbiscan.io/token/0x21e60ee73f17ac0a411ae5d690f908c3ed66fe12',
  //   decimals: 18,
  //   name: 'Deri Protocol',
  //   symbol: 'DERI',
  //   logoURI: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/DERI.svg',
  // },
  // {
  //   chainId: 42161,
  //   address: '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a',
  //   _scan: 'https://arbiscan.io/token/0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a',
  //   decimals: 18,
  //   name: 'GMX',
  //   symbol: 'GMX',
  //   logoURI: 'https://raw.githubusercontent.com/KyberNetwork/ks-assets/main/img/token/GMX.svg',
  // },
];

export const arbitrumTokensGoerli = [
  {
    chainId: 421613,
    address: '0x179522635726710DD7D2035A81D856DE4AA7836C',
    _scan: 'https://goerli.arbiscan.io/token/0x179522635726710Dd7D2035a81d856de4Aa7836c',
    symbol: 'USDC',
    name: 'USDC',
    decimals: 6,
    logoURI: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
  },
];
