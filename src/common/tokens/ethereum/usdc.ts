import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eUSDC_SYMBOL = 'eUSDC';
export const eUSDC_NAME = 'USD Coin';
export const imgSrceUSDC = 'https://openfi.dev/tokens/default/USDC.png'
/**
 * eUSDC token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eUSDC {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x985458E523dB3d53125813eD68c274899e9DfAb4',
      nativeAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      oneAddress: 'one1np293efrmv74xyjcz0kk3sn53x0fm745f2hsuc',
      decimals: 6,
      imgSrc: imgSrceUSDC,
      symbol: eUSDC_SYMBOL,
      name: eUSDC_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x985458E523dB3d53125813eD68c274899e9DfAb4',
      nativeAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      oneAddress: 'one1np293efrmv74xyjcz0kk3sn53x0fm745f2hsuc',
      decimals: 6,
      imgSrc: imgSrceUSDC,
      symbol: eUSDC_SYMBOL,
      name: eUSDC_NAME,
    };
  }


  /**
   * Get eUSDC token info by chain id
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
