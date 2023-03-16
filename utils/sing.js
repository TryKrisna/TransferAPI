
import {  Wallet ,providers, getDefaultProvider } from "ethers";
import { utils } from "@govtechsg/open-attestation";
import { DocumentStoreFactory,connect } from "@govtechsg/document-store";
import { config } from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import { signDocument, SUPPORTED_SIGNING_ALGORITHM,wrapDocuments,verifySignature  } from "@govtechsg/open-attestation";

config();
const network = process.env.NETWORK;
const privateKey = process.env.PRIVATE_KEY;
const etherscanAPIKey = process.env.ETHERSCAN_API_KEY;
const infuraAPIKey = process.env.INFURA_API_KEY;
const documentStoreAdr = process.env.DOCUMENT_STORE;
const publicKey = process.env.PUBLIC_KEY;
const uuid = uuidv4();
console.log(uuid); // "110ec58a-a0f2-4ac4-8393-c866d813b8d1"
const goerliProvider = getDefaultProvider(network,{
  etherscan: etherscanAPIKey,
  infura: infuraAPIKey,
});


const signerFromPrivateKey = new Wallet(privateKey, goerliProvider);

const document = {
  id: "SERIAL_NUMBER_123",
  $template: {
    name: "KrisnaBaccII_TEMPLATE",
    type: "EMBEDDED_RENDERER",
    url: "https://precious-pithivier-780457.netlify.app/"
  },
    recipient: {
      name: "Krisna",
      address: "DGC Phnom Penh Cambodia"
    },
    asset: {
        type: "Car",
        model: "Toyota",
        issuDate: "27-02-2023",
        image: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
    },  issuers: [
    {
      name: "KRISNA",
      documentStore: documentStoreAdr,
      identityProof: {
        type: "DNS-TXT",
        location: "krisna.lol",
      },
    },
  ],
  recipient: {
    name: "Krisna Chain",
  }
};

import fs from 'fs';
fs.writeFile ("wrape-documents/"+uuid+".json",  JSON.stringify(wrappedDocumentsna[0]), function(err) {
  if (err) throw err;
  console.log('complete');
  }
);

setTimeout(() => { 
  const verified = verifySignature(wrappedDocumentsna[0]);
  console.log(verified); 
  const issueMerkleRoot = async () => {
    const documentStore = DocumentStoreFactory.connect(documentStoreAdr, signerFromPrivateKey);
  console.log("Here is the merkelRoot",'0x'+wrappedDocumentsna[0]?.signature?.merkleRoot);
    const tx = await documentStore.issue('0x'+wrappedDocumentsna[0]?.signature?.merkleRoot);
    const receipt = await tx.wait();
    console.log("receipt",receipt);
    const isIssued = await documentStore.isIssued('0x'+wrappedDocumentsna[0]?.signature?.merkleRoot);
    console.log("The isIssued status",isIssued);
  
  };



  issueMerkleRoot();

}, 5000);


const sing = async () => {
  const { proof }=await signDocument(wrappedDocumentsna[0], SUPPORTED_SIGNING_ALGORITHM.Secp256k1VerificationKey2018, {
    public: "did:ethr:"+publicKey,
    private: "0x"+privateKey,
  });
 }
 sing();

console.log("good morning sna here is the error",wrappedDocumentsna[0]);

