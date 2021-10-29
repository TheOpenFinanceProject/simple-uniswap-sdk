import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const tWLUNA_SYMBOL = 'tWLUNA';
export const tWLUNA_NAME = 'Bridged Terra Wrapped Luna';
export const imgSrctWLUNA = 'https://assets.terra.money/icon/60/Luna.png'
/**
 * tWLUNA token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class tWLUNA {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x95CE547D730519A90dEF30d647F37D9E5359B6Ae',
      nativeAddress: '0x00eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', //no Real address check with Alex
      oneAddress: 'one1jh89gltnq5v6jr00xrty0umanef4nd4war9hfn',
      decimals: 18,
      imgSrc: imgSrctWLUNA,
      symbol: tWLUNA_SYMBOL,
      name: tWLUNA_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x95CE547D730519A90dEF30d647F37D9E5359B6Ae',
      nativeAddress: '0x00eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', //no Real address check with Alex
      oneAddress: 'one1jh89gltnq5v6jr00xrty0umanef4nd4war9hfn',
      decimals: 18,
      imgSrc: imgSrctWLUNA,
      symbol: tWLUNA_SYMBOL,
      name: tWLUNA_NAME,
    };
  }


  /**
   * Get tWLUNA token info by chain id
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
