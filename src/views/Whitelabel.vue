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

          <h1>Whitelabel</h1>
          <p>
            Create your own branded version of LearnVerse, use your own logo and
            colors.
          </p>
          <p>
            Create a competitive advantage, get to market quick and future proof
            your education business.
          </p>

          <v-btn class="text-white mx-2" color="success"
            ><a href="/#/beta">Join Beta</a></v-btn
          >
        </v-sheet>
      </v-col>
    </v-row>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer";

export default {
  name: "Whitelabel",
  components: {
    Footer,
  },
  data: () => ({
    dloading: false,
    logo: require("@/assets/logo-square.png"),
  }),
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
</style>
