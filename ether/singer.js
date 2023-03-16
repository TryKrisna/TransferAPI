
import {  Wallet } from "ethers";
import { config } from 'dotenv';
import goerliProvider from '../ether/provider.js';
config();
const privateKey = process.env.PRIVATE_KEY;
const signerFromPrivateKey = new Wallet(privateKey, goerliProvider);
export default signerFromPrivateKey;