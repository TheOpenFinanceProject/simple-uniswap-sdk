import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eUSDT_SYMBOL = 'eUSDT';
export const eUSDT_NAME = 'USD Tether';
export const imgSrceUSDT = 'https://openfi.dev/tokens/default/USDT.png'
/**
 * eUSDT token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eUSDT {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f',
      nativeAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      oneAddress: 'one18s4ch6vu2pvnpq0252njfu9c9p044w50gw3l6y',
      decimals: 6,
      imgSrc: imgSrceUSDT,
      symbol: eUSDT_SYMBOL,
      name: eUSDT_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f',
      nativeAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      oneAddress: 'one18s4ch6vu2pvnpq0252njfu9c9p044w50gw3l6y',
      decimals: 6,
      imgSrc: imgSrceUSDT,
      symbol: eUSDT_SYMBOL,
      name: eUSDT_NAME,
    };
  }


  /**
   * Get eUSDT token info by chain id
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
