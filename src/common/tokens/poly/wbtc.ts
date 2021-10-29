import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const pWBTC_SYMBOL = 'pWBTC';
export const pWBTC_NAME = 'Poly Wrapped BTC';
export const imgSrcpWBTC = 'https://openfi.dev/tokens/default/WBTC.png'
/**
 * pWBTC token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class pWBTC {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x5d9ab5522c64e1f6ef5e3627eccc093f56167818',
      nativeAddress: '0x00eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', //no Real address check with Alex
      oneAddress: 'one1tkdt253vvnsldm67xcn7enqf8atpv7qczg3rrv',
      decimals: 8,
      imgSrc: imgSrcpWBTC,
      symbol: pWBTC_SYMBOL,
      name: pWBTC_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x5d9ab5522c64e1f6ef5e3627eccc093f56167818',
      nativeAddress: '0x00eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', //no Real address check with Alex
      oneAddress: 'one1tkdt253vvnsldm67xcn7enqf8atpv7qczg3rrv',
      decimals: 8,
      imgSrc: imgSrcpWBTC,
      symbol: pWBTC_SYMBOL,
      name: pWBTC_NAME,
    };
  }


  /**
   * Get pWBTC token info by chain id
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
