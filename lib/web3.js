import Web3 from "web3";
import Planetary from "./Planetary.json";

let web3 = new Web3(
  `wss://rinkeby.infura.io/ws/v3/70f2db64d3254f999a6a9707aaca5a3e`
);

const contractAddress = "0x8df78dc62e4041D9768734f5dafe406B4B391094";
const contract = new web3.eth.Contract(Planetary.abi, contractAddress); // new web3.eth.Contract(Planetary.abi, contractAddress)

export { web3, contract, contractAddress };
