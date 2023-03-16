// index.ts
import { verificationBuilder, openAttestationVerifiers, isValid } from "@govtechsg/oa-verify";
import Verifier from "@govtechsg/oa-verify";
import { getData } from "@govtechsg/open-attestation";

import { isValid, verificationBuilder, openAttestationVerifiers, CodedError } from "@govtechsg/oa-verify";
// import type {
//   verify as defaultVerify,
//   Verifier,
//   SkippedVerificationFragment,
//   ValidVerificationFragment,
//   InvalidVerificationFragment,
//   ErrorVerificationFragment,
//   VerificationFragmentType,
// } from "@govtechsg/oa-verify";
import { getData, utils } from "@govtechsg/open-attestation";
import { providers } from "ethers";


// import document from "./document.json";
async function customVerify(wrapDocument) {
// our custom verifier will be valid only if the document version is not https://schema.openattestation.com/2.0/schema.json
const customVerifier= {
  skip: async () => {
    return {
      status: "SKIPPED",
      type: "DOCUMENT_INTEGRITY",
      name: "CustomVerifier",
      reason: {
        code: 0,
        codeString: "SKIPPED",
        message: `Document doesn't have version equal to 'https://schema.openattestation.com/2.0/schema.json'`,
      },
    };
  },
  test: () => wrapDocument.version === "https://schema.openattestation.com/2.0/schema.json",
  verify: async (wrapDocument) => {
    const documentData = getData(wrapDocument);
    if (documentData.name !== "Certificate of Completion") {
      return {
        type: "DOCUMENT_INTEGRITY",
        name: "CustomVerifier",
        data: documentData.name,
        reason: {
          code: 1,
          codeString: "INVALID_NAME",
          message: `Document name is ${documentData.name}`,
        },
        status: "INVALID",
      };
    }
    return {
      type: "DOCUMENT_INTEGRITY",
      name: "CustomVerifier",
      data: documentData.name,
      status: "VALID",
    };
  },
};

// create your own verify function with all verifiers and your custom one
const verify = verificationBuilder([...openAttestationVerifiers, customVerifier], { network: "goerli" });
const fragments = await verify(wrapDocument);
console.log(isValid(fragments)); // return false
console.log(fragments.find((fragment) => fragment.name === "CustomVerifier")); // display the details on our specific verifier
}
export default customVerify;