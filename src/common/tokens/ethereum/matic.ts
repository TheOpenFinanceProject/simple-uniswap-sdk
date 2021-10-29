
import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eMATIC_SYMBOL = 'eMATIC';
export const eMATIC_NAME = 'Matic/Polygon';
export const imgSrceMATIC = 'https://openfi.dev/tokens/default/MATIC.png'
/**
 * eMATIC token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eMATIC {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x301259f392B551CA8c592C9f676FCD2f9A0A84C5',
      nativeAddress: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
      oneAddress: 'one1xqf9nuujk4gu4rze9j0kwm7d97dq4px9rfeyaw',
      decimals: 18,
      imgSrc: imgSrceMATIC,
      symbol: eMATIC_SYMBOL,
      name: eMATIC_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x301259f392B551CA8c592C9f676FCD2f9A0A84C5',
      nativeAddress: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
      oneAddress: 'one1xqf9nuujk4gu4rze9j0kwm7d97dq4px9rfeyaw',
      decimals: 18,
      imgSrc: imgSrceMATIC,
      symbol: eMATIC_SYMBOL,
      name: eMATIC_NAME,
    };
  }


  /**
   * Get eMATIC token info by chain id
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
