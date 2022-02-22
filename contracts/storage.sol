pragma solidity ^0.8.0;



contract   Storage {

    event UpdateMessages(string oldStr, string newStr);

    string public  Nume;
    string public Prenume;
    string public message;
    uint public valoare;

    constructor(string memory _nume,string memory _prenume,string memory _message, uint  _valoare){
        message = _message;
        valoare = _valoare;
        Nume = _nume;
        Prenume = _prenume;
    }
    function update(string memory newMessage) public {
        string memory oldMsg = message;
        message = newMessage;
        emit UpdateMessages(oldMsg, newMessage);
    }
    function getName() public view  returns(string memory) {
        return Nume;
    }

    function getPreName() public view returns(string memory){
        return Prenume;
    }

    function getVal() public view returns(uint){
        return valoare;
    }

}