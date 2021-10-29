import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eUP_SYMBOL = 'eUP';
export const eUP_NAME = 'UP';
export const imgSrceUP = 'https://openfi.dev/tokens/default/UP.png'
/**
 * eUP token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eUP {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xBF33E24DceC9C884e286e3ad1D5C7C7f1f4D7afD',
      nativeAddress: '0xb6c5C839ceF46082A2B51164E8Db649c121f147E',
      oneAddress: 'one1hue7ynwwe8ygfc5xuwk36hru0u0567ha29qf8s',
      decimals: 18,
      imgSrc: imgSrceUP,
      symbol: eUP_SYMBOL,
      name: eUP_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xBF33E24DceC9C884e286e3ad1D5C7C7f1f4D7afD',
      nativeAddress: '0xb6c5C839ceF46082A2B51164E8Db649c121f147E',
      oneAddress: 'one1hue7ynwwe8ygfc5xuwk36hru0u0567ha29qf8s',
      decimals: 18,
      imgSrc: imgSrceUP,
      symbol: eUP_SYMBOL,
      name: eUP_NAME,
    };
  }


  /**
   * Get eUP token info by chain id
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
