import {sha512} from "https://denopkg.com/chiefbiiko/sha512/mod.ts";

//Create the class of our BLOCK
export class Block {
    constructor(index, data, prevHash) {
        /*
            the index is the number of the block
            the time is the time of the block creation
            the data is the data of the block
            the prevHash is the hash of the previous block
            the hash is the hash of the block
        */
        this.index = index;
        this.timestamp = Math.floor(Date.now() / 1000);
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.getHash();
    }

    getHash() {
        var encript = JSON.stringify(this.data) + this.prevHash + this.index + this.timestamp;
        return sha512(encript, "utf8", "hex");
    }
}