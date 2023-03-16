import { wrapDocuments, verifySignature } from "@govtechsg/open-attestation";
import revoke from "@govtechsg/document-store";
import { DocumentStoreFactory,connect } from "@govtechsg/document-store";
import signerFromPrivateKey from '../ether/singer.js';
import { config } from 'dotenv';
config();

const documentStoreAdr = process.env.DOCUMENT_STORE;
async function revokeDoc(document,MERKLEROOT) {
    let isRevokeStatus= false;
    const documentStore = DocumentStoreFactory.connect(documentStoreAdr, signerFromPrivateKey);
if(MERKLEROOT===null){
        console.log("Hello",documentStore.isRevoked('0x'+document.signature.merkleRoot));
    const tx = await documentStore.revoke('0x'+document.signature.merkleRoot);
    const receipt = await tx.wait();
    isRevokeStatus  = await documentStore.isRevoked('0x'+document.signature.merkleRoot);

}else{

        const tx = await documentStore.revoke('0x'+MERKLEROOT);
        const receipt = await tx.wait();
        isRevokeStatus  = await documentStore.isRevoked('0x'+MERKLEROOT);
}
    return isRevokeStatus;
   
   
    // console.log("receipt",receipt);
    // console.log("tx",tx);


    // const wrappedDocumentsna = wrapDocuments([document, { ...document, id: "different id" }]); // will ensure document is valid regarding open-attestation 2.0 schema
    // console.log("I am in fun wrap",wrappedDocumentsna);
    // return wrappedDocumentsna[0];
}
export default revokeDoc;