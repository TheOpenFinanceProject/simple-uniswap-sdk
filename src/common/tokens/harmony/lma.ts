import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const LMA_SYMBOL = 'LMA';
export const LMA_NAME = 'LMA - Art - Gallery';
export const imgSrcLMA = 'https://swoop-exchange.s3-us-west-1.amazonaws.com/tokens/LMA.png';

/**
 * LMA token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class LMA {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x7d0546dBb1Dca8108d99Aa389A8e9Ce0C40B2370',
      nativeAddress: 'one105z5dka3mj5pprve4guf4r5uurzqkgms40ma3e',
      oneAddress: 'one105z5dka3mj5pprve4guf4r5uurzqkgms40ma3e',
      decimals: 18,
      imgSrc: imgSrcLMA,
      symbol: LMA_SYMBOL,
      name: LMA_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x7d0546dBb1Dca8108d99Aa389A8e9Ce0C40B2370',
      nativeAddress: 'one105z5dka3mj5pprve4guf4r5uurzqkgms40ma3e',
      oneAddress: 'one105z5dka3mj5pprve4guf4r5uurzqkgms40ma3e',
      decimals: 18,
      imgSrc: imgSrcLMA,
      symbol: LMA_SYMBOL,
      name: LMA_NAME,
    };
  }


  /**
   * Get LMA token info by chain id
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
