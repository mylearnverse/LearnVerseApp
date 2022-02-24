<template>
  <div class="demos">
    <v-row class="mb-6 mt-12 pt-6">
      <v-col class="col-md-8 offset-md-2">
        <v-sheet class="pa-8">
          <v-row>
            <v-col>
              <a href="/">
                <v-img :src="logo" width="200" class="ml-3"></v-img>
              </a>
            </v-col>
          </v-row>

          <h1>Demos</h1>
          <p>Rooms are designed to be lead by a teacher but you can try them out by clicking an demo room below.<br>
            Or email dan@learncube.com to schedule a demo.
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
                <v-btn class="ma-4 text-white" color="accent"><a href="https://mylearnverse.com/P5AHpYp/near-hackathon">View</a>
                </v-btn>
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
                <v-btn class="ma-4 text-white" color="accent"><a
                    href="https://mylearnverse.com/PETM62m/spanish-holiday">View</a>
                </v-btn>
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
                <v-btn class="ma-4 text-white" color="accent"><a
                    href="https://mylearnverse.com/kjzE9MN/kids-room">View</a></v-btn>
              </v-card>
            </v-col>
          </v-row>

          <v-btn class="ma-8 text-white" color="success"><a
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