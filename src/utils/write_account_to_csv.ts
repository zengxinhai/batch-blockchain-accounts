import fs from "fs";
import type { Scheme } from "../cryptography/types";

type Account = {
  address: string
  key: string
}

export const writeAccountsToCsv = (accounts: Account[], scheme: Scheme, output: string) => {
  const header = `${scheme} address, ${scheme} key`;
  const accountLines = accounts.map(account => `${account.address}, ${account.key}`);
  const fileContent = [header, ...accountLines].join('\n');
  fs.writeFileSync(output, fileContent);
}
