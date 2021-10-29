import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const OPENX_SYMBOL = 'OpenX';
export const OPENX_NAME = 'OpenSwap Token';
export const imgSrcOPENX = 'https://openfi.dev/tokens/default/oSWAP.png';

/**
 * OPENX token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class OPENX {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xc0431Ddcc0D213Bf27EcEcA8C2362c0d0208c6DC',
      nativeAddress: 'one1cpp3mhxq6gfm7flvaj5vyd3vp5pq33kuch2zg8',
      oneAddress: 'one1cpp3mhxq6gfm7flvaj5vyd3vp5pq33kuch2zg8',
      decimals: 18,
      imgSrc: imgSrcOPENX,
      symbol: OPENX_SYMBOL,
      name: OPENX_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x93e07A8226b646d1C93314AB9f3b87fAfC753906',
      nativeAddress: 'one1cpp3mhxq6gfm7flvaj5vyd3vp5pq33kuch2zg8',
      oneAddress: 'one1cpp3mhxq6gfm7flvaj5vyd3vp5pq33kuch2zg8',
      decimals: 18,
      imgSrc: imgSrcOPENX,
      symbol: OPENX_SYMBOL,
      name: OPENX_NAME,
    };
  }


  /**
   * Get OPENX token info by chain id
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
