import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eWBTC_SYMBOL = 'eWBTC';
export const eWBTC_NAME = 'Wrapped BTC';
export const imgSrceWBTC = 'https://openfi.dev/tokens/default/WBTC.png'
/**
 * eWBTC token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eWBTC {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x3095c7557bCb296ccc6e363DE01b760bA031F2d9',
      nativeAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      oneAddress: 'one1xz2uw4tmev5kenrwxc77qxmkpwsrrukel9ucc5',
      decimals: 8,
      imgSrc: imgSrceWBTC,
      symbol: eWBTC_SYMBOL,
      name: eWBTC_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x0Fe2849434dDCB859c0e9e089FcE7966a04EA4c6',
      nativeAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      oneAddress: 'one1xz2uw4tmev5kenrwxc77qxmkpwsrrukel9ucc5',
      decimals: 8,
      imgSrc: imgSrceWBTC,
      symbol: eWBTC_SYMBOL,
      name: eWBTC_NAME,
    };
  }


  /**
   * Get eWBTC token info by chain id
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
