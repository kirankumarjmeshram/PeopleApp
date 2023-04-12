require("dotenv").config();
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);
const contract = require("../artifacts/contracts/BookApp.sol/BookApp.json");// calling MyNFT json 
const contractAddress = "0xa97033797283633D6EbCf55F877166D4563d0Aff";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress); //Creating instance of contract
//create transaction
async function addPerson(name, age, myNumber, myAddress) {
  nftContract.methods.addPerson(name, age, myNumber, myAddress).call((error, result)=>{
    if(error){
      console.log(error);
    }
  });

}
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

async function updateNumber(myAddress, newMyNumber) {
  nftContract.methods.updateNumber(myAddress, newMyNumber).call((error, result)=>{
    if(error){
      console.log(error);
    }
    else{
      console.log(result)
    }
  });
}

addPerson(name, age, myNumber, myAddress);
getPersonDetail(myAddress);
updateNumber(myAddress, newMyNumber)
