import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const XYA_SYMBOL = 'XYA';
export const XYA_NAME = 'Freyala';
export const imgSrcXYA = 'https://freyala.com/images/logo.png';

/**
 * XYA token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class XYA {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x9b68BF4bF89c115c721105eaf6BD5164aFcc51E4',
      nativeAddress: 'one1nd5t7jlcnsg4cus3qh40d023vjhuc50yhu7n08',
      oneAddress: 'one1nd5t7jlcnsg4cus3qh40d023vjhuc50yhu7n08',
      decimals: 18,
      imgSrc: imgSrcXYA,
      symbol: XYA_SYMBOL,
      name: XYA_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x9b68BF4bF89c115c721105eaf6BD5164aFcc51E4',
      nativeAddress: 'one1nd5t7jlcnsg4cus3qh40d023vjhuc50yhu7n08',
      oneAddress: 'one1nd5t7jlcnsg4cus3qh40d023vjhuc50yhu7n08',
      decimals: 18,
      imgSrc: imgSrcXYA,
      symbol: XYA_SYMBOL,
      name: XYA_NAME,
    };
  }


  /**
   * Get XYA token info by chain id
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
