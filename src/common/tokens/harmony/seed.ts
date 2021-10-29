import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const SEED_SYMBOL = 'SEED';
export const SEED_NAME = 'SEED Token';
export const imgSrcSEED = 'https://swoop-exchange.s3-us-west-1.amazonaws.com/tokens/1SEED.png';

/**
 * SEED token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class SEED {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x793DAC3Ec4969A5BEE684BcF4290d52feB8F51b4',
      nativeAddress: 'one10y76c0kyj6d9hmngf0859yx49l4c75d5z77zxr',
      oneAddress: 'one10y76c0kyj6d9hmngf0859yx49l4c75d5z77zxr',
      decimals: 18,
      imgSrc: imgSrcSEED,
      symbol: SEED_SYMBOL,
      name: SEED_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x793DAC3Ec4969A5BEE684BcF4290d52feB8F51b4',
      nativeAddress: 'one10y76c0kyj6d9hmngf0859yx49l4c75d5z77zxr',
      oneAddress: 'one10y76c0kyj6d9hmngf0859yx49l4c75d5z77zxr',
      decimals: 18,
      imgSrc: imgSrcSEED,
      symbol: SEED_SYMBOL,
      name: SEED_NAME,
    };
  }


  /**
   * Get SEED token info by chain id
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
