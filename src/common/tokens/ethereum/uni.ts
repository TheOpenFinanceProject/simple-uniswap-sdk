import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eUNI_SYMBOL = 'eUNI';
export const eUNI_NAME = 'Uniswap';
export const imgSrceUNI = 'https://openfi.dev/tokens/default/UNI.png'
/**
 * eUNI token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eUNI {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x90D81749da8867962c760414C1C25ec926E889b6',
      nativeAddress: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
      oneAddress: 'one1jrvpwjw63pnevtrkqs2vrsj7eynw3zdkm75q03',
      decimals: 18,
      imgSrc: imgSrceUNI,
      symbol: eUNI_SYMBOL,
      name: eUNI_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x90D81749da8867962c760414C1C25ec926E889b6',
      nativeAddress: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
      oneAddress: 'one1jrvpwjw63pnevtrkqs2vrsj7eynw3zdkm75q03',
      decimals: 18,
      imgSrc: imgSrceUNI,
      symbol: eUNI_SYMBOL,
      name: eUNI_NAME,
    };
  }


  /**
   * Get eUNI token info by chain id
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
