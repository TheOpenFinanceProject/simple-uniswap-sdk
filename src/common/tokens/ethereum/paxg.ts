import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const ePAXG_SYMBOL = 'ePAXG';
export const ePAXG_NAME = 'Paxos Gold';
export const imgSrcePAXG = 'https://openfi.dev/tokens/default/PAXG.png'
/**
 * ePAXG token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class ePAXG {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x7aFB0E2ebA6Dc938945FE0f42484d3b8F442D0AC',
      nativeAddress: '0x45804880De22913dAFE09f4980848ECE6EcbAf78',
      oneAddress: 'one10tasut46dhyn39zlur6zfpxnhr6y959v48534d',
      decimals: 18,
      imgSrc: imgSrcePAXG,
      symbol: ePAXG_SYMBOL,
      name: ePAXG_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x7aFB0E2ebA6Dc938945FE0f42484d3b8F442D0AC',
      nativeAddress: '0x45804880De22913dAFE09f4980848ECE6EcbAf78',
      oneAddress: 'one10tasut46dhyn39zlur6zfpxnhr6y959v48534d',
      decimals: 18,
      imgSrc: imgSrcePAXG,
      symbol: ePAXG_SYMBOL,
      name: ePAXG_NAME,
    };
  }


  /**
   * Get ePAXG token info by chain id
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
