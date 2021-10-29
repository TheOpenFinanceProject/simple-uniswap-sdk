import { UniswapError, ErrorCodes } from "..";
import { ChainId } from "../enums/chain-id";

export interface MultiCallType {
    chainId: number;
    contractAddress: string;
}
export class MultiCallContract {
    public static MAINNET(): MultiCallType {
      return {
        chainId: ChainId.MAINNET,
        contractAddress: '0xffe43d59ae1581f5a98c38868704ccab7706ccf7',
      };
    }
  
    public static TESTNET(): MultiCallType {
      return {
        chainId: ChainId.TESTNET,
        contractAddress: '0xffe43d59ae1581f5a98c38868704ccab7706ccf7',
      };
    }
  
  
    /**
     * Get MultiCallContract token info by chain id
     * @param chainId The chain id
     */
    public static getContract(chainId: ChainId | number): MultiCallType {
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
  