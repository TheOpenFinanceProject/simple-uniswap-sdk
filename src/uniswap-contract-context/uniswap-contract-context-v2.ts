import { JsonFragment } from '@ethersproject/abi';

export class UniswapContractContextV2 {
  /**
   * The uniswap router address
   */
  public static routerAddress = '0xE6a72FeE7e34768661805DE2b621a8CDBe0DBc81';

  /**
   * The uniswap factory address
   */
  public static factoryAddress = '0x6fb89b812c757b87e4dcc638d284e8735c9229bd';

  /**
   * The uniswap pair address
   */
  public static pairAddress = '0x6fb89b812c757b87e4dcc638d284e8735c9229bd';

  /**
   * Uniswap v2 router
   */
  public static routerAbi: JsonFragment[] = require('../ABI/uniswap-router-v2.json');

  /**
   * Uniswap v2 factory
   */
  public static factoryAbi: JsonFragment[] = require('../ABI/uniswap-factory-v2.json');

  /**
   * Uniswap v2 pair
   */
  public static pairAbi: JsonFragment[] = require('../ABI/uniswap-pair-v2.json');
}
