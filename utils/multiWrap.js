import { signDocument, SUPPORTED_SIGNING_ALGORITHM, wrapDocuments, verifySignature } from "@govtechsg/open-attestation";
 function mulstiWrap(documentArr) {
    const wrappedDocumentsna = wrapDocuments(documentArr); // will ensure document is valid regarding open-attestation 2.0 schema
    // console.log("I am in fun wrap",wrappedDocumentsna);
    return wrappedDocumentsna;
}
export default mulstiWrap;