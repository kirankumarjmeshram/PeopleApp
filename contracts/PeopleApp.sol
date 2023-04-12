//SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract PeopleApp{
    struct Person {
        string name;
        uint age;
        uint myNumber;
        string  myAddress;
    }

    event NumberUpdated(uint newNumber);

    mapping(string => Person) peopleDetails;

    function addPerson(string memory name, uint age, uint myNumber, string memory myAddress) public {     

         peopleDetails[myAddress] = Person({
            name: name,
            age: age,
            myNumber: myNumber,
            myAddress: myAddress
        });
    }

    function getPersonDetail(string memory myAddress) public view returns (Person memory) {
        return peopleDetails[myAddress];
    }

    function updateNumber(string memory myAddress, uint newMyNumber) public {
        Person storage updatedPerson = peopleDetails[myAddress];
        updatedPerson.myNumber = newMyNumber;
        peopleDetails[myAddress] = updatedPerson; 
        emit NumberUpdated(newMyNumber);
    }
}