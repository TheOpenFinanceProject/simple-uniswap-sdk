import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eZRX_SYMBOL = 'eZRX';
export const eZRX_NAME = '0x Protocol Token';
export const imgSrceZRX = 'https://openfi.dev/tokens/default/ZRX.png'
/**
 * eZRX token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eZRX {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x8143E2A1085939cAA9cEf6665c2Ff32f7bc08435',
      nativeAddress: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
      oneAddress: 'one1s9p79gggtyuu42ww7en9ctln9aauppp4pmfv37',
      decimals: 18,
      imgSrc: imgSrceZRX,
      symbol: eZRX_SYMBOL,
      name: eZRX_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x8143E2A1085939cAA9cEf6665c2Ff32f7bc08435',
      nativeAddress: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
      oneAddress: 'one1s9p79gggtyuu42ww7en9ctln9aauppp4pmfv37',
      decimals: 18,
      imgSrc: imgSrceZRX,
      symbol: eZRX_SYMBOL,
      name: eZRX_NAME,
    };
  }


  /**
   * Get eZRX token info by chain id
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
