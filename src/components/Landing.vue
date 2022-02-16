<template>
  <v-container>
    <v-row
        class="mb-6 mt-12 pt-6"
        no-gutters
    >
      <v-col class="col-md-4 offset-md-4">
        <v-card>
          <v-card-text>
            <v-img class="mx-12 my-4" :src="logo"></v-img>
            <h4 class="text-center mb-2">Welcome to LearnVerse is a metaverse designed specifically for education.</h4>
            <p>We're developing innovative Learn-to-Earn business models to incentivize both educators & students to improve academic outcomes.</p>


            <a class="mb-2 mt-2 v-btn v-btn--outlined theme--light v-size--default accent--text"
               href="https://mylearnverse.com">Enter</a>
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
    logo: require('@/assets/logo-square.png')
  }),
};
</script>
