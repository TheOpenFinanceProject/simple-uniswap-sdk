import { ChainId } from '../../enums/chain-id';
import { NativeCurrencyInfo } from '../../factories/pair/models/custom-network';
import { Token } from '../../factories/token/models/token';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';
import { deepClone } from '../utils/deep-clone';

const ETH_PREFIX = '_ONE';
export const ETH_SYMBOL = 'ONE';
export const ETH_NAME = 'Ones';

export const appendEthToContractAddress = (contractAddress: string): string => {
  return `${contractAddress}${ETH_PREFIX}`;
};

export const removeEthFromContractAddress = (
  contractAddress: string
): string => {
  return contractAddress
    .replace(ETH_PREFIX, '')
    .replace(ETH_PREFIX.toLowerCase(), '');
};

export const isNativeEth = (contractAddress: string): boolean => {
  return contractAddress.includes(ETH_PREFIX);
};

export const turnTokenIntoEthForResponse = (
  token: Token,
  nativeCurrencyInfo: NativeCurrencyInfo | undefined
): Token => {
  const clone = deepClone(token);
  // clear down contract address
  clone.contractAddress = 'NO_CONTRACT_ADDRESS';
  if (nativeCurrencyInfo) {
    clone.symbol = nativeCurrencyInfo.symbol;
    clone.name = nativeCurrencyInfo.name;
  } else {
    clone.symbol = ETH_SYMBOL;
    clone.name = ETH_NAME;
  }

  return clone;
};

/**
 * ETH token info
 */
export class ETH {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: appendEthToContractAddress(
        '0x34b415f4d3b332515e66f70595ace1dcf36254c5'
      ),
      decimals: 18,
      symbol: ETH_SYMBOL,
      name: ETH_NAME,
    };
  }

  public static TESTNET(): Token {
    return {
      chainId: ChainId.TESTNET,
      contractAddress: appendEthToContractAddress(
        '0xd078799c53396616844e2fa97f0dd2b4c145a685'
      ),
      decimals: 18,
      symbol: ETH_SYMBOL,
      name: ETH_NAME,
    };
  }

  /**
   * Get ETH token info by chain id
   * @param chainId The chain id
   */
  public static info(
    chainId: ChainId | number,
    customNetworkNativeWrappedTokenInfo: Token | undefined = undefined
  ): Token {
    if (customNetworkNativeWrappedTokenInfo) {
      return {
        ...customNetworkNativeWrappedTokenInfo,
        contractAddress: appendEthToContractAddress(
          customNetworkNativeWrappedTokenInfo.contractAddress
        ),
      };
    }
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
