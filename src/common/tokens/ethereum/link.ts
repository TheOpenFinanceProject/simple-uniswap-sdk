import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eLINK_SYMBOL = 'eLINK';
export const eLINK_NAME = 'ChainLink Token';
export const imgSrceLINK = 'https://openfi.dev/tokens/default/LINK.png'
/**
 * eLINK token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eLINK {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x218532a12a389a4a92fC0C5Fb22901D1c19198aA',
      nativeAddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
      oneAddress: 'one1yxzn9gf28zdy4yhup30my2gp68qerx929rv2ns',
      decimals: 18,
      imgSrc: imgSrceLINK,
      symbol: eLINK_SYMBOL,
      name: eLINK_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x218532a12a389a4a92fC0C5Fb22901D1c19198aA',
      nativeAddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
      oneAddress: 'one1yxzn9gf28zdy4yhup30my2gp68qerx929rv2ns',
      decimals: 18,
      imgSrc: imgSrceLINK,
      symbol: eLINK_SYMBOL,
      name: eLINK_NAME,
    };
  }


  /**
   * Get eLINK token info by chain id
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
