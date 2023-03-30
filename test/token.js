const{expect}=require("chai");
const { ethers } = require("hardhat");


// const { ethers } = require("hardhat");
// const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");

// describe("Token contract",function(){
//    it("Deployment should assign the total supply of tokens to the owner",async function(){

//     const[owner]=await ethers.getSigners();
//     // console.log("Signers Object",owner);

//     const Token =await ethers.getContractFactory("Token");//instance

//     const hardhatToken =await Token.deploy();//deploy 

//     const ownerBalance= await hardhatToken.balance(owner.address);
//     // console.log("Owner address",owner.address);

//     expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
//    });

//    it("Should transfer tokens between accounts",async function(){

//     const[owner,add1,add2]=await ethers.getSigners();
//     // console.log("Signers Object",owner);

//     const Token =await ethers.getContractFactory("Token");//instance

//     const hardhatToken =await Token.deploy();//deploy 

//     //Transfer 10 tokens from owner to add1
//     await hardhatToken.transfer(add1.address,10);
//     expect (await hardhatToken.balance(add1.address)).to.equal(10);
    
//     // Transfer 5 tokens from add1 to add2
//     await hardhatToken.connect(add1).transfer(add2.address,5);
//     expect (await hardhatToken.balance(add2.address)).to.equal(5);
//    });



// });


describe("Token Contract",function(){
    let Token;
    let hardhatToken;
    let owner;
    let add1;
    let add2;
    let addrs;

    beforeEach(async function(){
        Token =await ethers.ContractFactory("Token");
        [owner,add1,add2,...addrs]=await ethers.getSigners();
        hardhatToken =await Token.deploy();
    });

    describe("deployment",function(){
        it("Should set the right owner",async function(){
            expect(await hardhatToken.owner()).to.equal(owner.address);
        })
        it("Should assign the total supply of tokens to the owner", async function(){
            const ownerBalance =await hardhatToken.balance(owner.address);
            expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
        })
    });

    describe("Transaction", function(){
        it("should transfer tokens between accounts",async function(){

            //from owner account to address1
            await hardhatToken.transfer(add1.address,5);

            const add1bal=await hardhatToken.balance(add1.address);
            expect(add1bal).to.equal(5);
            
            start from 49.00 hardhat

        })
    })

})