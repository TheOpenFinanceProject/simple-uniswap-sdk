import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const bLINK_SYMBOL = 'bLINK';
export const bLINK_NAME = 'Binance Chainlink Token';
export const imgSrcbLINK = 'https://openfi.dev/tokens/default/LINK.png'
/**
 * bLINK token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class bLINK {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x88B0811DdeC7c94Cc48dE601BdAbd1AC37d6940B',
      nativeAddress: '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD',
      oneAddress: 'one13zcgz8w7cly5e3yducqmm2734smad9qtdd0dq6',
      decimals: 18,
      imgSrc: imgSrcbLINK,
      symbol: bLINK_SYMBOL,
      name: bLINK_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x88B0811DdeC7c94Cc48dE601BdAbd1AC37d6940B',
      nativeAddress: '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD',
      oneAddress: 'one13zcgz8w7cly5e3yducqmm2734smad9qtdd0dq6',
      decimals: 18,
      imgSrc: imgSrcbLINK,
      symbol: bLINK_SYMBOL,
      name: bLINK_NAME,
    };
  }


  /**
   * Get bLINK token info by chain id
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
