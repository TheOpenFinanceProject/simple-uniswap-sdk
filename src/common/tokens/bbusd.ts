import { ChainId } from '../../enums/chain-id';
import { Token } from '../../factories/token/models/token';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';

export const BBUSD_SYMBOL = 'bBUSD';
export const BBUSD_NAME = 'Binance Smart Chain BUSD';

/**
 * BBUSD token context (called `BBUSDContract` so people get a breaking changes if they use the old name of `BBUSD`)
 */
export class bBUSD {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x0aB43550A6915F9f67d0c454C2E90385E6497EaA',
      decimals: 18,
      symbol: BBUSD_SYMBOL,
      name: BBUSD_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xE6a72FeE7e34768661805DE2b621a8CDBe0DBc81',
      decimals: 18,
      symbol: BBUSD_SYMBOL,
      name: BBUSD_NAME,
    };
  }


  /**
   * Get BBUSD token info by chain id
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
