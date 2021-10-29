import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eSUSHI_SYMBOL = 'eSUSHI';
export const eSUSHI_NAME = 'SushiToken';
export const imgSrceSUSHI = 'https://openfi.dev/tokens/default/SUSHI.png'
/**
 * eSUSHI token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eSUSHI {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xBEC775Cb42AbFa4288dE81F387a9b1A3c4Bc552A',
      nativeAddress: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
      oneAddress: 'one1hmrhtj6z40ay9zx7s8ec02d350ztc4f2gfax0c',
      decimals: 18,
      imgSrc: imgSrceSUSHI,
      symbol: eSUSHI_SYMBOL,
      name: eSUSHI_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xBEC775Cb42AbFa4288dE81F387a9b1A3c4Bc552A',
      nativeAddress: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
      oneAddress: 'one1hmrhtj6z40ay9zx7s8ec02d350ztc4f2gfax0c',
      decimals: 18,
      imgSrc: imgSrceSUSHI,
      symbol: eSUSHI_SYMBOL,
      name: eSUSHI_NAME,
    };
  }


  /**
   * Get eSUSHI token info by chain id
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
