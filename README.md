# BlockChain

<img src="./githubFiles/open-source.gif">

Exemple of nativ result: 

```sh
BlockChain {
  chain: [
    Block {
      index: 0,
      timestamp: 1631641270,
      data: { sender: "Alice", reciver: "BN", amount: 100 },
      prevHash: null,
      hash: "05368e5609e5ceeaccbd4e0ffcae1e115ac6b076634bb00ce81962e8e023fe1037be96779d3ce38762f70f28627706ed6b9e..."
    },
    Block {
      index: 1,
      timestamp: 1631641270,
      data: { sender: "BN", reciver: "Amelia", amount: 50 },
      prevHash: "05368e5609e5ceeaccbd4e0ffcae1e115ac6b076634bb00ce81962e8e023fe1037be96779d3ce38762f70f28627706ed6b9e...",
      hash: "1176dd06812e2c4a5928c7c573d1062e2c9b2b6272d852de72ce23ea448621559358d9208e6c56c95ac668070c403c4422c7..."
    },
    Block {
      index: 2,
      timestamp: 1631641270,
      data: { sender: "Amelia", reciver: "Space", amount: 75 },
      prevHash: "1176dd06812e2c4a5928c7c573d1062e2c9b2b6272d852de72ce23ea448621559358d9208e6c56c95ac668070c403c4422c7...",
      hash: "127b452048764ba18d790c2605d3061c96c770bdea31b140e3405075344c3e6b7a168d55108ed39ae7760d29289dc1166544..."
    }
  ]
}
******** Validity of this blockchain:  true
```

Find the module here: [deno.land/x](https://deno.land/x/blockchain_alice)
 