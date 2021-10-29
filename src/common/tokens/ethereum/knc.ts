import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eKNC_SYMBOL = 'eKNC';
export const eKNC_NAME = 'Kyber Network Crystal';
export const imgSrceKNC = 'https://openfi.dev/tokens/default/KNC.png'
/**
 * eKNC token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eKNC {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x0a47D2dC4B7Ee3D4D7FD471d993b0821621e1769',
      nativeAddress: '0xdd974D5C2e2928deA5F71b9825b8b646686BD200',
      oneAddress: 'one1pfra9hzt0m3af4laguwejwcgy93pu9mfuwwkt9',
      decimals: 18,
      imgSrc: imgSrceKNC,
      symbol: eKNC_SYMBOL,
      name: eKNC_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xE176EBE47d621b984a73036B9DA5d834411ef734',
      nativeAddress: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
      oneAddress: 'one1u9mwheravgdesjnnqd4emfwcx3q3aae5hw36l2',
      decimals: 18,
      imgSrc: imgSrceKNC,
      symbol: eKNC_SYMBOL,
      name: eKNC_NAME,
    };
  }


  /**
   * Get eKNC token info by chain id
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
