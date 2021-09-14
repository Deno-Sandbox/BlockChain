import { Block } from './block.ts';

//Create the class of our Chain
export class BlockChain {
    constructor() {
        //the chain is an array of blocks
        this.chain = [];
    }

    //procedure to add a block to the chain
    addBlock(data) {
        let index = this.chain.length;
        let prevHash = this.chain.length !== 0 ? this.chain[this.chain.length - 1].hash : null;
        let block = new Block(index, data, prevHash);
        this.chain.push(block);
    }


    //check if the chain is valid
    chainIsValid() {
        for (var i = 0; i < this.chain.length; i++) {
            if (this.chain[i].hash !== this.chain[i].getHash()){
                return false;
            } else if (i > 0 && this.chain[i].prevHash !== this.chain[i - 1].hash){
                return false;
            }
        }
        return true;
    }
}