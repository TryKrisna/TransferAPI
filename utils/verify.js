// index.ts
import { isValid, openAttestationVerifiers, verificationBuilder } from "@govtechsg/oa-verify";

import { config } from 'dotenv';
config();
const network = process.env.NETWORK;
const verify = verificationBuilder(openAttestationVerifiers, {
  network:network,
});

async function verifyDoc(wrapDocument) {


const fragments = await verify(wrapDocument);

console.log(isValid(fragments, ["DOCUMENT_INTEGRITY"])); // output true
console.log(isValid(fragments, ["DOCUMENT_STATUS"])); // output false
console.log(isValid(fragments, ["ISSUER_IDENTITY"])); // outpute false
return fragments;
// console.log(isValid(fragments)); // output false

}
export default verifyDoc;