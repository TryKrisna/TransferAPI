import  {encryptString} from '@govtechsg/oa-encryption';

// const document = {
//   version: "https://schema.openattestation.com/2.0/schema.json",
//   data: {
//     issuers: [
//       {
//         documentStore: "5924d910-8916-446a-b1c3-55e2f86dd8f3:string:0xabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd",
//         name: "0f737b20-9e5e-4ec4-bffd-c63002616bfd:string:University of Blockchain",
//         identityProof: {
//           type: "5fc379dd-cd24-4c91-a4c7-cf76f9c96d8d:string:DNS-TXT",
//           location: "62e1c6c3-09a9-4e52-aaf6-9daf24d43657:string:example.com",
//         },
//       },
//     ],
//   },
//   privacy: { obfuscatedData: [] },
//   signature: {
//     type: "SHA3MerkleProof",
//     targetHash: "956e27c86d4893a971600d328e235ede886f1c00b183257a822667b69886fced",
//     proof: [],
//     merkleRoot: "956e27c86d4893a971600d328e235ede886f1c00b183257a822667b69886fced",
//   },
// };


function encryptionDocument(wrapedDocument) {

const encryptedDocument = encryptString(JSON.stringify(wrapedDocument));
// console.log(encryptedDocument);
    return encryptedDocument;
}
export default encryptionDocument;