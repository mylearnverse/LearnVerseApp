<template>
  <div class="demos">
    <v-row class="mb-6 mt-4 pt-6">
      <v-col class="col-md-8 offset-md-2">
        <v-sheet class="py-6 px-6">
          <v-row>
            <v-col>
              <a href="/">
                <v-img :src="logo" width="200"></v-img>
              </a>
            </v-col>
          </v-row>

          <h1>Demos</h1>
          <p>Rooms are designed to be lead by a teacher but you can try them out by clicking a demo room below.<br>
            Or email dan@learncube.com to schedule a demo with us.
          </p>

          <v-row class="mx-auto">
            <v-col>
              <v-card>
                <v-card-title class="mx-auto d-block">NEAR Hackathon</v-card-title>
                <v-card-text>
                  <v-img class="mx-auto"
                         max-height="150"
                         max-width="220"
                         src="https://learnverse-nearspark.mylearnverse.com/thumbnail/aHR0cHM6Ly9odWJzLW15bGVhcm52ZXJzZS1jb20tcHJveHkubGVhcm5jdWJlLndvcmtlcnMuZGV2L2ZpbGVzL2FhNjJlNWJkLTQ2MzYtNDBhMy04MTU2LTkyODQ5ZmVkZDRiNy5qcGc.jpg?w=391&h=220"
                  ></v-img>
                </v-card-text>
                <a href="https://mylearnverse.com/P5AHpYp/near-hackathon">
                  <v-btn class="ma-4 text-white" color="accent"
                         @click="dloading=true"
                         :disabled="dloading"
                         :loading="dloading"
                  >View
                  </v-btn>
                </a>
              </v-card>
            </v-col>
            <v-col>
              <v-card>
                <v-card-title class="mx-auto d-block">Spanish Holiday</v-card-title>
                <v-card-text>
                  <v-img class="mx-auto"
                         max-height="150"
                         max-width="220"
                         src="https://learnverse-nearspark.mylearnverse.com/thumbnail/aHR0cHM6Ly9odWJzLW15bGVhcm52ZXJzZS1jb20tcHJveHkubGVhcm5jdWJlLndvcmtlcnMuZGV2L2ZpbGVzLzQ5NWZiMjk5LWNiMWQtNDY1NC1iZDliLWU0YjRhMjQ4YTI1Ni5qcGc.jpg?w=391&h=220"
                  ></v-img>
                </v-card-text>
                <a
                    href="https://mylearnverse.com/PETM62m/spanish-holiday">
                  <v-btn class="ma-4 text-white" color="accent"
                         @click="dloading=true"
                         :disabled="dloading"
                         :loading="dloading">View
                  </v-btn>
                </a>
              </v-card>
            </v-col>
            <v-col>
              <v-card>
                <v-card-title class="mx-auto d-block">Kids Theme</v-card-title>
                <v-card-text>
                  <v-img class="mx-auto"
                         max-height="150"
                         max-width="220"
                         src="https://learnverse-nearspark.mylearnverse.com/thumbnail/aHR0cHM6Ly9odWJzLW15bGVhcm52ZXJzZS1jb20tcHJveHkubGVhcm5jdWJlLndvcmtlcnMuZGV2L2ZpbGVzL2IwODdjNDg2LWI3MmUtNDllNy04OGMxLWViYWIyMTQ0YWQzYi5wbmc.png?w=391&h=220"
                  ></v-img>
                </v-card-text>
                <a
                    href="https://mylearnverse.com/kjzE9MN/kids-room">
                  <v-btn class="ma-4 text-white" color="accent"
                         @click="dloading=true"
                         :disabled="dloading"
                         :loading="dloading">View
                  </v-btn>
                </a>
              </v-card>
            </v-col>
          </v-row>

          <div v-if="dloading" class="ma-6">
            <p>One moment... preparing your LearnVerse demo instance.<br>
              <small>This can take around 20 seconds.</small>
            </p>
          </div>

          <v-divider class="mt-8 mb-6"></v-divider>

          <v-btn class="text-white" color="success"><a
              href="/#/beta">Join Beta</a></v-btn>
        </v-sheet>
      </v-col>
    </v-row>
    <Footer/>
  </div>
</template>
<script>
import Footer from "../components/Footer";

export default {
  name: "Wallet",
  components: {
    Footer,
  },
  data: () => ({
    dloading: false,
    logo: require("@/assets/logo-hor.png"),
  }),
}
</script>
<style>
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