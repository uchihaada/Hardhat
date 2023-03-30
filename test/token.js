const{expect}=require("chai");
const { ethers } = require("hardhat");
const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");

describe("Token contract",function(){
   it("Deployment should assign the total supply of tokens to the owner",async function(){

    const[owner]=await ethers.getSigners();
    console.log("Signers Object",owner);

    const Token =await ethers.getContractFactory("Token");//instance

    const hardhatToken =await Token.deploy();//deploy 

    const ownerBalance= await hardhatToken.balance(owner.address);
    console.log("Owner address",owner.address);

    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
   }) 
});