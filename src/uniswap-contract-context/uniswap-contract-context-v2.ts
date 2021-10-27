import { JsonFragment } from '@ethersproject/abi';

export class UniswapContractContextV2 {
  /**
   * The uniswap router address
   */
  public static routerAddress = '0xE6a72FeE7e34768661805DE2b621a8CDBe0DBc81';

  /**
   * The uniswap factory address
   */
  public static factoryAddress = '0xBdEBd3af1723BBB33A8aDB68e3e77d65D7266F59';

  /**
   * The uniswap pair address
   */
  public static pairAddress = '0xFdedbD274025675e17603c8A9a92Bfaa13e9d5c7';

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
