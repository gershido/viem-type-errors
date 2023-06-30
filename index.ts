import { createPublicClient, http } from "viem";
import { goerli } from "viem/chains";

const main = async () => {
  const publicClient = createPublicClient({
    chain: goerli,
    transport: http(),
  });

  const res = await publicClient.getBlock();
  return res;
};

main().then((val) => console.log(val));
