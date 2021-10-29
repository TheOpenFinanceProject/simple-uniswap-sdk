import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eBUSD_SYMBOL = 'eBUSD';
export const eBUSD_NAME = 'Binance BUSD Token';
export const imgSrceBUSD = 'https://openfi.dev/tokens/default/BUSD.png'
/**
 * eBUSD token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eBUSD {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xE176EBE47d621b984a73036B9DA5d834411ef734',
      nativeAddress: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
      oneAddress: 'one1u9mwheravgdesjnnqd4emfwcx3q3aae5hw36l2',
      decimals: 18,
      imgSrc: imgSrceBUSD,
      symbol: eBUSD_SYMBOL,
      name: eBUSD_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0x4F6A55A131071c69f643E8B3c0A1911d04EC18CC',
      nativeAddress: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
      oneAddress: 'one1u9mwheravgdesjnnqd4emfwcx3q3aae5hw36l2',
      decimals: 18,
      imgSrc: imgSrceBUSD,
      symbol: eBUSD_SYMBOL,
      name: eBUSD_NAME,
    };
  }


  /**
   * Get eBUSD token info by chain id
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
