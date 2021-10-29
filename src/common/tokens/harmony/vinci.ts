import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const VINCI_SYMBOL = 'VINCI';
export const VINCI_NAME = 'DaVinci Token';
export const imgSrcVINCI = 'https://d1xrz6ki9z98vb.cloudfront.net/venomswap/tokens/VINCI.png';

/**
 * VINCI token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class VINCI {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xb8e0497018c991e86311b64efd9d57b06aedbbae',
      nativeAddress: 'one1hrsyjuqcexg7scc3ke80m82hkp4wmwawwuv9ft',
      oneAddress: 'one1hrsyjuqcexg7scc3ke80m82hkp4wmwawwuv9ft',
      decimals: 18,
      imgSrc: imgSrcVINCI,
      symbol: VINCI_SYMBOL,
      name: VINCI_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xb8e0497018c991e86311b64efd9d57b06aedbbae',
      nativeAddress: 'one1hrsyjuqcexg7scc3ke80m82hkp4wmwawwuv9ft',
      oneAddress: 'one1hrsyjuqcexg7scc3ke80m82hkp4wmwawwuv9ft',
      decimals: 18,
      imgSrc: imgSrcVINCI,
      symbol: VINCI_SYMBOL,
      name: VINCI_NAME,
    };
  }


  /**
   * Get VINCI token info by chain id
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
