import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eHEX_SYMBOL = 'eHEX';
export const eHEX_NAME = 'HEX';
export const imgSrceHEX = 'https://openfi.dev/tokens/default/HEX.png'
/**
 * eHEX token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eHEX {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xf26D8c787e66254eE8B7A500073da8fb1ab1992D',
      nativeAddress: '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
      oneAddress: 'one17fkcc7r7vcj5a69h55qqw0dglvdtrxfdspsap0',
      decimals: 8,
      imgSrc: imgSrceHEX,
      symbol: eHEX_SYMBOL,
      name: eHEX_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xf26D8c787e66254eE8B7A500073da8fb1ab1992D',
      nativeAddress: '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
      oneAddress: 'one17fkcc7r7vcj5a69h55qqw0dglvdtrxfdspsap0',
      decimals: 8,
      imgSrc: imgSrceHEX,
      symbol: eHEX_SYMBOL,
      name: eHEX_NAME,
    };
  }


  /**
   * Get eHEX token info by chain id
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
