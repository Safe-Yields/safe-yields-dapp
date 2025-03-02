import { AddEthereumChainParameter } from '@web3-react/types';

type ChainConfig = {
  chainId: number;
  chainName: string;
  chainShortName: string;
  nativeCurrency: AddEthereumChainParameter['nativeCurrency'];
  rpcUrls: string[];
  blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls'];
  addresses: {
    treasury: string;
    management: string;
    usdc: string;
    safe: string;
    vault: string;
    nft: string;
  };
};

type ChainsConfig = Record<number, ChainConfig>;

const envChainId = process.env.NEXT_PUBLIC_CHAIN_ID;
if (envChainId === undefined) {
  throw new Error('NEXT_PUBLIC_CHAIN_ID is not defined');
}
export const supportedChainId = parseInt(envChainId, 10);

const config: ChainsConfig = {
  42161: {
    chainName: 'Arbitrum Mainnet',
    chainId: 42161,
    chainShortName: 'Arbitrum',
    rpcUrls: ['https://1rpc.io/arb' || process.env.NEXT_PUBLIC_MAINNET_URL],
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrls: ['https://arbiscan.io'],
    addresses: {
      treasury: '0xb7eCbD7262a9250A44EaA040A2B2a184536F3861',
      management: '0xca086A28753a0826733D53A7e674011307e027d8',
      usdc: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
      safe: '0x519EfB2bEFBd3f00D335dc9DF42BF721D591604f',
      vault: '0x1A7E5071E623F47BC4A64b8BB2D4E57b9dBcDbB2',
      nft: '0xe2967C90F8cec65Ae12c4bC36c771249C12a2310',
    },
  },
  1337: {
    chainName: 'Localhost',
    chainId: 1337,
    chainShortName: 'HH',
    rpcUrls: ['http://127.0.0.1:8545/'],
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrls: [],
    addresses: {
      treasury: '0xBF89e2e63e471cC29Da80bcD661342A9935982A8',
      management: '0xf2c1FE530d9c1686950F33d1B47d8B9474D92965',
      usdc: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
      safe: '0x5A0028531B35a9B2Ce725B42d3ff52455421f607',
      vault: '0x80ACEf89c16fc9842EC00B363eFe5D2c3aF21128',
      nft: '0xfF74B3f080517F405D05f9cD296CD089AAc7ebAF',
    },
  },
};

export const chainConfig = config[supportedChainId];
console.log('Supported Chain ID:', supportedChainId);
console.log('Chain Config:', chainConfig);
console.log('RPC URLs:', chainConfig.rpcUrls);

if (!chainConfig) {
  throw new Error(`Chain configuration not found for chain ID: ${supportedChainId}`);
}

export const urlMap = { [supportedChainId]: chainConfig.rpcUrls };
