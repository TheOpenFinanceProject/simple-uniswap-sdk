import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const pWMATIC_SYMBOL = 'pWMATIC';
export const pWMATIC_NAME = 'Poly Wrapped Matic';
export const imgSrcpWMATIC = 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'
/**
 * pWMATIC token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class pWMATIC {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xfbdd194376de19a88118e84e279b977f165d01b8',
      nativeAddress: '0x00eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', //Native Token so no Real address
      oneAddress: 'one1l0w3jsmkmcv63qgcap8z0xuh0ut96qdcqsnnxk',
      decimals: 18,
      imgSrc: imgSrcpWMATIC,
      symbol: pWMATIC_SYMBOL,
      name: pWMATIC_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xfbdd194376de19a88118e84e279b977f165d01b8',
      nativeAddress: '0x00eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', //Native Token so no Real address
      oneAddress: 'one1l0w3jsmkmcv63qgcap8z0xuh0ut96qdcqsnnxk',
      decimals: 18,
      imgSrc: imgSrcpWMATIC,
      symbol: pWMATIC_SYMBOL,
      name: pWMATIC_NAME,
    };
  }


  /**
   * Get pWMATIC token info by chain id
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
