import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eCRO_SYMBOL = 'eCRO';
export const eCRO_NAME = 'Crypto.com Coin';
export const imgSrceCRO = 'https://openfi.dev/tokens/default/CRO.png'
/**
 * eCRO token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eCRO {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x2672B791D23879995AaBdf51Bc7d3DF54BB4e266',
      nativeAddress: '0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b',
      oneAddress: 'one1yeet0ywj8puejk4tmagmclfa749mfcnxg069nv',
      decimals: 8,
      imgSrc: imgSrceCRO,
      symbol: eCRO_SYMBOL,
      name: eCRO_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x2672B791D23879995AaBdf51Bc7d3DF54BB4e266',
      nativeAddress: '0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b',
      oneAddress: 'one1yeet0ywj8puejk4tmagmclfa749mfcnxg069nv',
      decimals: 8,
      imgSrc: imgSrceCRO,
      symbol: eCRO_SYMBOL,
      name: eCRO_NAME,
    };
  }


  /**
   * Get eCRO token info by chain id
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
