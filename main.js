//here we are creating a variable called SHA256. it calls the functio in the sha256 library 
const SHA256 = require('crypto-js\sha256')
//this is our class called block. similar to a blueprint, it contains all the required information 
//to create a single instance of a block on the blockchain 
//it contins a constructr which initializes the class, and the paramaters for each block 
class Block {
    constructor(index, timeStamp, data, prevHash = '' ){
        this.index = index;
        this.timeStamp = timestamp;
        this.data = data;
        this.prevHash = prevhash;
        this.hash = this.calcHash();
    }
//here we have a method called calcHash. it returns an argument, 
//created by inputing each isntance of the block object into the paramaters.
//it then performs the calculation in the sha256 function,and returns a variable that is then 
//called by our constructor 
    calcHash () {
        return SHA256(this.index + this.prevHash + this.timestamp + JSON.stringify(this.data).toString())
    }
}

//here we are creating a class called BlockChain! this class holds information to create new 
//instances of block chains that we can push our Blocks on to

//this is our block chain class
//we have a chain property in our BlockChain class. This means for every block chain 
//we create it will have a chain
//the chain is made up of an array of blocks, with the genesis block being the first index on the chain

class BlockChain{
    constructor(){
        this.chain =[this.createGenesisBlock()];
    }

//this method is used to create our genesis block(the first block on a block chain)
//we return a new instance of Block (defined above) and pass the following dummy data as the arguments
    createGenesisBlock() {
        return new Block(0, "03/20/2024", "Helo this is the first $scoin on the block chain!", "null");
    }
//here we create a new method called get latest block. it is used to get the next block in our blockchain
//we return the last block on our chain (length - 1)
    getLatestBlock() {
       return this.chain[this.chain.length - 1];
    }
//this method is used to add enw blocks to our chain
//recall that when we add a new block to our block chain, we must look to the previous one
//in order to determine the newer one's hash
//we then change the new blocks hash again
    addNewBlock() {
        this.addNewBlock.prevHash = this.getLatestBlock().hash;
        this.addNewBlock.hash = newBlock.calcHash();
        this.chain.push(newBlock);

    }
}