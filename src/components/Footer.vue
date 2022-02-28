<template>
  <v-footer color="accent" padless class="lvfooter mt-6">
    <v-row justify="center" no-gutters>
      <v-btn color="white" text rounded class="ma-2" to="/students">
        <span class="hidden-sm-and-down mr-1">For </span> Students
      </v-btn>
      <v-btn color="white" text rounded class="ma-2" to="/educators">
        <span class="hidden-sm-and-down mr-1">For </span> Educators
      </v-btn>
      <v-btn
        color="white"
        text
        rounded
        class="ma-2 hidden-sm-and-down"
        to="/whitelabel"
      >
        Whitelabel
      </v-btn>
      <v-btn color="white" text rounded class="ma-2" to="/about"> About </v-btn>
    </v-row>
    <span class="copyright hidden-sm-and-down">
      {{ new Date().getFullYear() }} <strong>LearnVerse</strong>
    </span>
  </v-footer>
</template>
<style>
footer.v-footer.lvfooter.mt-6.v-sheet.theme--light.v-footer--padless.accent {
  border-radius: 0;
}
</style>
