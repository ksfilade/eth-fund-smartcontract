pragma solidity ^0.4.17;

contract Inbox {
    string public message;
     event Deposit(
        address indexed _from,
        uint _value,
        address indexed _to,
        string fromId,
        string toId
    );


    constructor (string initialMessage) public {
        message = initialMessage;
    }
    function send(address fundAddress, string fromId, string toId) public payable {
      fundAddress.transfer(msg.value);
      emit Deposit(msg.sender, msg.value, fundAddress, fromId, toId);

    }
}
