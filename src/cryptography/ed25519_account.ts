import { AptosAccount, HexString } from 'aptos';

export const createEd25519Account = () => {
  const account = new AptosAccount();
  const keyBytes = account.signingKey.secretKey;
  const key = HexString.fromUint8Array(keyBytes).hex();
  const address = account.address().hex();
  return { key, address };
}
