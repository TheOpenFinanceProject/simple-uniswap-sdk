import { ChainId } from '../../enums/chain-id';
import { Token } from '../../factories/token/models/token';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';

export const WETH_SYMBOL = 'WONE';
export const WETH_NAME = 'Wrapped One';

/**
 * WETH token context (called `WETHContract` so people get a breaking changes if they use the old name of `WETH`)
 */
export class WETHContract {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
      decimals: 18,
      symbol: WETH_SYMBOL,
      name: WETH_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x7466d7d0c21fa05f32f5a0fa27e12bdc06348ce2',
      decimals: 18,
      symbol: WETH_SYMBOL,
      name: WETH_NAME,
    };
  }


  /**
   * Get WETH token info by chain id
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
