require("dotenv").config();
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);
const contract = require("../artifacts/contracts/PeopleApp.sol/PeopleApp.json");// calling MyNFT json 
const contractAddress = "0xe16C043F7a38DC6456717C63a8f07fb273D937a2";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress); //Creating instance of contract
//create transaction
//
async function addPerson(name, age, myNumber, myAddress) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce

  //the transaction
  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: nftContract.methods.addPerson(name, age, myNumber, myAddress).encodeABI(),
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            );
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            );
          }
        }
      );
    })
    .catch((err) => {
      console.log(" Promise failed:", err);
    });

}
//
// async function addPerson(name, age, myNumber, myAddress) {
//   nftContract.methods.addPerson(name, age, myNumber, myAddress).call((error, result)=>{
//     if(error){
//       console.log(error);
//     }else{
//       console.log("Person detail is added")
//     }
//   });
// }
async function getPersonDetail(myAddress) {
  nftContract.methods.getPersonDetail(myAddress).call((error, result)=>{
    if(error){
      console.log(error);
    }
    else{
      console.log(result)
    }
  });
}

// async function updateNumber(myAddress, newMyNumber) {
//   nftContract.methods.updateNumber(myAddress, newMyNumber).call((error, result)=>{
//     if(error){
//       console.log(error);
//     }
//     else{
//       console.log("myNumber is Updated")
//     }
//   });
// }
async function updateNumber(myAddress, newMyNumber) {
const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce

  //the transaction
  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: nftContract.methods.updateNumber(myAddress, newMyNumber).encodeABI(),
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            );
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            );
          }
        }
      );
    })
    .catch((err) => {
      console.log(" Promise failed:", err);
    });

  }

//addPerson("name2",22,222,"myAddress2");
getPersonDetail("myAddress2");
//updateNumber("myAddress2", 333)
