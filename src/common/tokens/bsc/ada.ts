import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const bADA_SYMBOL = 'bADA';
export const bADA_NAME = 'Binance Cardano';
export const imgSrcbADA = 'https://s2.coinmarketcap.com/static/img/coins/128x128/2010.png'
/**
 * bADA token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class bADA {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x582617bD8Ca80d22D4432E63Fda52D74dcDCEe4c',
      nativeAddress: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
      oneAddress: 'one1tqnp00vv4qxj94zr9e3lmffdwnwdemjvmkw0e6',
      decimals: 18,
      imgSrc: imgSrcbADA,
      symbol: bADA_SYMBOL,
      name: bADA_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x7954dA0b4A81019A9313403FCDe072B93Aa41d36',
      nativeAddress: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
      oneAddress: 'one1tqnp00vv4qxj94zr9e3lmffdwnwdemjvmkw0e6',
      decimals: 18,
      imgSrc: imgSrcbADA,
      symbol: bADA_SYMBOL,
      name: bADA_NAME,
    };
  }


  /**
   * Get bADA token info by chain id
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
