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

          <h1>About</h1>
          <p>
            LearnVerse is a
            <a href="https://www.learncube.com">LearnCube</a> Labs project.
          </p>
          <p>
            We've helped over 50,000 educators transition to live online
            classes, we provide the infrastructure and software to schools and
            tutors to deliver over 20 million minutes of live classes every
            month in 94+ countries.
          </p>
        </v-sheet>
      </v-col>
    </v-row>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer";

export default {
  name: "About",
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

.demos .v-image {
  border-radius: 5px;
}

.demos .v-btn a {
  color: #fff;
  text-decoration: none;
}
</style>
