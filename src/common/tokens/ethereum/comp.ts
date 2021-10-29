import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

export const eCOMP_SYMBOL = 'eCOMP';
export const eCOMP_NAME = 'Compound';
export const imgSrceCOMP = 'https://openfi.dev/tokens/default/COMP.png'
/**
 * eCOMP token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class eCOMP {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x32137b9275EA35162812883582623cd6f6950958',
      nativeAddress: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
      oneAddress: 'one1xgfhhyn4ag63v2qj3q6cyc3u6mmf2z2cpnz4kd',
      decimals: 18,
      imgSrc: imgSrceCOMP,
      symbol: eCOMP_SYMBOL,
      name: eCOMP_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: '0xE176EBE47d621b984a73036B9DA5d834411ef734',
      nativeAddress: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
      oneAddress: 'one1u9mwheravgdesjnnqd4emfwcx3q3aae5hw36l2',
      decimals: 18,
      imgSrc: imgSrceCOMP,
      symbol: eCOMP_SYMBOL,
      name: eCOMP_NAME,
    };
  }


  /**
   * Get eCOMP token info by chain id
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
