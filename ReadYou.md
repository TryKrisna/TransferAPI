
Try Krisna@LAPTOP-J7GFH444 MINGW64 /c/00_DGC_MPTC/1code/SignDocumentAPI (SignDocAPI)
$ node singDoc.js
file:///C:/00_DGC_MPTC/1code/SignDocumentAPI/singDoc.js:31
const provider = ethers.getDefaultProvider(network, {
                 ^

ReferenceError: ethers is not defined
    at file:///C:/00_DGC_MPTC/1code/SignDocumentAPI/singDoc.js:31:18
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:385:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12)

Try Krisna@LAPTOP-J7GFH444 MINGW64 /c/00_DGC_MPTC/1code/SignDocumentAPI (SignDocAPI)
$ node singDoc.js
Here is the wrape document [
  {
    version: 'https://schema.openattestation.com/2.0/schema.json',
    data: {
      id: 'e4e13608-1f42-4640-9d1f-7191e3b67192:string:SERIAL_NUMBER_123',
      '$template': [Object],
      issuers: [Array],
      recipient: [Object]
    },
    signature: {
      type: 'SHA3MerkleProof',
      targetHash: 'e7d5a7513572d085001516bd6b9607fc9931f840c70e57161e472af78cbcfcf5',
      proof: [Array],
      merkleRoot: 'c28a0ee48dd36266d7d9e181fac6df97bcecf3de00de4fbd21b1bf9ab4e97594'
    }
  },
  {
    version: 'https://schema.openattestation.com/2.0/schema.json',
    data: {
      id: 'd0235b40-b5ea-42d1-a1d6-a35dcdcb68b7:string:different id',
      '$template': [Object],
      issuers: [Array],
      recipient: [Object]
    },
    signature: {
      type: 'SHA3MerkleProof',
      targetHash: '9017ae336ee6c994d9506740d2162250990dcd9f5e4f8621c2200621bca1a2ef',
      proof: [Array],
      merkleRoot: 'c28a0ee48dd36266d7d9e181fac6df97bcecf3de00de4fbd21b1bf9ab4e97594'
    }
  }
]
Hello
Goodbye!
Sing w
sna
Here is the [
  {
    type: 'OpenAttestationSignature2018',
    created: '2023-03-11T20:54:25.158Z',
    proofPurpose: 'assertionMethod',
    at __awaiter (C:\00_DGC_MPTC\1code\SignDocumentAPI\node_modules\@ethersproject\contracts\lib\index.js:19:12)
    at Contract.<anonymous> (C:\00_DGC_MPTC\1code\SignDocumentAPI\node_modules\@ethersproject\contracts\lib\index.js:421:16)
    at issueMerkleRoot (file:///C:/00_DGC_MPTC/1code/SignDocumentAPI/singDoc.js:130:36) {
  reason: 'sending a transaction requires a signer',
  code: 'UNSUPPORTED_OPERATION',
  operation: 'sendTransaction'
}

Try Krisna@LAPTOP-J7GFH444 MINGW64 /c/00_DGC_MPTC/1code/SignDocumentAPI (SignDocAPI)
$

Try Krisna@LAPTOP-J7GFH444 MINGW64 /c/00_DGC_MPTC/1code/SignDocumentAPI (SignDocAPI)
$ ]
bash: ]: command not found

    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:385:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12)

Try Krisna@LAPTOP-J7GFH444 MINGW64 /c/00_DGC_MPTC/1code/SignDocumentAPI (SignDocAPI)
$

Try Krisna@LAPTOP-J7GFH444 MINGW64 /c/00_DGC_MPTC/1code/SignDocumentAPI (SignDocAPI)
$ 

Try Krisna@LAPTOP-J7GFH444 MINGW64 /c/00_DGC_MPTC/1code/SignDocumentAPI (SignDocAPI)
$ node singDoc.js
file:///C:/00_DGC_MPTC/1code/SignDocumentAPI/singDoc.js:21
const provider = getDefaultProvider(network, {
                                    ^

ReferenceError: Cannot access 'network' before initialization
    at file:///C:/00_DGC_MPTC/1code/SignDocumentAPI/singDoc.js:21:37
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:385:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12)

Try Krisna@LAPTOP-J7GFH444 MINGW64 /c/00_DGC_MPTC/1code/SignDocumentAPI (SignDocAPI)
$ node singDoc.js
Here is the wrape document [
  {
    version: 'https://schema.openattestation.com/2.0/schema.json',
    data: {
      id: '52e7be27-6359-4d18-a293-fa955eaa45c9:string:SERIAL_NUMBER_123',
      '$template': [Object],
      issuers: [Array],
      recipient: [Object]
    },
    signature: {
      type: 'SHA3MerkleProof',
      targetHash: '2c35065f8ec4e7c365cbfad5995a2f06d67322c9381d0eeb835f896146b09af3',
      proof: [Array],
      merkleRoot: '72ff27d9cd0cdb89a5c13a386a790a9c56a466e897e18ed96346b6f79d559636'
    }
  },
  {
    version: 'https://schema.openattestation.com/2.0/schema.json',
    data: {
      id: '72504843-2655-4db2-9579-830e9b89ea10:string:different id',
      '$template': [Object],
      issuers: [Array],
      proof: [Array],
      merkleRoot: '72ff27d9cd0cdb89a5c13a386a790a9c56a466e897e18ed96346b6f79d559636'
    }
  }
]
Hello
Goodbye!
Sing w
sna
Here is the [
  {
    type: 'OpenAttestationSignature2018',
    created: '2023-03-11T20:56:41.675Z',
    proofPurpose: 'assertionMethod',
    verificationMethod: 'did:ethr:0x77270bc0884D1627A52673D2e832aA63a456b856#controller',
    signature: '0x47ba6ed650d7f689834ed73718bc7e7be501cec5dbf3628bbd0ad5efcb876f4060b9d7be60b95b508c643b6930aff144662add94378f9fd87505414afbf184c81b'     
  }
]
true
Here is the merkelRoot 0x72ff27d9cd0cdb89a5c13a386a790a9c56a466e897e18ed96346b6f79d559636
========= NOTICE =========
Request-Rate Exceeded  (this message will not be repeated)

The default API keys for each service are provided as a highly-throttled,
community resource for low-traffic projects and early prototyping.

While your application will continue to function, we highly recommended
signing up for your own API keys to improve performance, increase your
request rate/limit and enable other perks, such as metrics and advanced APIs.

For more details: https://docs.ethers.io/api-keys/
==========================
C:\00_DGC_MPTC\1code\SignDocumentAPI\node_modules\@ethersproject\logger\lib\index.js:238
        var error = new Error(message);
                    ^

<ref *1> Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMI
T ] (error={"reason":"cannot estimate gas; transaction may fail or may require manual gas limit","code":"UNPREDICTABLE_GAS_LIMIT","method":"estimateGas","
transaction":{"from":"0x77270bc0884D1627A52673D2e832aA63a456b856","maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"B
igNumber","hex":"0x01019d82b0"},"to":"0x8E82733684a4010C59455eCcF473258266cC6b1E","data":"0x0f75e81f72ff27d9cd0cdb89a5c13a386a790a9c56a466e897e18ed96346b6
f79d559636","type":2,"accessList":null}}, tx={"data":"0x0f75e81f72ff27d9cd0cdb89a5c13a386a790a9c56a466e897e18ed96346b6f79d559636","to":{},"from":"0x77270b
c0884D1627A52673D2e832aA63a456b856","type":2,"maxFeePerGas":{"type":"BigNumber","hex":"0x01019d82b0"},"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x
59682f00"},"nonce":{},"gasLimit":{},"chainId":{}}, code=UNPREDICTABLE_GAS_LIMIT, version=abstract-signer/5.7.0)
    at Logger.makeError (C:\00_DGC_MPTC\1code\SignDocumentAPI\node_modules\@ethersproject\logger\lib\index.js:238:21)
    at Logger.throwError (C:\00_DGC_MPTC\1code\SignDocumentAPI\node_modules\@ethersproject\logger\lib\index.js:247:20)
    at C:\00_DGC_MPTC\1code\SignDocumentAPI\node_modules\@ethersproject\abstract-signer\lib\index.js:365:47
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async Promise.all (index 7) {
  reason: 'cannot estimate gas; transaction may fail or may require manual gas limit',
  code: 'UNPREDICTABLE_GAS_LIMIT',
  error: Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMI
T ] (method="estimateGas", transaction={"from":"0x77270bc0884D1627A52673D2e832aA63a456b856","maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"}
,"maxFeePerGas":{"type":"BigNumber","hex":"0x01019d82b0"},"to":"0x8E82733684a4010C59455eCcF473258266cC6b1E","data":"0x0f75e81f72ff27d9cd0cdb89a5c13a386a79
0a9c56a466e897e18ed96346b6f79d559636","type":2,"accessList":null}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.7.2)
      at Logger.makeError (C:\00_DGC_MPTC\1code\SignDocumentAPI\node_modules\@ethersproject\logger\lib\index.js:238:21)
      at Logger.throwError (C:\00_DGC_MPTC\1code\SignDocumentAPI\node_modules\@ethersproject\logger\lib\index.js:247:20)
      at C:\00_DGC_MPTC\1code\SignDocumentAPI\node_modules\@ethersproject\providers\lib\fallback-provider.js:654:52
      at Array.forEach (<anonymous>)
      at C:\00_DGC_MPTC\1code\SignDocumentAPI\node_modules\@ethersproject\providers\lib\fallback-provider.js:634:61

Try Krisna@LAPTOP-J7GFH444 MINGW64 /c/00_DGC_MPTC/1code/SignDocumentAPI (SignDocAPI)
$ node singDoc.js
file:///C:/00_DGC_MPTC/1code/SignDocumentAPI/singDoc.js:22
const metamaskProvider = new providers.Web3Provider(web3.currentProvider); // Will change network automatically
                                                    ^

ReferenceError: web3 is not defined
    at file:///C:/00_DGC_MPTC/1code/SignDocumentAPI/singDoc.js:22:53
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:385:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12)

Try Krisna@LAPTOP-J7GFH444 MINGW64 /c/00_DGC_MPTC/1code/SignDocumentAPI (SignDocAPI)
$ npm install
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

up to date, audited 196 packages in 2s

43 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Try Krisna@LAPTOP-J7GFH444 MINGW64 /c/00_DGC_MPTC/1code/SignDocumentAPI (SignDocAPI)
$ npm install
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

up to date, audited 196 packages in 4s

43 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Try Krisna@LAPTOP-J7GFH444 MINGW64 /c/00_DGC_MPTC/1code/SignDocumentAPI (SignDocAPI)
$ node singDoc.js
file:///C:/00_DGC_MPTC/1code/SignDocumentAPI/singDoc.js:22
const { ethereum } = window;
                     ^

ReferenceError: window is not defined
    at file:///C:/00_DGC_MPTC/1code/SignDocumentAPI/singDoc.js:22:22
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:385:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12)

Try Krisna@LAPTOP-J7GFH444 MINGW64 /c/00_DGC_MPTC/1code/SignDocumentAPI (SignDocAPI)
$

Try Krisna@LAPTOP-J7GFH444 MINGW64 /c/00_DGC_MPTC/1code/SignDocumentAPI (SignDocAPI)
$

Try Krisna@LAPTOP-J7GFH444 MINGW64 /c/00_DGC_MPTC/1code/SignDocumentAPI (SignDocAPI)
$ node singDoc.js
Here is the wrape document [
  {
    version: 'https://schema.openattestation.com/2.0/schema.json',
    data: {
      id: '3ebfd211-1377-4ee7-896f-c00140448805:string:SERIAL_NUMBER_123',
      '$template': [Object],
      issuers: [Array],
      recipient: [Object]
    },
    signature: {
      type: 'SHA3MerkleProof',
      targetHash: 'b615d173a01e3807ba3e487bba9f931ecde14c61a3a3ef652442dd3221d6aa27',
      proof: [Array],
      merkleRoot: '573d40f7b7f6d7d514d15a96176bad519f50ffe3ead45d981983435031258ab8'
    }
  },
  {
    version: 'https://schema.openattestation.com/2.0/schema.json',
    data: {
      id: '63e79e9f-e4bd-4dbb-be58-17cc17d67afb:string:different id',
      '$template': [Object],
      issuers: [Array],
      recipient: [Object]
    },
    signature: {
      type: 'SHA3MerkleProof',
      targetHash: '3978ba76f58529caee148c402bb5efa3c17c9c54f893f7b1ef8e64648a2a6b83',
      proof: [Array],
      merkleRoot: '573d40f7b7f6d7d514d15a96176bad519f50ffe3ead45d981983435031258ab8'
    }
  }
]
Hello
Goodbye!
Sing w
sna
Here is the [
  {
    type: 'OpenAttestationSignature2018',
    created: '2023-03-11T21:01:31.246Z',
    proofPurpose: 'assertionMethod',
    verificationMethod: 'did:ethr:0x77270bc0884D1627A52673D2e832aA63a456b856#controller',
    signature: '0x36938316a5e3247f801620cf93fb9740da999d7560c1d078c533eb2b6ddacdb74cb5ac436cdb51455e9efff660b6cc824f6b4c4ade96cd19a2d8aa6f3ef920d11b'     
  }
]
true
Here is the merkelRoot 0x573d40f7b7f6d7d514d15a96176bad519f50ffe3ead45d981983435031258ab8
========= NOTICE =========
Request-Rate Exceeded  (this message will not be repeated)

The default API keys for each service are provided as a highly-throttled,
community resource for low-traffic projects and early prototyping.

While your application will continue to function, we highly recommended
signing up for your own API keys to improve performance, increase your
request rate/limit and enable other perks, such as metrics and advanced APIs.

For more details: https://docs.ethers.io/api-keys/
==========================
C:\00_DGC_MPTC\1code\SignDocumentAPI\node_modules\@ethersproject\logger\lib\index.js:238
        var error = new Error(message);
                    ^

<ref *1> Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMI
T ] (error={"reason":"execution reverted","code":"UNPREDICTABLE_GAS_LIMIT","method":"estimateGas","transaction":{"from":"0x77270bc0884D1627A52673D2e832aA6
3a456b856","maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x0127b0cefa"},"to":"0x8E82733684a4010

-**** post document object
{
   "recipient": {
            "name": "Krisna",
            "address": "DGC Phnom Penh Cambodia"
          },
    "asset": {
              "type": "Car",
              "model": "Toyota",
              "issuDate": "27-02-2023",
              "image": "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
          }      
    
}


### Plan to have multi Document 

localhost:9000/blockchain/multiwrap

[
    {
   "recipient": {
            "name": "Mr. KriSna",
            "address": "pp"
          },
    "asset": {
              "type": "Fast Car",
              "model": "Lambo",
              "issuDate": "14-03-2023",
              "image": "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/model_choose/2023/aventador_ultimae_m.png"
          }      
    
},
{
   "recipient": {
            "name": "Mr. Sopheab",
            "address": "pp"
          },
    "asset": {
              "type": "Fast Car",
              "model": "Lambo",
              "issuDate": "14-03-2023",
              "image": "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/model_choose/2023/aventador_ultimae_m.png"
          }      
    
},
{
   "recipient": {
            "name": "Ky Lyheng",
            "address": "pp"
          },
    "asset": {
              "type": "Fast Car",
              "model": "Lambo",
              "issuDate": "14-03-2023",
              "image": "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/model_choose/2023/aventador_ultimae_m.png"
          }      
    
}
]