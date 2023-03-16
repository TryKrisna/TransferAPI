import { signDocument, SUPPORTED_SIGNING_ALGORITHM, wrapDocuments, verifySignature } from "@govtechsg/open-attestation";
 function wrapingDocument(document) {
    const wrappedDocumentsna = wrapDocuments([document, { ...document, id: "different id" }]); // will ensure document is valid regarding open-attestation 2.0 schema
    // console.log("I am in fun wrap",wrappedDocumentsna);
    return wrappedDocumentsna[0];
}

export default wrapingDocument;