import { ChainId } from '../../enums/chain-id';
import { Token } from '../../factories/token/models/token';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';

export const OSWAP_SYMBOL = 'OSWAP';
export const OSWAP_NAME = 'OSWAP';

/**
 * OSWAP token context (called `OSWAPContract` so people get a breaking changes if they use the old name of `OSWAP`)
 */
export class OSWAP {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xc0431Ddcc0D213Bf27EcEcA8C2362c0d0208c6DC',
      decimals: 18,
      symbol: OSWAP_SYMBOL,
      name: OSWAP_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x93e07A8226b646d1C93314AB9f3b87fAfC753906',
      decimals: 18,
      symbol: OSWAP_SYMBOL,
      name: OSWAP_NAME,
    };
  }


  /**
   * Get OSWAP token info by chain id
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
