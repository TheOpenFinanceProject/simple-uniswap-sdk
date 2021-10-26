import { JsonFragment } from '@ethersproject/abi';

export class UniswapContractContextV3 {
  /**
   * The uniswap router address
   */
  public static routerAddress = '0xE6a72FeE7e34768661805DE2b621a8CDBe0DBc81';

  /**
   * The uniswap factory address
   */
  public static factoryAddress = '0x6fb89b812c757b87e4dcc638d284e8735c9229bd';

  /**
   * The uniswap quoter address
   */
  public static quoterAddress = '0x6fb89b812c757b87e4dcc638d284e8735c9229bd';

  /**
   * Uniswap router
   */
  public static routerAbi: JsonFragment[] = require('../ABI/uniswap-router-v3.json');

  /**
   * Uniswap factory
   */
  public static factoryAbi: JsonFragment[] = require('../ABI/uniswap-factory-v3.json');

  /**
   * Uniswap quoter
   */
  public static quoterAbi: JsonFragment[] = require('../ABI/uniswap-quoter-v3.json');
}
