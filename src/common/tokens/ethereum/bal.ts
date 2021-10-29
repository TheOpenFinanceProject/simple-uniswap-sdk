import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eBAL_SYMBOL = 'eBAL';
export const eBAL_NAME = 'Balancer';
export const imgSrceBAL = 'https://openfi.dev/tokens/default/BAL.png'
/**
 * eBAL token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eBAL {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xDc5f76104D0B8D2bF2c2Bbe06CDFE17004E9010f',
      nativeAddress: '0xba100000625a3754423978a60c9317c58a424e3D',
      oneAddress: 'one1m30hvyzdpwxjhukzh0sxehlpwqzwjqg0rp3frn',
      decimals: 18,
      imgSrc: imgSrceBAL,
      symbol: eBAL_SYMBOL,
      name: eBAL_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xDc5f76104D0B8D2bF2c2Bbe06CDFE17004E9010f',
      nativeAddress: '0xba100000625a3754423978a60c9317c58a424e3D',
      oneAddress: 'one1m30hvyzdpwxjhukzh0sxehlpwqzwjqg0rp3frn',
      decimals: 18,
      imgSrc: imgSrceBAL,
      symbol: eBAL_SYMBOL,
      name: eBAL_NAME,
    };
  }


  /**
   * Get eBAL token info by chain id
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
