import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const bCAKE_SYMBOL = 'bCAKE';
export const bCAKE_NAME = 'Binance PancakeSwap';
export const imgSrcbCAKE = 'https://s2.coinmarketcap.com/static/img/coins/128x128/7186.png'
/**
 * bCAKE token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class bCAKE {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x3e9D32580B0BF3aE72AFCBEbC68710d2Fd9a18F0',
      nativeAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      oneAddress: 'one186wnykqtp0e6uu40e04udpcs6t7e5x8s6zngzy',
      decimals: 18,
      imgSrc: imgSrcbCAKE,
      symbol: bCAKE_SYMBOL,
      name: bCAKE_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x3e9D32580B0BF3aE72AFCBEbC68710d2Fd9a18F0',
      nativeAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      oneAddress: 'one186wnykqtp0e6uu40e04udpcs6t7e5x8s6zngzy',
      decimals: 18,
      imgSrc: imgSrcbCAKE,
      symbol: bCAKE_SYMBOL,
      name: bCAKE_NAME,
    };
  }


  /**
   * Get bCAKE token info by chain id
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
