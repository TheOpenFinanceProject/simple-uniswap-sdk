import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const bBUSD_SYMBOL = 'bBUSD';
export const bBUSD_NAME = 'Binance BUSD Token';
export const imgSrcbBUSD = 'https://s2.coinmarketcap.com/static/img/coins/128x128/1839.png'
/**
 * bBUSD token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class bBUSD {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xa792af75af5fb3Ddc713BEEcB8868dAaA9fa2387',
      nativeAddress: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      oneAddress: 'one1k8mwv8s7zymz2kf6ytax4220spftcw0q2et32z',
      decimals: 18,
      imgSrc: imgSrcbBUSD,
      symbol: bBUSD_SYMBOL,
      name: bBUSD_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xE6a72FeE7e34768661805DE2b621a8CDBe0DBc81',
      nativeAddress: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      oneAddress: 'one1p26r259xj90e7e7sc32v96grshnyjl420na5yn',
      decimals: 18,
      imgSrc: imgSrcbBUSD,
      symbol: bBUSD_SYMBOL,
      name: bBUSD_NAME,
    };
  }


  /**
   * Get bBUSD token info by chain id
   * @param chainId The chain id
   */
  public static token(chainId: ChainId | number): Token {
    switch (chainId) {
      case ChainId.MAINNET:
        return this.MAINNET();
      case ChainId.TESTNET:
        return this.TESTNET();
      default:
        throw new UniswapError(
          `${chainId} is not allowed`,
          ErrorCodes.tokenChainIdContractDoesNotExist
        );
    }
  }
}
