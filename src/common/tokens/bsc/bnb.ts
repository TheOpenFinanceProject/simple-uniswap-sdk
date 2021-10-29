import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const bBNB_SYMBOL = 'bBNB';
export const bBNB_NAME = 'Binance Coin';
export const imgSrcbBNB = 'https://s2.coinmarketcap.com/static/img/coins/128x128/1839.png'
/**
 * bBNB token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class bBNB {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xb1f6E61E1e113625593a22fa6aa94F8052bc39E0',
      nativeAddress: '0x00eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', //Native Token so no Real address
      oneAddress: 'one1k8mwv8s7zymz2kf6ytax4220spftcw0q2et32z',
      decimals: 18,
      imgSrc: imgSrcbBNB,
      symbol: bBNB_SYMBOL,
      name: bBNB_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x8c4245b6096EE6e3C7266f4289233E93B24f0b2d',
      nativeAddress: '0x00eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', //Native Token so no Real address
      oneAddress: 'one1k8mwv8s7zymz2kf6ytax4220spftcw0q2et32z',
      decimals: 18,
      imgSrc: imgSrcbBNB,
      symbol: bBNB_SYMBOL,
      name: bBNB_NAME,
    };
  }


  /**
   * Get bBNB token info by chain id
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
