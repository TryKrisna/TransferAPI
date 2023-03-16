// const express = require('express')

import express from 'express';
const router = express.Router()

import { config } from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import { getData } from "@govtechsg/open-attestation";
import fs from 'fs';
config();
// import {express} from 'express';
// import {mongoose} from 'mongoose';

// const Alien = require('../models/alien')

import Alien from '../models/alien.js'
import Document from '../models/document.js'
import wrapingDocument from '../utils/wrap.js';
import encryptionDocument from '../utils/encrypt.js';
import decryptionDocument from '../utils/decrypt.js';
import issueMerkleRoot from '../utils/issus.js';
import verifyDoc from '../utils/verify.js';
import customVerify from '../utils/customVerify.js';
import customResponse from '../utils/customRespone.js';
import revokeDoc from '../utils/revokeDoc.js';
import multiWrap from '../utils/multiWrap.js';



// const sing = require('../singDoc.mjs')

// const path = './example.txt';
const documentStoreAdr = process.env.DOCUMENT_STORE;
const app = express();
app.use(express.json());
const template = {
    name: "KrisnaBaccII_TEMPLATE",
    type: "EMBEDDED_RENDERER",
    url: "https://precious-pithivier-780457.netlify.app/"
};
const isuser = {
    name: "KRISNA",
    documentStore: documentStoreAdr,
    identityProof: {
        type: "DNS-TXT",
        location: "krisna.lol",
    },
};
router.post('/wrap', async (req, res) => {
    const rawDocument = {
        id: "SERIAL_NUMBER_123",
        $template: template,
        asset: {
            type: req?.body?.asset?.type,
            model: req?.body?.asset?.model,
            issuDate: req?.body?.asset?.issuDate,
            image: req?.body?.asset?.image
        }, issuers: [
            isuser
        ],
        recipient: {
            name: req?.body.recipient?.name,
            address: req?.body.recipient?.address
        }
    };

    const wrapDocObj = wrapingDocument(rawDocument);
    // console.log("alien doc", wrapDocObj);
    // console.log("wraped done !!!");
    try {
        const encryptionDoc = encryptionDocument(wrapDocObj);
        const autoId = uuidv4();
        const doc = new Document({
            uuid: autoId,
            data: encryptionDoc,
        })
        if (!fs.existsSync('wrape-documents')) {
            fs.mkdirSync('wrape-documents');
        }

        fs.writeFile(`./wrape-documents/${encryptionDoc.key}`, JSON.stringify(wrapDocObj), err => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('File created!');
        });

        const a1 = await doc.save()
        if (a1 != null) {
            res.status(201).json(customResponse(201, "Successfully crated wrap document!", a1))
        } else {
            res.status(400).json(customResponse(200, "Bad Request!", null))
        }
        // res.json(a1)
    } catch (err) {
        res.send('Error')
    }

})



router.get('/getWrape', async (req, res) => {
    try {
        const KEY = req.query.key;
        const UUID = req.query.uuid;
        const query = { uuid: UUID, "data.key": KEY };
        // const doc = await Document.findById(id)
        const doc = await Document.find(query);
        // res.json(doc)
        if (doc[0] != null) {
            // res.json(decryptionDocument(doc[0]?.data))
            res.status(200).json(customResponse(200, "Successfully fetch wrap document!", decryptionDocument(doc[0]?.data)))
        } else {
            res.status(404).send(customResponse(404, `Cannot find any document with provide UUID= ${UUID} and KEY=${KEY}`, null))
            // res.status(404).send("Cannot find any document with provide UUID and KEY");
        }

    } catch (err) {
        res.send('Error ' + err)
    }
})


router.get('/verify', async (req, res) => {
    // const ID = req.query.id;
    const KEY = req.query.key;
    const UUID = req.query.uuid;
    try {
        const query = { uuid: UUID, "data.key": KEY };
        const doc = await Document.find(query);
        // console.log(decryptionDocument(doc[0]?.data));
        const fragments = await customVerify(decryptionDocument(doc[0]?.data));
        if (fragments.length != 0) {
            res.status(200).json(customResponse(200, "Verify document successfully!", fragments))
        }

        // res.json(fragments);
    } catch (err) {
        res.send('2Error ' + err)
    }
})



router.patch('/issus', async (req, res) => {
    try {
        // var id = req.query.id;
        // const encryptDoc = await Document.findById(id);
        const KEY = req.query.key;
        const UUID = req.query.uuid;

        const query = { uuid: UUID, "data.key": KEY };
        const encryptDoc = await Document.find(query);
        let issusStatus = "";
        const decryptDoc = decryptionDocument(encryptDoc[0].data)
        if (encryptDoc[0].isIssus === false) {
            const issusStatus = await issueMerkleRoot(decryptDoc,null);
            // console.log("alien status", issusStatus);
            if (issusStatus === true) {
                // console.log("I ma work!!!");
                encryptDoc[0].isIssus = issusStatus;
                const a1 = await encryptDoc[0].save()
                // res.json(a1);
                res.status(200).json(customResponse(200, "Document with: 0x" + decryptDoc?.signature?.merkleRoot + "have successfully issus!",a1))
                console.log("Issuing done");
                // if (!fs.existsSync('wrape-documents')) {
                //     fs.mkdirSync('wrape-documents');
                // }
                // fs.writeFile(`./wrape-documents/${encryptionDoc[0].uuid}`, JSON.stringify(decryptDoc), err => {
                //     if (err) {
                //         console.error(err);
                //         return;
                //     }
                //     console.log('File created!');
                // });

            }
        } else {
            res.status(409).json(customResponse(409, "Document with merkleRoot: 0x" + decryptDoc?.signature?.merkleRoot + "have already issus!!", null))
        }




        // encryptDoc.isIssus = true;

    } catch (err) {
        res.send('Error ' + err)
    }
})

router.post('/sign-by-merkleroot', async (req, res) => {
    try {
        const MERKLEROOT = req.query.merkleroot;
            const issusStatus = await issueMerkleRoot(null,MERKLEROOT);
            if (issusStatus === true) {
                res.status(200).json(customResponse(200, "Document with: 0x" + MERKLEROOT+ "have successfully issus!"))
            } else {
            res.status(409).json(customResponse(409, "Document with merkleRoot: 0x" +MERKLEROOT+ "have already issus!!", null))
        }
        // encryptDoc.isIssus = true;

    } catch (err) {
        res.send('Error ' + err)
    }
})



router.post('/', async (req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
        const a1 = await alien.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})
router.post('/revoke', async (req, res) => {
    const KEY = req.query.key;
    const UUID = req.query.uuid;
    const query = { uuid: UUID, "data.key": KEY };
    const encryptDoc = await Document.find(query);
  const isRevokeS= await revokeDoc(decryptionDocument(encryptDoc[0].data),null);
//   console.log("Here is the is RevokeS",isRevokeS);
  if (isRevokeS===true) {
    res.status(200).json(customResponse(200, "Successfully Revoke Document!"))
} else {
    res.status(401).json(customResponse(401, "Fail to Revoke Document Request!", null))
}
})

router.post('/revoke-by-merkleroot', async (req, res) => {
    const MERKLEROOT = req.query.merkleRoot;
  const isRevokeS= await revokeDoc(null,MERKLEROOT);
//   console.log("Here is the is Revokes",isRevokeS);
  if (isRevokeS==true) {
    res.status(200).json(customResponse(200, "Successfully Revoke Document!"))
} else {
    res.status(401).json(customResponse(401, "Fail to Revoke Document Request!", null))
}
    // res.send("hi");
})


// multi warpe document
 router.post('/multiwrap', async (req, res) => {
    const data = req.body;
    const rawDocument = {
        id: "SERIAL_NUMBER_123",
        $template: template,
        asset: {
            type: req?.body.asset?.type,
            model: req?.body.asset?.model,
            issuDate: req?.body.asset?.issuDate,
            image: req?.body.asset?.image
        }, issuers: [
            isuser
        ],
        recipient: {
            name: req?.body.recipient?.name,
            address: req?.body.recipient?.address
        }
    };
    let rawArray = [];
    let totalArr = [];
    const rawDocuments = data.map((item) => {
        // console.log("koko item",item);
        const tmpArr = {
            id: "SERIAL_NUMBER_123",
            $template: template,
            asset: {
                type: item.asset?.type,
                model: item.asset?.model,
                issuDate: item.asset?.issuDate,
                image: item.asset?.image
            }, issuers: [
                isuser
            ],
            recipient: {
                name: item.recipient?.name,
                address: item.recipient?.address
            }
        }
        rawArray.push(tmpArr)
    });


    const arrWrapDoc = multiWrap(rawArray);
    if (arrWrapDoc != null) {
        arrWrapDoc.map(async(item) => {
            // console.log("me",item);
            
            
            

            // const a1 = await doc.save()
            // if(a1!=null){
            //     console.log("Db save");
            // }



            if (!fs.existsSync('multiWrapeDocumentsFolder')) {
                fs.mkdirSync('multiWrapeDocumentsFolder');
            }

            fs.writeFile(`./multiWrapeDocumentsFolder/sna-${item.signature.targetHash}`, JSON.stringify(item), err => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('File created!');
            });
            const encryptionDoc = encryptionDocument(item);
            const autoId = uuidv4();
            const doc = new Document({
                uuid: autoId,
                data: encryptionDoc,
            })

  const a1 = await doc.save()
            if(a1!=null){
                console.log("Db save");
            }

        }
        )
    }

    // res.json(rawDocuments)

    res.json(arrWrapDoc);



    // const rawDocument = {
    //     id: "SERIAL_NUMBER_123",
    //     $template: template,
    //     asset: {
    //         type: req?.body.asset?.type,
    //         model: req?.body.asset?.model,
    //         issuDate: req?.body.asset?.issuDate,
    //         image: req?.body.asset?.image
    //     }, issuers: [
    //         isuser
    //     ],
    //     recipient: {
    //         name: req?.body.recipient?.name,
    //         address: req?.body.recipient?.address
    //     }
    // };

    // const wrapDocObj = wrapingDocument(rawDocument);
    // console.log("alien doc", wrapDocObj);
    // console.log("wraped done !!!");

    // const encryptionDoc = encryptionDocument(wrapDocObj);
    // const autoId = uuidv4();
    // const doc = new Document({
    //     uuid: autoId,
    //     data: encryptionDoc,

    // })
    // if (!fs.existsSync('wrape-documents')) {
    //     fs.mkdirSync('wrape-documents');
    // }

    // fs.writeFile(`./wrape-documents/${encryptionDoc.key}`, JSON.stringify(wrapDocObj), err => {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }
    //     console.log('File created!');
    // });


    // try {
    //     const a1 = await doc.save()
    //     res.json(a1)
    // } catch (err) {
    //     res.send('Error')
    // }
})


// 




export default router;


// tmp code


// router.get('/', async(req,res) => {
//     try{
//            const aliens = await Alien.find()
//            res.json(aliens)
//     }catch(err){
//         res.send('Error ' + err)
//     }
// })


// router.get('/:id', async(req,res) => {
//     try{
//            const doc = await Document.findById(req.params.id)
//            res.json(doc)
//     }catch(err){
//         res.send('Error ' + err)
//     }
// })

// end tmp code 