import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eDAI_SYMBOL = 'eDAI';
export const eDAI_NAME = 'Dai Stablecoin';
export const imgSrceDAI = 'https://openfi.dev/tokens/default/DAI.png'
/**
 * eDAI token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eDAI {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f',
      nativeAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      oneAddress: 'one1a7th6tunrsvh3k6lvarkvmapat9s6qee9kna05',
      decimals: 18,
      imgSrc: imgSrceDAI,
      symbol: eDAI_SYMBOL,
      name: eDAI_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f',
      nativeAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      oneAddress: 'one1a7th6tunrsvh3k6lvarkvmapat9s6qee9kna05',
      decimals: 18,
      imgSrc: imgSrceDAI,
      symbol: eDAI_SYMBOL,
      name: eDAI_NAME,
    };
  }


  /**
   * Get eDAI token info by chain id
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
