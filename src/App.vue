<template>
  <v-app>
    <v-toolbar app flat>
      <v-toolbar-items>
        <v-btn flat href="/">
        <span class="headline">Berlin</span>
        <span class="headline font-weight-light">&nbsp;Döner Database</span>
        </v-btn>
      </v-toolbar-items>
    <v-toolbar-items class="ml-5 hidden-sm-and-down">
      <v-btn class="font-weight-light" href="/explore" flat>Explore</v-btn>
      <v-btn class="font-weight-light" href="/map" flat>Map</v-btn>
      <v-btn class="font-weight-light" href="/about" flat>About</v-btn>
      <v-text-field @keyup.enter="redirectToSearch()" v-model="globalFilterName" class="mt-1 ml-5 font-weight-light"
        label="SEARCH"
      ></v-text-field>
      <v-icon>search</v-icon>
    </v-toolbar-items>
      <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
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
      this.$router.push({path: 'explore', query: { globalFilterName: this.globalFilterName }})
    }
  },
  watch: {
    '$route' (to, from) {
    }
  }
}
</script>
