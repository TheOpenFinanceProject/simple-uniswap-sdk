import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eREN_SYMBOL = 'eREN';
export const eREN_NAME = 'Binance BUSD Token';
export const imgSrceREN = 'https://openfi.dev/tokens/default/REN.png'
/**
 * eREN token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eREN {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x451E129b6045b6E4F48E7247388f21163f7743B7',
      nativeAddress: '0x408e41876cCCDC0F92210600ef50372656052a38',
      oneAddress: 'one1g50p9xmqgkmwfaywwfrn3repzclhwsahkd4wrv',
      decimals: 18,
      imgSrc: imgSrceREN,
      symbol: eREN_SYMBOL,
      name: eREN_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x451E129b6045b6E4F48E7247388f21163f7743B7',
      nativeAddress: '0x408e41876cCCDC0F92210600ef50372656052a38',
      oneAddress: 'one1g50p9xmqgkmwfaywwfrn3repzclhwsahkd4wrv',
      decimals: 18,
      imgSrc: imgSrceREN,
      symbol: eREN_SYMBOL,
      name: eREN_NAME,
    };
  }


  /**
   * Get eREN token info by chain id
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
