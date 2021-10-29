import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const bUSDC_SYMBOL = 'bUSDC';
export const bUSDC_NAME = 'Binance USD Coin';
export const imgSrcbUSDC = 'https://openfi.dev/tokens/default/USDC.png'
/**
 * bUSDC token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class bUSDC {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x44cED87b9F1492Bf2DCf5c16004832569f7f6cBa',
      nativeAddress: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      oneAddress: 'one1gn8ds7ulzjft7tw0tstqqjpj260h7m96vkh2tn',
      decimals: 18,
      imgSrc: imgSrcbUSDC,
      symbol: bUSDC_SYMBOL,
      name: bUSDC_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xaC71B617a58B3CC136D1f6A118252f331faB44fC',
      nativeAddress: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      oneAddress: 'one1gn8ds7ulzjft7tw0tstqqjpj260h7m96vkh2tn',
      decimals: 18,
      imgSrc: imgSrcbUSDC,
      symbol: bUSDC_SYMBOL,
      name: bUSDC_NAME,
    };
  }


  /**
   * Get bUSDC token info by chain id
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
