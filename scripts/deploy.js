async function main() {
  const PeopleApp = await ethers.getContractFactory("PeopleApp");
  // Start deployment, returning a promise that resolves to a contract object
  const peopleApp = await PeopleApp.deploy();
  console.log("Contract deployed to address:", peopleApp.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//Contract deployed to address: 0x3591C447B16634367420b6cdB12492427D104C66
//Contract deployed to address: 0xc8C5abcb57056098c07788e1bA439CCcb499bBDB