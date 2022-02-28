<template>
  <v-container fill-height>
    <v-row align="center">
      <v-col class="mx-auto mt-0 pt-0" style="max-width: 400px">
        <v-card class="welcome-card">
          <v-card-text>
            <v-img
              class="mx-12 mb-1 mx-auto"
              :src="logo"
              style="max-width: 250px"
            ></v-img>
            <h4 class="text-center mb-2 mt-4">
              Welcome to LearnVerse, a metaverse designed specifically for
              education.
            </h4>
            <p>
              We're developing innovative
              <strong>Learn-to-Earn</strong> business models to incentivize both
              educators & students to improve learning outcomes.
            </p>
            <v-btn class="mt-1 mb-5 text-white" color="success"
              ><a href="/#/beta">Join Beta</a></v-btn
            >

            <v-btn class="mt-1 mb-5 ml-2 text-white" color="primary"
              ><a href="/#/demos">View Demos</a></v-btn
            >
            <v-divider class="mb-4 mt-2"></v-divider>
            <h3>Beta Participants Access:</h3>
            <v-btn
              class="mb-2 mt-2"
              outlined
              color="accent"
              :disabled="eloading"
              :loading="sloading"
              @click="sredirect"
            >
              Students
            </v-btn>
            <v-btn
              class="mb-2 mt-2 ml-2"
              outlined
              color="accent"
              :disabled="sloading"
              :loading="eloading"
              @click="eredirect"
            >
              Educators
            </v-btn>
            <p v-if="sloading || eloading">
              One moment... preparing your LearnVerse instance.
              <small>This can take around 20 seconds for new users.</small>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Welcome",

  data: () => ({
    connected: false,
    sloading: false,
    eloading: false,
    logo: require("@/assets/logo-square.png"),
  }),
  methods: {
    sredirect() {
      this.sloading = true;
      window.location.href = "https://mylearnverse.com/link";
    },
    eredirect() {
      this.eloading = true;
      window.location.href = "https://mylearnverse.com";
    },
  },
};
</script>
