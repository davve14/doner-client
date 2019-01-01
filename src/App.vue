<template>
  <v-app>
    <v-toolbar app flat>
      <v-toolbar-title class="headline text-uppercase">
        <span>Berlin</span>
        <span class="font-weight-light"> Döner Database</span>
      </v-toolbar-title>
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
      <v-icon left>email</v-icon><span class="hidden-sm-and-down">Contact us</span>
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
      globalFilterName: '',
      showFilters: ''
    }
  },
  methods: {
    redirectToSearch () {
      alert(this.globalFilterName)
    }
  }
}
</script>
