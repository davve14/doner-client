<template>
  <v-app>
    <v-toolbar app flat>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile>
            <v-list-tile-content>
              <v-btn right flat href="/home">
                <span class="font-weight-light">Home</span>
              </v-btn>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-btn right flat href="/">
                <span class="font-weight-light">Explore</span>
              </v-btn>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-btn right flat href="/map">
                <span class="font-weight-light">Map</span>
              </v-btn>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-btn right flat href="/about">
                <span class="font-weight-light">About</span>
              </v-btn>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-btn right flat href="/contact">
                <span class="font-weight-light">Contact us</span>
              </v-btn>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-toolbar-items>
        <v-btn class="hidden-sm-and-down" right flat href="/home">
          <span class="headline">Berlin</span>
          <span class="headline font-weight-light">&nbsp;Döner Database</span>
        </v-btn>
        <v-btn class="hidden-md-and-up" right flat href="/home">
          <span class="headline">BERLIN</span>
          <span class="headline font-weight-light">&nbsp;Döner DB</span>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="ml-5 hidden-sm-and-down">
        <v-btn class="font-weight-light" to="/" flat>Explore</v-btn>
        <v-btn class="font-weight-light" to="/map" flat>Map</v-btn>
        <v-btn class="font-weight-light" to="/about" flat>About</v-btn>
        <v-text-field append-icon="search" clearable @keyup.enter="redirectToSearch()" v-model="globalFilterName" class="mt-1 ml-5 font-weight-light"
          label="Imbiß search"></v-text-field>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/contact">
          <v-icon left>email</v-icon><span class="hidden-sm-and-down font-weight-light">Contact us</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view :globalFilterName="globalFilterName"></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
      },
  data () {
    return {
      globalFilterName: ''
    }
  },
  methods: {
    redirectToSearch () {
      this.$router.push({path: '/explore', query: { globalFilterName: this.globalFilterName }})
    }
  },
  beforeMount() {
  },
  watch: {
    '$route' (to, from) {
    }
  }
}
</script>
<style>
.wrapping {
  white-space: normal;
}
</style>