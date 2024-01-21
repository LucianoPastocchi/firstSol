pragma solidity ^0.5.0;

contract CryptoDoggies {

    //string name = "Sambi"; //inmutable

    struct Doggy {

        uint age;
        string name;
        bytes5 dna;
    }

    Doggy[] doggies;

    mapping (uint256 => address) private doggyIdToOwner;
    mapping (address => uint256) private numOfDoggies; //doggies owner has

    event DoggyCreated(uint256 _id, string _name, uint _age, bytes5 _dna);

    function createDoggy(uint _age, string memory _name, bytes5 _dna) public{

        Doggy memory _doggy = Doggy({

            age: _age,
            name: _name,
            dna: _dna
        });//memory temporal

        uint256 newDoggyID = doggies.push(_doggy) - 1;

        doggyIdToOwner[newDoggyID] = msg.sender; //who is calling the function
        numOfDoggies[msg.sender] = numOfDoggies[msg.sender] + 1;

        emit DoggyCreated(newDoggyID, _name, _age, _dna);

    }



}
