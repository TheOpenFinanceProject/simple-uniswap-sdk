import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const ARANK_SYMBOL = 'ARANK';
export const ARANK_NAME = 'ARANK Token';
export const imgSrcARANK = 'https://swoop-exchange.s3-us-west-1.amazonaws.com/tokens/ARANK.png';

/**
 * ARANK token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class ARANK {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xBD16b0B2eB520b7Ff4A4156d367Ee359Ac19c531',
      nativeAddress: 'one1h5ttpvht2g9hla9yz4knvlhrtxkpn3f3f5lkgk',
      oneAddress: 'one1h5ttpvht2g9hla9yz4knvlhrtxkpn3f3f5lkgk',
      decimals: 18,
      imgSrc: imgSrcARANK,
      symbol: ARANK_SYMBOL,
      name: ARANK_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xBD16b0B2eB520b7Ff4A4156d367Ee359Ac19c531',
      nativeAddress: 'one1h5ttpvht2g9hla9yz4knvlhrtxkpn3f3f5lkgk',
      oneAddress: 'one1h5ttpvht2g9hla9yz4knvlhrtxkpn3f3f5lkgk',
      decimals: 18,
      imgSrc: imgSrcARANK,
      symbol: ARANK_SYMBOL,
      name: ARANK_NAME,
    };
  }


  /**
   * Get ARANK token info by chain id
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
