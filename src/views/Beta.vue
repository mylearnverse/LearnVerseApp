<template>
  <div class="demos">
    <a href="/"
      ><v-img :src="logo" max-width="230" class="mx-auto my-6"></v-img
    ></a>
    <v-row class="mb-6">
      <v-col class="col-md-10 offset-md-1">
        <div
          data-tf-widget="G4HlHu1l"
          data-tf-iframe-props="title=LearnVerse Beta"
          data-tf-medium="snippet"
          style="width: 100%; height: 400px"
        ></div>
      </v-col>
    </v-row>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer";

export default {
  name: "Beta",
  components: {
    Footer,
  },
  data: () => ({
    logo: require("@/assets/logo-hor.png"),
  }),
  mounted() {
    let script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    document.body.appendChild(script);
  },
};
</script>
