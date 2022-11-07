import { ethers } from "ethers";

export const createEthAccount = () => {
  const wallet = ethers.Wallet.createRandom();
  const key = wallet.privateKey;
  const address = wallet.address;
  return { key, address }
}
