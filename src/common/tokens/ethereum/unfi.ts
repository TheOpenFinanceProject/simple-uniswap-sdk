import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eUNFI_SYMBOL = 'eUNFI';
export const eUNFI_NAME = 'UNFI';
export const imgSrceUNFI = 'https://openfi.dev/tokens/default/UNFI.png'
/**
 * eUNFI token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eUNFI {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xa1c05343Ecc902568248DdF837B7735a800aDA23',
      nativeAddress: '0x441761326490cACF7aF299725B6292597EE822c2',
      oneAddress: 'one158q9xslveyp9dqjgmhur0dmnt2qq4k3rmf8usr',
      decimals: 18,
      imgSrc: imgSrceUNFI,
      symbol: eUNFI_SYMBOL,
      name: eUNFI_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xa1c05343Ecc902568248DdF837B7735a800aDA23',
      nativeAddress: '0x441761326490cACF7aF299725B6292597EE822c2',
      oneAddress: 'one158q9xslveyp9dqjgmhur0dmnt2qq4k3rmf8usr',
      decimals: 18,
      imgSrc: imgSrceUNFI,
      symbol: eUNFI_SYMBOL,
      name: eUNFI_NAME,
    };
  }


  /**
   * Get eUNFI token info by chain id
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
