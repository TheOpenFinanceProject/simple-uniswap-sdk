import { Provider } from '@ethersproject/providers';
import { Multicall } from 'ethereum-multicall';

export class CustomMulticall extends Multicall {
  constructor(
    ethersProvider: Provider,
    multicallCustomContractAddress?: string | undefined
  ) {
    console.log(multicallCustomContractAddress, 'MULTI ADRESSS')
    console.log(ethersProvider, 'MULTI Provider')
    super({
      ethersProvider,
      tryAggregate: true,
      multicallCustomContractAddress,
    });
  }
}
