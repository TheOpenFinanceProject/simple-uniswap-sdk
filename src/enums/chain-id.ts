export enum ChainId {
  MAINNET = 1666600000,
  TESTNET = 1666700000,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
}

export const ChainNames = new Map<number, string>([
  [ChainId.MAINNET, 'Harmony Mainnet S0'],
  [ChainId.TESTNET, 'Harmony Testnet S0'],
  [ChainId.ROPSTEN, 'ropsten'],
  [ChainId.RINKEBY, 'rinkeby'],
  [ChainId.GÖRLI, 'görli'],
  [ChainId.KOVAN, 'kovan'],
]);
