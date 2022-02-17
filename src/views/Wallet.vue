<template>
  <v-container>
    <v-row class="mb-6 mt-12 pt-6" no-gutters>
      <v-col class="col-md-4 offset-md-4">
        <v-card>
          <v-card-text>
            <v-img class="mx-12 my-4" :src="logo"></v-img>
            <div v-if="!connected">
              <h3 class="text-center">Connect NEAR Wallet</h3>
              <v-btn
                  class="mb-2 mt-2"
                  color="accent"
                  @click="connectWallet({ requestSignIn: true })"
              >Connect
              </v-btn>
            </div>
            <div v-else>
              Wallet already connected:
              <v-btn
                  class="mb-2 mt-2"
                  color="accent"
                  @click="onwards"
              >Continue
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as nearAPI from "near-api-js";

export default {
  name: "Wallet",
  data: () => ({
    connected: false,
    logo: require("@/assets/logo-square.png"),
    wallet: {}
  }),

  mounted() {
    this.nearConnect()
  },

  methods: {
    async nearConnect() {
      const {connect, keyStores, WalletConnection} = nearAPI;

      const config = {
        networkId: "testnet",
        keyStore: new keyStores.BrowserLocalStorageKeyStore(),
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
      };

      // connect to NEAR
      const near = await connect(config);
      // create wallet connection
      this.wallet = new WalletConnection(near);
      console.log('check wallet')
      if (this.wallet.isSignedIn()) {
        this.connected = true
        console.log('connected')
      }
    },
    async connectWallet() {
      console.log("start connect wallet");
      const signIn = () => {
        this.wallet.requestSignIn(
            "learnverse.testnet", // contract requesting access
            "LearnVerse", // optional
            "https://mylearnverse.com/signin/", // optional
            "https://learnverse.space/#/wallet" // optional
        );
      };
      signIn();
    },
    onwards() {
      window.location.href = "https://learnverse.space";
    }
  },
};
</script>
