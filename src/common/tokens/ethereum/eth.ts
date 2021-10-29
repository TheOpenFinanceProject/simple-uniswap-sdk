import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eETH_SYMBOL = 'eETH';
export const eETH_NAME = 'Ether';
export const imgSrceETH = 'https://openfi.dev/tokens/default/ETH.png'
/**
 * eETH token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eETH {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x6983D1E6DEf3690C4d616b13597A09e6193EA013',
      nativeAddress: '0x00eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', //Native Token so no Real address
      oneAddress: 'one1dxparek77d5scntpdvf4j7sfucvnagqnhhfaun',
      decimals: 18,
      imgSrc: imgSrceETH,
      symbol: eETH_SYMBOL,
      name: eETH_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x01C6d5a307f36EDa4C1Ded36C9139618ff22ed0D',
      nativeAddress: '0x00eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', //Native Token so no Real address
      oneAddress: 'one1dxparek77d5scntpdvf4j7sfucvnagqnhhfaun',
      decimals: 18,
      imgSrc: imgSrceETH,
      symbol: eETH_SYMBOL,
      name: eETH_NAME,
    };
  }


  /**
   * Get eETH token info by chain id
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
