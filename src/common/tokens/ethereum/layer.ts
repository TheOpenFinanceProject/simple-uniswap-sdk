import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eLAYER_SYMBOL = 'eLAYER';
export const eLAYER_NAME = 'Unilayer';
export const imgSrceLAYER = 'https://openfi.dev/tokens/default/LAYER.png'
/**
 * eLAYER token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eLAYER {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x2875B4CfAb0A4cc4bdc7fBDf94b6E376826A4332',
      nativeAddress: '0x0fF6ffcFDa92c53F615a4A75D982f399C989366b',
      oneAddress: 'one1m30hvyzdpwxjhukzh0sxehlpwqzwjqg0rp3frn',
      decimals: 18,
      imgSrc: imgSrceLAYER,
      symbol: eLAYER_SYMBOL,
      name: eLAYER_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x2875B4CfAb0A4cc4bdc7fBDf94b6E376826A4332',
      nativeAddress: '0x0fF6ffcFDa92c53F615a4A75D982f399C989366b',
      oneAddress: 'one1m30hvyzdpwxjhukzh0sxehlpwqzwjqg0rp3frn',
      decimals: 18,
      imgSrc: imgSrceLAYER,
      symbol: eLAYER_SYMBOL,
      name: eLAYER_NAME,
    };
  }


  /**
   * Get eLAYER token info by chain id
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
