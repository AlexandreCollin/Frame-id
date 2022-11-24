import axios from "axios";

class Starton {
  private static readonly axiosInstance = axios.create({
    baseURL: "https://api.starton.io",
    headers: {
      "x-api-key": "sk_live_bf23beb9-5126-4ea8-b473-571a6731fe19",
    },
  });
  static mintMajority(destWallet: string) {
    this.axiosInstance
      .post(
        "/v3/smart-contract/binance-testnet/0xB3fbF037F7b708d983B59330C436736a9e0a591d/call",
        {
          functionName: "safeMint",
          params: [destWallet, ""],
          signerWallet: "0x8500BAFfFc0182ec90cF36101035293191f95B28",
          speed: "average",
        },
      )
      .then((response) => {
        console.log(response.data);
      });
  }
}

export default Starton;
