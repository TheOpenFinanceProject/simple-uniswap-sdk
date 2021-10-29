import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eLMA_SYMBOL = 'eLMA';
export const eLMA_NAME = 'LMA - Art - Gallery';
export const imgSrceLMA = 'https://swoop-exchange.s3-us-west-1.amazonaws.com/tokens/LMA.png'
/**
 * eLMA token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eLMA {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x7d0546dBb1Dca8108d99Aa389A8e9Ce0C40B2370',
      nativeAddress: '0xae84F29B0C8e395cadF0D3448EB48843f1d49307',
      oneAddress: 'one105z5dka3mj5pprve4guf4r5uurzqkgms40ma3e',
      decimals: 18,
      imgSrc: imgSrceLMA,
      symbol: eLMA_SYMBOL,
      name: eLMA_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x7d0546dBb1Dca8108d99Aa389A8e9Ce0C40B2370',
      nativeAddress: '0xae84F29B0C8e395cadF0D3448EB48843f1d49307',
      oneAddress: 'one105z5dka3mj5pprve4guf4r5uurzqkgms40ma3e',
      decimals: 18,
      imgSrc: imgSrceLMA,
      symbol: eLMA_SYMBOL,
      name: eLMA_NAME,
    };
  }


  /**
   * Get eLMA token info by chain id
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
