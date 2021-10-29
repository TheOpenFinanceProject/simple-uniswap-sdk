import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eYFI_SYMBOL = 'eYFI';
export const eYFI_NAME = 'Binance BUSD Token';
export const imgSrceYFI = 'https://openfi.dev/tokens/default/YFI.png'
/**
 * eYFI token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eYFI {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
      nativeAddress: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
      oneAddress: 'one15rwqt7z2yl7vh56pxpvrjqv6hpjhd0q8z5f0d8',
      decimals: 18,
      imgSrc: imgSrceYFI,
      symbol: eYFI_SYMBOL,
      name: eYFI_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
      nativeAddress: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
      oneAddress: 'one15rwqt7z2yl7vh56pxpvrjqv6hpjhd0q8z5f0d8',
      decimals: 18,
      imgSrc: imgSrceYFI,
      symbol: eYFI_SYMBOL,
      name: eYFI_NAME,
    };
  }


  /**
   * Get eYFI token info by chain id
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
