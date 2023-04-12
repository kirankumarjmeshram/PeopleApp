require("dotenv").config();
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);
const contract = require("../artifacts/contracts/PeopleApp.sol/PeopleApp.json");// calling MyNFT json 
const contractAddress = "0xc8C5abcb57056098c07788e1bA439CCcb499bBDB";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress); //Creating instance of contract
//create transaction
async function addPerson(name, age, myNumber, myAddress) {
  nftContract.methods.addPerson(name, age, myNumber, myAddress).call((error, result)=>{
    if(error){
      console.log(error);
    }else{
      console.log("Person detail is added")
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
      console.log("myNumber is Updated")
    }
  });
}

addPerson("name3",23,223,"myAddress3");
//getPersonDetail("myAddress");
//updateNumber("myAddress2", 33)
