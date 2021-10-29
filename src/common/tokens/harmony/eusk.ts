import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const EUSK_SYMBOL = 'EUSK';
export const EUSK_NAME = 'Mintbes Token';
export const imgSrcEUSK = 'https://swoop-exchange.s3-us-west-1.amazonaws.com/tokens/EUSK.png';

/**
 * EUSK token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class EUSK {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xc0431Ddcc0D213Bf27EcEcA8C2362c0d0208c6DC',
      nativeAddress: 'one1sksamyvu6cz65t4dfvql7yvs2p9u4dsfnj2d38',
      oneAddress: 'one1sksamyvu6cz65t4dfvql7yvs2p9u4dsfnj2d38',
      decimals: 18,
      imgSrc: imgSrcEUSK,
      symbol: EUSK_SYMBOL,
      name: EUSK_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xc0431Ddcc0D213Bf27EcEcA8C2362c0d0208c6DC',
      nativeAddress: 'one1sksamyvu6cz65t4dfvql7yvs2p9u4dsfnj2d38',
      oneAddress: 'one1sksamyvu6cz65t4dfvql7yvs2p9u4dsfnj2d38',
      decimals: 18,
      imgSrc: imgSrcEUSK,
      symbol: EUSK_SYMBOL,
      name: EUSK_NAME,
    };
  }


  /**
   * Get EUSK token info by chain id
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