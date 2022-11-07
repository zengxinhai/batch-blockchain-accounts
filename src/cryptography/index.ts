import { Account, Scheme } from './types';
import { createEthAccount } from './ether_account';
import { createEd25519Account } from './ed25519_account';

type AccountCreator = () => Account;
export const getAccountCreator = (scheme?: Scheme): AccountCreator => {
  if (scheme === 'ETH') return createEthAccount;
  if (scheme === 'Ed25519') return createEd25519Account;
  return createEthAccount;
}
