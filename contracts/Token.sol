//SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract  Token{
    string public name ="HardHat Token";
    string public symbol ="HHT";
    uint256 public totalSupply =10000;

    address public owner;

    mapping(address=>uint)balances;

    constructor(){
        balances[msg.sender]=totalSupply;
        owner=msg.sender;
    }

    function transfer(address to ,uint amount) external  {
        require(balances[msg.sender]>=amount,"Not enough tokens");
        balances[msg.sender]-=amount;
        balances[to]+=amount;

    }
    function balance(address account) external view returns (uint) {
        return balances[account];
        
    }
}