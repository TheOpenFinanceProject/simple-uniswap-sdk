import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const bBAKE_SYMBOL = 'bBAKE';
export const bBAKE_NAME = 'Binance BakeryToken';
export const imgSrcbBAKE = 'https://s2.coinmarketcap.com/static/img/coins/128x128/7064.png'
/**
 * bBAKE token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class bBAKE {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x4da9464DaF2b878e32E29115E2cFD786fE84692a',
      nativeAddress: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      oneAddress: 'one1fk55vnd09wrcuvhzjy279n7hsmlgg6f2kyu5ad',
      decimals: 18,
      imgSrc: imgSrcbBAKE,
      symbol: bBAKE_SYMBOL,
      name: bBAKE_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x4da9464DaF2b878e32E29115E2cFD786fE84692a',
      nativeAddress: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      oneAddress: 'one1fk55vnd09wrcuvhzjy279n7hsmlgg6f2kyu5ad',
      decimals: 18,
      imgSrc: imgSrcbBAKE,
      symbol: bBAKE_SYMBOL,
      name: bBAKE_NAME,
    };
  }


  /**
   * Get bBAKE token info by chain id
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
