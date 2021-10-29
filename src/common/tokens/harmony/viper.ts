import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const VIPER_SYMBOL = 'VIPER';
export const VIPER_NAME = 'Viper Token';
export const imgSrcVIPER = 'https://assets.coingecko.com/coins/images/15305/large/0c4b902b40f14db918f4500956386414ab7ebcfe.jpeg?1620371961';

/**
 * VIPER token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class VIPER {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xEa589E93Ff18b1a1F1e9BaC7EF3E86Ab62addc79',
      nativeAddress: 'one1afvfayllrzc6ru0fhtr7705x4d32mhrewz4c77',
      oneAddress: 'one1afvfayllrzc6ru0fhtr7705x4d32mhrewz4c77',
      decimals: 18,
      imgSrc: imgSrcVIPER,
      symbol: VIPER_SYMBOL,
      name: VIPER_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xEa589E93Ff18b1a1F1e9BaC7EF3E86Ab62addc79',
      nativeAddress: 'one1afvfayllrzc6ru0fhtr7705x4d32mhrewz4c77',
      oneAddress: 'one1afvfayllrzc6ru0fhtr7705x4d32mhrewz4c77',
      decimals: 18,
      imgSrc: imgSrcVIPER,
      symbol: VIPER_SYMBOL,
      name: VIPER_NAME,
    };
  }


  /**
   * Get VIPER token info by chain id
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
