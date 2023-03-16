import  {decryptString} from '@govtechsg/oa-encryption';



// const encryptedDocument = {
//   cipherText:
//     "H/smVRcwLrv7KzeMtHVYAxouaO+aaEm1jxXMw5fvHJSj3dszKK76ap17rPSa/JpiNEMXFn5pCBqnmfbveuRhjHcxKvKVSyMlbh6R+zFoge0VPwP6KDsKat/39FQddfXbbaoDz+B1vFoTc2hWFQw/IEd5DQIbj08hZiZ14A6xPfutbIiR0y5DnWQjRPWi/tPoE7aSuImWa6gr5MlJSUDcEoJ7HSqSxUS29UCn3F8WWLkaM98XYQrBDdqaKXGoG6yFyLpJkyOpdXq17qhhj5/2CNPqxZIBqIgLeVw1uUvS9XAm8QivMdtmNvTQEl1vmBALVif8FbQGuQGNnRycLo4rJpCu745qtyt9fkCblZ6aGPTt4Ghf/XtW4/dwXDJYqKotl45aY8O06/z6beWh0YOgq6qYKXdW2KscprMPtFMnoK7brKej631/NX9o7a0L83lQXQ1lL+k4JCbrQ/ZpWe3VwE8rIVd1OdVhAHDKOcAGR2n/GY1kfZ+yRjvkIuylti/bGTCl3DzBdwCi4F8ulh2uypsH1mplO+/Of1zpH/UOMLnmEOPg/ENrGZSWJSYpi/We3jVirE4rH+pXLqGLNxczS9hintWFvoV2mVFw8CqmRfakGcrEq2E5PzImBViUDZ/AUxawHtxJxKyCl9yEo/my8Mu9PFpuxQW3BryVmW1X7zCJL0DoqkoaH9hwlP2FS/cWjqiPwOSTjp+DkIuxjjnOYTcLskwEJNBpjXckvzUoz/wZ7W8gOc5cnxvY269+fEmUrsxWHcNbMu3EEFFm02EE66p9sFVQZcZqOP2Z0lINuvTh10r9fuDYDSp/u2YruZbeqJVOPHeC+5yoha8FqvmDtZ3iZcexu0X6d03Ay0xiVeIQ39+SwWs2eHspFC5FvygFJDnS4N84fuyg6E6rxpc9CUfW4YC5lyiqZfKdFHCUZ1+p8BdP0F0wMBdQmuMw1VS/CVmjW9c9P3gGAKtr5wN6XdXJY/uICdDW0RukV9JNfsdfOk0XLEqwBTbvaoRGYXoRy9Jk3KOz3xxRcWn2PwZbuf0CaZQIPJJTmU5KUBFhnFxyOZCCP6JPuHamv7ZTU5kO1b2/gZRTO9Y6RLpAFq64uFrKjzXrZWSZ",
//   iv: "WK7OMSRG5ODxonBO",
//   tag: "pXV7QvmTRA00OkL510pSvw==",
//   key: "46b1f4f0b53e5a5b92dd8e7c9a53826a41a03d9333a501ebeb1710fcd2741420",
//   type: "OPEN-ATTESTATION-TYPE-1",
// };



function decryptionDocument(encryptedDocument) {

    const decryptedDocument = decryptString(encryptedDocument);
    // console.log(JSON.parse(decryptedDocument));
    // console.log(JSON.parse(decryptedDocument));
    return JSON.parse(decryptedDocument);
}
export default decryptionDocument;