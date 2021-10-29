import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const ONE_SYMBOL = 'ONE';
export const ONE_NAME = 'Harmony One';
export const imgSrcONE = 'https://openfi.dev/tokens/default/ONE.png';

/**
 * ONE token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class ONE {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
      nativeAddress: 'one1eanyppa9hvpr0g966e6zs5hvdjxkngn6jtulua',
      oneAddress: 'one1eanyppa9hvpr0g966e6zs5hvdjxkngn6jtulua',
      decimals: 18,
      imgSrc: imgSrcONE,
      symbol: ONE_SYMBOL,
      name: ONE_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x7466d7d0c21fa05f32f5a0fa27e12bdc06348ce2',
      nativeAddress: 'one1eanyppa9hvpr0g966e6zs5hvdjxkngn6jtulua',
      oneAddress: 'one1eanyppa9hvpr0g966e6zs5hvdjxkngn6jtulua',
      decimals: 18,
      imgSrc: imgSrcONE,
      symbol: ONE_SYMBOL,
      name: ONE_NAME,
    };
  }


  /**
   * Get ONE token info by chain id
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
