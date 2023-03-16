// index.ts
import { verificationBuilder, openAttestationVerifiers, isValid } from "@govtechsg/oa-verify";
import Verifier from "@govtechsg/oa-verify";
import { getData } from "@govtechsg/open-attestation";
import { config } from 'dotenv';
// import document from "./document.json";

config();
const INDENTITY= process.env.INDENTITY;
const NETWORK= process.env.NETWORK;

async function customVerify(wrapDocument) {
// our custom verifier will be valid only if the document version is not https://schema.openattestation.com/2.0/schema.json
const IndentityIssuser= {
  skip: async () => {
    return {
      status: "SKIPPED",
      type: "DOCUMENT_INTEGRITY",
      name: "IndentityIssuser",
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
    const identities = documentData.issuers.map((issuer) => issuer.identityProof?.location);
    // console.log("identities",identities);
    const valid = identities[0]===INDENTITY;
    // console.log("Valid Status");
    //  identities.length > 0 && identities.every((identity) => (identity ?INDENTITY: false));


// console.log("valid status",valid);



    console.log("document Data",documentData);

    if (!valid) {
      return {
        type: "DOCUMENT_INTEGRITY",
        name: "IndentityIssuser",
        data: identities,
        reason: {
          code: 1,
          codeString: "INVALID_NAME",
          message: `Document name is ${identities}`,
        },
        status: "INVALID",
      };
    }
    // if (documentData.name !== "Certificate of Completion") {
    //   return {
    //     type: "DOCUMENT_INTEGRITY",
    //     name: "CustomVerifier",
    //     data: documentData.name,
    //     reason: {
    //       code: 1,
    //       codeString: "INVALID_NAME",
    //       message: `Document name is ${documentData.name}`,
    //     },
    //     status: "INVALID",
    //   };
    // }
    return {
      type: "ISSUER_IDENTITY",
      name: "IndentityIssuser",
      data: identities,
      status: "VALID",
    };
  },
};




const verify = verificationBuilder([...openAttestationVerifiers, IndentityIssuser], { network: NETWORK });
const fragments = await verify(wrapDocument);
const filterFragmentName = ["IndentityIssuser", "OpenAttestationHash", "OpenAttestationEthereumDocumentStoreStatus","OpenAttestationDnsTxtIdentityProof"];
const filteredFragmens = fragments.filter(fragment => filterFragmentName.includes(fragment.name));
return filteredFragmens;
}
export default customVerify;