import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eFRONT_SYMBOL = 'eFRONT';
export const eFRONT_NAME = 'Binance BUSD Token';
export const imgSrceFRONT = 'https://openfi.dev/tokens/default/FRONT.png'
/**
 * eFRONT token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eFRONT {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x1eE5839950Fd7a227f91CF679b1931dd6F5798B3',
      nativeAddress: '0xf8C3527CC04340b208C854E985240c02F7B7793f',
      oneAddress: 'one1rmjc8x2sl4azylu3eanekxf3m4h40x9n6hkkrs',
      decimals: 18,
      imgSrc: imgSrceFRONT,
      symbol: eFRONT_SYMBOL,
      name: eFRONT_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x1eE5839950Fd7a227f91CF679b1931dd6F5798B3',
      nativeAddress: '0xf8C3527CC04340b208C854E985240c02F7B7793f',
      oneAddress: 'one1rmjc8x2sl4azylu3eanekxf3m4h40x9n6hkkrs',
      decimals: 18,
      imgSrc: imgSrceFRONT,
      symbol: eFRONT_SYMBOL,
      name: eFRONT_NAME,
    };
  }


  /**
   * Get eFRONT token info by chain id
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
