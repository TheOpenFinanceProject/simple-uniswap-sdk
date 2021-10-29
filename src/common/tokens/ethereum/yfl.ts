import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eYFL_SYMBOL = 'eYFL';
export const eYFL_NAME = 'YFLink';
export const imgSrceYFL = 'https://openfi.dev/tokens/default/YFL.png'
/**
 * eYFL token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eYFL {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x421b372389f89E2Abbf2C91f006Fc04a1f424B2D',
      nativeAddress: '0x28cb7e841ee97947a86B06fA4090C8451f64c0be',
      oneAddress: 'one1ggdnwguflz0z4wljey0sqm7qfg05yjed9vcclx',
      decimals: 18,
      imgSrc: imgSrceYFL,
      symbol: eYFL_SYMBOL,
      name: eYFL_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x421b372389f89E2Abbf2C91f006Fc04a1f424B2D',
      nativeAddress: '0x28cb7e841ee97947a86B06fA4090C8451f64c0be',
      oneAddress: 'one1ggdnwguflz0z4wljey0sqm7qfg05yjed9vcclx',
      decimals: 18,
      imgSrc: imgSrceYFL,
      symbol: eYFL_SYMBOL,
      name: eYFL_NAME,
    };
  }


  /**
   * Get eYFL token info by chain id
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
