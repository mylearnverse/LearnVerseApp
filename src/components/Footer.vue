<template>
  <v-footer color="accent" padless class="lvfooter">
    <v-row justify="center" no-gutters>
      <v-btn color="white" text rounded class="my-2">
        <span class="hidden-sm-and-down mr-1">For </span> Students
      </v-btn>
      <v-btn color="white" text rounded class="my-2">
        <span class="hidden-sm-and-down mr-1">For </span> Educators
      </v-btn>
      <v-btn color="white" text rounded class="my-2">
        <span class="hidden-sm-and-down mr-1">For Content </span> Creators
      </v-btn>
      <v-btn color="white" text rounded class="my-2 hidden-sm-and-down">
        Whitelabel
      </v-btn>
    </v-row>
    <span class="copyright hidden-sm-and-down">
      {{ new Date().getFullYear() }} <strong>LearnVerse</strong>
    </span>
  </v-footer>
</template>
