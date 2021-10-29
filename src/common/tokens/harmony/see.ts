import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const SEE_SYMBOL = 'SEE';
export const SEE_NAME = 'SeeSwap Token';
export const imgSrcSEE = 'https://swoop-exchange.s3-us-west-1.amazonaws.com/tokens/SEE.png';

/**
 * SEE token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class SEE {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x7fA202fdb3B0eCB975119cc3A895BFB3104aDA68',
      nativeAddress: 'one1073q9ldnkrktjag3nnp639dlkvgy4kngn2j086',
      oneAddress: 'one1073q9ldnkrktjag3nnp639dlkvgy4kngn2j086',
      decimals: 18,
      imgSrc: imgSrcSEE,
      symbol: SEE_SYMBOL,
      name: SEE_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x7fA202fdb3B0eCB975119cc3A895BFB3104aDA68',
      nativeAddress: 'one1073q9ldnkrktjag3nnp639dlkvgy4kngn2j086',
      oneAddress: 'one1073q9ldnkrktjag3nnp639dlkvgy4kngn2j086',
      decimals: 18,
      imgSrc: imgSrcSEE,
      symbol: SEE_SYMBOL,
      name: SEE_NAME,
    };
  }


  /**
   * Get SEE token info by chain id
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
