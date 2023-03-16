import { getDefaultProvider } from "ethers";
import { config } from 'dotenv';
config();
const etherscanAPIKey = process.env.ETHERSCAN_API_KEY;
const infuraAPIKey = process.env.INFURA_API_KEY;
const network = process.env.NETWORK;
const goerliProvider = getDefaultProvider(network,{
    etherscan: etherscanAPIKey,
    infura: infuraAPIKey,
  });
export default goerliProvider;