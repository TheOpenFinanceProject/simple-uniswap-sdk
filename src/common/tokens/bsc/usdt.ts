import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const bUSDT_SYMBOL = 'bUSDT';
export const bUSDT_NAME = 'Binance USD Tether';
export const imgSrcbUSDT = 'https://openfi.dev/tokens/default/USDT.png'
/**
 * bUSDT token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class bUSDT {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x9A89d0e1b051640C6704Dde4dF881f73ADFEf39a',
      nativeAddress: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
      oneAddress: 'one1n2yapcds29jqcecymhjdlzqlwwklauu6dxsryq',
      decimals: 18,
      imgSrc: imgSrcbUSDT,
      symbol: bUSDT_SYMBOL,
      name: bUSDT_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x9A89d0e1b051640C6704Dde4dF881f73ADFEf39a',
      nativeAddress: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
      oneAddress: 'one1n2yapcds29jqcecymhjdlzqlwwklauu6dxsryq',
      decimals: 18,
      imgSrc: imgSrcbUSDT,
      symbol: bUSDT_SYMBOL,
      name: bUSDT_NAME,
    };
  }


  /**
   * Get bUSDT token info by chain id
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
