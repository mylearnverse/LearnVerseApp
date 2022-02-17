<template>
  <v-container fill-height>
    <v-row align="center">
      <v-col class="mx-auto"
             style="max-width: 400px;"
      >
        <v-card>
          <v-card-text>
            <v-img class="mx-12 my-4 mx-auto" :src="logo"
                   style="max-width: 210px;"
            ></v-img>
            <h4 class="text-center mb-2">Welcome to LearnVerse a metaverse designed specifically for education.</h4>
            <p>We're developing innovative Learn-to-Earn business models to incentivize both educators & students to
              improve academic outcomes.</p>


            <v-btn class="mb-2 mt-2" color="accent"
                   :loading="loading"
                   @click="redirect">
              Enter
            </v-btn>
            <p v-if="loading">One moment... preparing your LearnVerse instance.</p>
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
    loading: false,
    logo: require('@/assets/logo-square.png')
  }),
  methods: {
    redirect() {
      this.loading = true
      window.location.href = "https://mylearnverse.com"
    },
  },
};
</script>
