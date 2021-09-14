import { BlockChain } from './utils/blockchain.ts';


const myBlockChain = new BlockChain();
myBlockChain.addBlock({
    sender: "Alice",
    reciver: "BN",
    amount: 100
});
myBlockChain.addBlock({
    sender: "BN",
    reciver: "Amelia",
    amount: 50
});
myBlockChain.addBlock({
    sender: "Amelia",
    reciver: "Space",
    amount: 75
});

console.log(myBlockChain)

console.log("******** Validity of this blockchain: ", myBlockChain.chainIsValid());