pragma solidity ^0.4.17;

contract Inbox {
    string public message;

    constructor (string initialMessage) public {
        message = initialMessage;
    }
    function send(address fundAddress) public payable {
        fundAddress.transfer(msg.value);
    }
}
