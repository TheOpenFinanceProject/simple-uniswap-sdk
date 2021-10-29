import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eIDRT_SYMBOL = 'eIDRT';
export const eIDRT_NAME = 'Rupiah Token';
export const imgSrceIDRT = 'https://openfi.dev/tokens/default/IDRT.png'
/**
 * eIDRT token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eIDRT {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xCEFbeA899CfcCdc653b171d063481b622086Be3F',
      nativeAddress: '0x998FFE1E43fAcffb941dc337dD0468d52bA5b48A',
      oneAddress: 'one1ema74zvulnxuv5a3w8gxxjqmvgsgd03l7y7zgk',
      decimals: 2,
      imgSrc: imgSrceIDRT,
      symbol: eIDRT_SYMBOL,
      name: eIDRT_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xCEFbeA899CfcCdc653b171d063481b622086Be3F',
      nativeAddress: '0x998FFE1E43fAcffb941dc337dD0468d52bA5b48A',
      oneAddress: 'one1ema74zvulnxuv5a3w8gxxjqmvgsgd03l7y7zgk',
      decimals: 2,
      imgSrc: imgSrceIDRT,
      symbol: eIDRT_SYMBOL,
      name: eIDRT_NAME,
    };
  }


  /**
   * Get eIDRT token info by chain id
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
