
import {  Wallet ,providers, getDefaultProvider } from "ethers";
import { utils } from "@govtechsg/open-attestation";
import { DocumentStoreFactory,connect } from "@govtechsg/document-store";
import { config } from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import { signDocument, SUPPORTED_SIGNING_ALGORITHM,wrapDocuments,verifySignature  } from "@govtechsg/open-attestation";
import signerFromPrivateKey from '../ether/singer.js';
config();
// const network = process.env.NETWORK;
// const privateKey = process.env.PRIVATE_KEY;
// const etherscanAPIKey = process.env.ETHERSCAN_API_KEY;
// const infuraAPIKey = process.env.INFURA_API_KEY;
const documentStoreAdr = process.env.DOCUMENT_STORE;
// const publicKey = process.env.PUBLIC_KEY;
const uuid = uuidv4();
console.log(uuid);
// const goerliProvider = getDefaultProvider(network,{
//   etherscan: etherscanAPIKey,
//   infura: infuraAPIKey,
// });


// const signerFromPrivateKey = new Wallet(privateKey, goerliProvider);

async function issueMerkleRoot (wrapDocuments,merkleRoot) {
    const documentStore = DocumentStoreFactory.connect(documentStoreAdr, signerFromPrivateKey);
    let isIssued =false;
   if(merkleRoot===null)
   {
    const tx = await documentStore.issue('0x'+wrapDocuments.signature.merkleRoot);
    const receipt = await tx.wait();
    // console.log("receipt",receipt);
    isIssued  = await documentStore.isIssued('0x'+wrapDocuments.signature.merkleRoot);
   }else{
    const tx = await documentStore.issue('0x'+merkleRoot);
    const receipt = await tx.wait();
    // console.log("receipt",receipt);
     isIssued = await documentStore.isIssued('0x'+merkleRoot);
   }
   
    // console.log("The isIssued status",isIssued);
   
   
   
    // console.log("Creating file ... ");
    return isIssued;
};



export default issueMerkleRoot;
