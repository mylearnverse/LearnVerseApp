<template>
  <v-container>
    <v-row
        class="mb-6"
        no-gutters
    >
      <v-col class="col-md-4 offset-md-4">
        <v-card>
          <v-card-text>
            <v-img class="mx-12 my-4" :src="logo"></v-img>
            <h3 class="text-center">Connect NEAR Wallet</h3>
            <v-btn class="mb-2 mt-2" outlined color="accent" @click="connectWallet({ requestSignIn: true })">Connect
            </v-btn>
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
    logo: require('@/assets/logo-square.png')
  }),

  methods: {
    async connectWallet() {
      console.log('connect')
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
      const wallet = new WalletConnection(near);

      const signIn = () => {
        wallet.requestSignIn(
            "learnverse.testnet", // contract requesting access
            "LearnVerse", // optional
            "http://learverse.spaces/success", // optional
            "http://learverse.spaces/failure" // optional
        );
        console.log(wallet)
      };
      signIn()

    },
  },
};
</script>
