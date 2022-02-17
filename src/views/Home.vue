<template>
  <div>
    <video-background
        :src="video"
        :poster="poster"
        style="max-height: 840px; height: 100vh;"
        class="pt-6"
    >
      <landing/>

    </video-background>

    <v-footer
        color="accent"
        padless
        class="lvfooter"
    >
      <v-row
          justify="center"
          no-gutters
      >
        <v-btn
            color="white"
            text
            rounded
            class="my-2"
        >
           <span class="hidden-sm-and-down mr-1">For </span> Students
        </v-btn>
        <v-btn
            color="white"
            text
            rounded
            class="my-2"
        >
          <span class="hidden-sm-and-down mr-1">For </span> Educators
        </v-btn>
        <v-btn
            color="white"
            text
            rounded
            class="my-2"
        >
          <span class="hidden-sm-and-down mr-1">For Content </span> Creators
        </v-btn>
        <v-btn
            color="white"
            text
            rounded
            class="my-2 hidden-sm-and-down"
        >
          Whitelabel
        </v-btn>
      </v-row>
      <span
          class="copyright hidden-sm-and-down"
      >
          {{ new Date().getFullYear() }} <strong>LearnVerse</strong>
        </span>
    </v-footer>
  </div>
</template>

<script>
import VideoBackground from "vue-responsive-video-background-player"
import Landing from "../components/Landing";

export default {
  name: "Home",

  components: {
    Landing,
    VideoBackground
  },
  data: () => ({
    poster: require('@/assets/vid-thumb.png'),
    video: require('@/assets/world-small.mp4')
  }),

};
</script>

<style>
body, .v-application--wrap {
  background-color: #d5d5d5;
}

footer.v-footer.lvfooter {
  position: absolute;
  width: 100%;
  bottom: 0;
}

footer.v-footer.lvfooter span.v-btn__content {
  font-size: 11px;
}

span.copyright {
  position: absolute;
  right: 17px;
  color: #fff;
  font-size: 12px;
}
</style>
