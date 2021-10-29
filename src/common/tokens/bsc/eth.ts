import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const bETH_SYMBOL = 'bETH';
export const bETH_NAME = 'Binance Ethereum';
export const imgSrcbETH = 'https://openfi.dev/tokens/default/ETH.png'
/**
 * bETH token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class bETH {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x783EE3E955832a3D52CA4050c4C251731c156020',
      nativeAddress: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
      oneAddress: 'one10qlw8624sv4r65k2gpgvfsj3wvwp2cpqdhx39q',
      decimals: 18,
      imgSrc: imgSrcbETH,
      symbol: bETH_SYMBOL,
      name: bETH_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x783EE3E955832a3D52CA4050c4C251731c156020',
      nativeAddress: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
      oneAddress: 'one10qlw8624sv4r65k2gpgvfsj3wvwp2cpqdhx39q',
      decimals: 18,
      imgSrc: imgSrcbETH,
      symbol: bETH_SYMBOL,
      name: bETH_NAME,
    };
  }


  /**
   * Get bETH token info by chain id
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
