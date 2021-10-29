import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eBAT_SYMBOL = 'eBAT';
export const eBAT_NAME = 'Basic Attention Token';
export const imgSrceBAT = 'https://openfi.dev/tokens/default/BAT.png'
/**
 * eBAT token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eBAT {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x2875b4cfab0a4cc4bdc7fbdf94b6e376826a4332',
      nativeAddress: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
      oneAddress: 'one19p6mfnatpfxvf0w8l00efdhrw6px5sejcka7lw',
      decimals: 18,
      imgSrc: imgSrceBAT,
      symbol: eBAT_SYMBOL,
      name: eBAT_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x2875b4cfab0a4cc4bdc7fbdf94b6e376826a4332',
      nativeAddress: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
      oneAddress: 'one19p6mfnatpfxvf0w8l00efdhrw6px5sejcka7lw',
      decimals: 18,
      imgSrc: imgSrceBAT,
      symbol: eBAT_SYMBOL,
      name: eBAT_NAME,
    };
  }


  /**
   * Get eBAT token info by chain id
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
