import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const bMOCHI_SYMBOL = 'bMOCHI';
export const bMOCHI_NAME = 'Binance MochiSwap Token';
export const imgSrcbMOCHI = 'https://s2.coinmarketcap.com/static/img/coins/128x128/8881.png'
/**
 * bMOCHI token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class bMOCHI {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xda73f5C25C0D644Afd20dA5535558956B192b262',
      nativeAddress: '0x055daB90880613a556a5ae2903B2682f8A5b8d27',
      oneAddress: 'one1mfeltsjup4jy4lfqmf2n24vf26ce9vnz0ntgss',
      decimals: 18,
      imgSrc: imgSrcbMOCHI,
      symbol: bMOCHI_SYMBOL,
      name: bMOCHI_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xda73f5C25C0D644Afd20dA5535558956B192b262',
      nativeAddress: '0x055daB90880613a556a5ae2903B2682f8A5b8d27',
      oneAddress: 'one1mfeltsjup4jy4lfqmf2n24vf26ce9vnz0ntgss',
      decimals: 18,
      imgSrc: imgSrcbMOCHI,
      symbol: bMOCHI_SYMBOL,
      name: bMOCHI_NAME,
    };
  }


  /**
   * Get bMOCHI token info by chain id
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
