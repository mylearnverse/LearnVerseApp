<template>
  <div class="demos">
    <v-row class="mb-6 mt-4 pt-6">
      <v-col class="col-md-4 offset-md-4">
        <v-sheet class="py-6 px-6">
          <v-row>
            <v-col>
              <a href="/">
                <v-img
                  :src="logo"
                  max-width="200"
                  width="80%"
                  class="mx-auto d-block"
                ></v-img>
              </a>
            </v-col>
          </v-row>

          <h1>Students</h1>
          <p>
            LearnVerse provides a new way to learn, using 3D worlds and scenes
            focused on making learning fun and effective through immersive &
            active learning.
          </p>
          <p>
            Your teacher or tutor will lead you through interactive lesson
            plans, no downloads or special equipment is needed (although VR
            headsets are supported).
          </p>
          <p>
            Simply enter your LearnVerse room using a link or room pin code
            provided to you.
          </p>
          <v-btn
            class="text-white my-4"
            color="success"
            :loading="dloading"
            @click="slink"
            >Enter Room Code</v-btn
          >
          <div v-if="dloading" class="ma-6">
            <p>
              One moment... preparing your LearnVerse class.<br />
              <small>This can take around 20 seconds.</small>
            </p>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer";

export default {
  name: "Students",
  components: {
    Footer,
  },
  data: () => ({
    dloading: false,
    logo: require("@/assets/logo-square.png"),
  }),
  methods: {
    slink() {
      this.dloading = true;
      window.location.href = "https://mylearnverse.com/link";
    },
  },
};
</script>
<style>
footer.v-footer.lvfooter {
  position: absolute;
  z-index: 3;
  width: 100%;
  bottom: 0;
}

.demos {
  min-height: 100vh;
}

.demos .v-image {
  border-radius: 5px;
}

.demos .v-btn a {
  color: #fff;
  text-decoration: none;
}
</style>
