import fs from "fs";
import { getAccountCreator } from "./cryptography";
import type { Scheme, Account } from "./cryptography/types";

function *accountsGenerator(scheme: Scheme, amount: number) {
  const accountCreator = getAccountCreator(scheme);
  let i = 0;
  while (i < amount) {
    yield accountCreator();
    i++;
  }
  return;
}

const writeFileHeader = (scheme: Scheme, output: string) => {
  const header = `${scheme} address, ${scheme} key\n`;
  fs.writeFileSync(output, header, { flag: 'a' });
}
const writeAccount = (account: Account, output: string) => {
  const line = `${account.address}, ${account.key}\n`;
  fs.writeFileSync(output, line, { flag: 'a' });
}

const writeAccounts = (scheme: Scheme, amount: number, output: string) => {
  writeFileHeader(scheme, output);
  for(const account of accountsGenerator(scheme, amount)) {
    writeAccount(account, output);
  }
}

// 编辑这里
writeAccounts('ETH', 2, 'eth.csv');