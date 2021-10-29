import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const bMATIC_SYMBOL = 'bMATIC';
export const bMATIC_NAME = 'Binance Matic/Polygon';
export const imgSrcbMATIC = 'https://openfi.dev/tokens/default/MATIC.png'
/**
 * bMATIC token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class bMATIC {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x6E7bE5B9B4C9953434CD83950D61408f1cCc3bee',
      nativeAddress: '0xCC42724C6683B7E57334c4E856f4c9965ED682bD',
      oneAddress: 'one1dea7twd5ex2ngdxdsw2s6c2q3uwvcwlwuf297s',
      decimals: 18,
      imgSrc: imgSrcbMATIC,
      symbol: bMATIC_SYMBOL,
      name: bMATIC_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xc0431Ddcc0D213Bf27EcEcA8C2362c0d0208c6DC',
      nativeAddress: '0xCC42724C6683B7E57334c4E856f4c9965ED682bD',
      oneAddress: 'one1dea7twd5ex2ngdxdsw2s6c2q3uwvcwlwuf297s',
      decimals: 18,
      imgSrc: imgSrcbMATIC,
      symbol: bMATIC_SYMBOL,
      name: bMATIC_NAME,
    };
  }


  /**
   * Get bMATIC token info by chain id
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
