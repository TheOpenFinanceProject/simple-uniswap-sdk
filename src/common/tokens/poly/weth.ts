import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const pWETH_SYMBOL = 'pWETH';
export const pWETH_NAME = 'Poly Wrapped Ether';
export const imgSrcpWETH = 'https://openfi.dev/tokens/default/ETH.png'
/**
 * pWETH token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class pWETH {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x2bf9b864cdc97b08b6d79ad4663e71b8ab65c45c',
      nativeAddress: '0x00eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', //no Real address check with Alex
      oneAddress: 'one190umsexde9as3dkhnt2xv0n3hz4kt3zu8qzn9y',
      decimals: 18,
      imgSrc: imgSrcpWETH,
      symbol: pWETH_SYMBOL,
      name: pWETH_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x2bf9b864cdc97b08b6d79ad4663e71b8ab65c45c',
      nativeAddress: '0x00eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', //no Real address check with Alex
      oneAddress: 'one190umsexde9as3dkhnt2xv0n3hz4kt3zu8qzn9y',
      decimals: 18,
      imgSrc: imgSrcpWETH,
      symbol: pWETH_SYMBOL,
      name: pWETH_NAME,
    };
  }


  /**
   * Get pWETH token info by chain id
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
