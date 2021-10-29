import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const tUST_SYMBOL = 'tUST';
export const tUST_NAME = 'Terra UST';
export const imgSrctUST = 'https://assets.terra.money/icon/60/UST.png'
/**
 * tUST token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class tUST {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x224e64ec1BDce3870a6a6c777eDd450454068FEC',
      nativeAddress: '0x00eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', //no Real address check with Alex
      oneAddress: 'one1yf8xfmqmmn3cwzn2d3mhah29q32qdrlvgu5xy3',
      decimals: 18,
      imgSrc: imgSrctUST,
      symbol: tUST_SYMBOL,
      name: tUST_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x224e64ec1BDce3870a6a6c777eDd450454068FEC',
      nativeAddress: '0x00eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', //no Real address check with Alex
      oneAddress: 'one1yf8xfmqmmn3cwzn2d3mhah29q32qdrlvgu5xy3',
      decimals: 18,
      imgSrc: imgSrctUST,
      symbol: tUST_SYMBOL,
      name: tUST_NAME,
    };
  }


  /**
   * Get tUST token info by chain id
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
