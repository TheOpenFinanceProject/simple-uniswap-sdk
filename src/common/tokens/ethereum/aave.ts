import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eAAVE_SYMBOL = 'eAAVE';
export const eAAVE_NAME = 'Aave Token';
export const imgSrceAAVE = 'https://openfi.dev/tokens/default/AAVE.png'
/**
 * eAAVE token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eAAVE {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xcF323Aad9E522B93F11c352CaA519Ad0E14eB40F',
      nativeAddress: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
      oneAddress: 'one1euer4tv72g4e8ugux5k255v66rs5adq0amhn2c',
      decimals: 18,
      imgSrc: imgSrceAAVE,
      symbol: eAAVE_SYMBOL,
      name: eAAVE_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xcF323Aad9E522B93F11c352CaA519Ad0E14eB40F',
      nativeAddress: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
      oneAddress: 'one1euer4tv72g4e8ugux5k255v66rs5adq0amhn2c',
      decimals: 18,
      imgSrc: imgSrceAAVE,
      symbol: eAAVE_SYMBOL,
      name: eAAVE_NAME,
    };
  }


  /**
   * Get eAAVE token info by chain id
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
