import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const HMOCHI_SYMBOL = 'HMOCHI';
export const HMOCHI_NAME = 'MochiSwap Token Harmony';
export const imgSrcHMOCHI = 'https://s3-us-west-1.amazonaws.com/tokens.mochiswap.io/images/hMOCHI-token-logo.png';

/**
 * HMOCHI token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class HMOCHI {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x0dD740Db89B9fDA3Baadf7396DdAD702b6E8D6f5',
      nativeAddress: 'one1pht5pkufh8768w4d7uukmkkhq2mw34h4yrrvh2',
      oneAddress: 'one1pht5pkufh8768w4d7uukmkkhq2mw34h4yrrvh2',
      decimals: 18,
      imgSrc: imgSrcHMOCHI,
      symbol: HMOCHI_SYMBOL,
      name: HMOCHI_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x0dD740Db89B9fDA3Baadf7396DdAD702b6E8D6f5',
      nativeAddress: 'one1pht5pkufh8768w4d7uukmkkhq2mw34h4yrrvh2',
      oneAddress: 'one1pht5pkufh8768w4d7uukmkkhq2mw34h4yrrvh2',
      decimals: 18,
      imgSrc: imgSrcHMOCHI,
      symbol: HMOCHI_SYMBOL,
      name: HMOCHI_NAME,
    };
  }


  /**
   * Get HMOCHI token info by chain id
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
