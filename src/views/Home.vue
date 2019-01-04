<template>

    <v-img
      :src="require('@/assets/fp1.png')"
      >
        <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex lg4 md6 xs12>
        <v-card raised>
          <v-toolbar card><v-toolbar-title class="font-weight-light">Find restaurants or simply start <router-link to="explore">exploring</router-link></v-toolbar-title></v-toolbar>
      <div class="ma-4">
      <v-text-field @keyup.enter="redirectToSearch()" v-model="globalFilterName" class="font-weight-light"
        label="Search by Imbiß name"
      ></v-text-field>
      <v-btn right small flat color="grey" @click="redirectToAdvancedSearch()">
        <v-icon>search</v-icon>
        <span class="caption text-capitalize font-weight-light" >Advanced Search</span>
      </v-btn>
      </div>
      </v-card>
      </v-flex>
          </v-layout>
  </v-container>
    </v-img>

</template>
<script>

  export default {
    data () {
    return {
      globalFilterName: ''
    }
    },
    methods: {
    redirectToSearch () {
      this.$router.push({path: 'explore', query: { globalFilterName: this.globalFilterName }})
    },
    redirectToAdvancedSearch () {
      this.$router.push({path: 'explore', query: { globalFilterName: this.globalFilterName, globalShowFilters: true  }})
    }
    }
  }
</script>
