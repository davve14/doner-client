<template>
    <div>
        <v-container class="grey lighten-4 mt-3 pt-3">
            <v-btn right small flat color="grey" @click="showFilters = !showFilters">
                <v-icon>filter_list</v-icon>
                <span class="caption text-capitalize">Filter</span>
                <v-icon>{{ showFilters ? 'arrow_drop_up' : 'arrow_drop_down' }}</v-icon>
            </v-btn>
            <div v-show="showFilters">
                <v-divider sm-12></v-divider>
                <v-flex xs12 sm3 md6 mb-4>
                    <v-form>
                        <v-text-field prepend-icon="search" v-model="filterName" label="Imbiß search" required
                            @keyup.enter="filterRestaurants"></v-text-field>
                        <v-flex xs12 sm6>
                            <v-select prepend-icon="location_city" :items="areaslist" v-model="filterAreas" :menu-props="{ maxHeight: '400' }"
                                label="Select" multiple hint="Areas" persistent-hint return-object>
                            </v-select>
                            <v-layout align-center row>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g id="surface1">
                                        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(128,128,128);fill-opacity:1;"
                                            d="M 19.199219 5.308594 L 15.246094 3.945312 L 16.183594 1.222656 C 16.265625 0.988281 16.140625 0.734375 15.90625 0.652344 C 15.671875 0.574219 15.417969 0.699219 15.335938 0.933594 L 14.398438 3.652344 L 10.445312 2.292969 C 9.703125 2.035156 8.894531 2.414062 8.640625 3.15625 C 8.632812 3.175781 8.613281 3.242188 8.613281 3.246094 L 5.808594 19.15625 C 5.773438 19.375 5.898438 19.589844 6.105469 19.660156 L 8.59375 20.515625 L 7.816406 22.773438 C 7.734375 23.007812 7.859375 23.265625 8.09375 23.347656 C 8.328125 23.425781 8.582031 23.300781 8.664062 23.066406 L 9.441406 20.808594 L 11.929688 21.664062 C 12.136719 21.738281 12.367188 21.644531 12.46875 21.453125 L 20.058594 7.1875 C 20.058594 7.183594 20.089844 7.101562 20.09375 7.101562 C 20.332031 6.363281 19.9375 5.5625 19.199219 5.308594 Z M 18.765625 7.699219 L 15.566406 6.597656 C 15.332031 6.515625 15.074219 6.640625 14.992188 6.875 C 14.914062 7.109375 15.039062 7.363281 15.273438 7.445312 L 18.339844 8.503906 L 17.144531 10.753906 L 15.179688 10.078125 C 14.945312 9.996094 14.691406 10.121094 14.609375 10.355469 C 14.527344 10.589844 14.652344 10.84375 14.886719 10.925781 L 16.714844 11.554688 L 15.519531 13.808594 L 12.539062 12.78125 C 12.304688 12.699219 12.046875 12.824219 11.96875 13.058594 C 11.886719 13.292969 12.011719 13.546875 12.246094 13.628906 L 15.09375 14.609375 L 13.894531 16.859375 L 12.226562 16.285156 C 11.992188 16.207031 11.738281 16.328125 11.65625 16.566406 C 11.578125 16.800781 11.703125 17.054688 11.9375 17.136719 L 13.46875 17.664062 L 11.859375 20.691406 L 6.761719 18.9375 L 7.054688 17.261719 L 9.464844 18.089844 C 9.699219 18.171875 9.957031 18.046875 10.035156 17.8125 C 10.117188 17.578125 9.992188 17.324219 9.757812 17.242188 L 7.214844 16.367188 L 7.65625 13.855469 L 11.46875 15.167969 C 11.703125 15.25 11.957031 15.125 12.039062 14.890625 C 12.117188 14.65625 11.996094 14.398438 11.761719 14.320312 L 7.8125 12.960938 L 8.257812 10.449219 L 11.347656 11.511719 C 11.582031 11.59375 11.835938 11.46875 11.917969 11.234375 C 11.996094 11 11.871094 10.746094 11.636719 10.664062 L 8.414062 9.554688 L 8.855469 7.042969 L 10.890625 7.742188 C 11.125 7.824219 11.378906 7.699219 11.460938 7.464844 C 11.539062 7.230469 11.414062 6.976562 11.179688 6.894531 L 9.015625 6.148438 L 9.492188 3.445312 C 9.59375 3.1875 9.886719 3.050781 10.152344 3.140625 L 18.910156 6.15625 C 19.175781 6.25 19.320312 6.535156 19.242188 6.804688 Z M 18.765625 7.699219 " />
                                    </g>
                                </svg>
                                <v-select :items="typeslist" v-model="filterTypes" :menu-props="{ maxHeight: '400' }"
                                    label="Select" multiple hint="Types" persistent-hint return-object class="ml-2">
                                </v-select>
                            </v-layout>
                            <v-flex class="mt-4">
                                <v-btn class="primary pt-10" @click="filterRestaurants" small flat>
                                    <span class="caption">search</span>
                                </v-btn>
                                <v-btn @click="clearFilters" small flat>
                                    <span class="caption">Clear filters</span>
                                </v-btn>
                            </v-flex>
                        </v-flex>
                    </v-form>
                </v-flex>
            </div>
            <div class="headline grey--text text--darken-1">Results</div>
            <v-layout row wrap>
                <v-flex class="bell" xs12 sm6 md4 v-for="(restaurant) in filteredRestaurants" :key="restaurant.id">
                    <v-card class="mr-3 my-2 ml-1" :href="/restaurant/ + restaurant.id">
                        <v-img :src="require('@/assets/'+restaurant.primary_picture)" aspect-ratio="2"></v-img>
                        <div class="bellnumbersleft">
                            <v-tooltip top color="blue-grey darken-4">
                                <v-badge color="primary" slot="activator">
                                    <span slot="badge">{{restaurant.id}}</span>
                                </v-badge>
                                <span>Professor Imbiß rating</span>
                            </v-tooltip>
                        </div>
                        <v-card-title primary-title>
                            <div>
                                <v-layout row class="mb-2">
                                    <span class="title mb-0 grey--text text--darken-1">{{restaurant.name}} </span>
                                </v-layout>
                                <v-layout align-center row>
                                    <v-chip outline small v-for="(type) in restaurant.types" :key="type" class="ml-0">{{type}}</v-chip>
                                    <v-img v-for="index in restaurant.rating" :key="index" :src="require('../assets/doner_marker_dark_grey_30.svg')"
                                        contain height="24px" width="24px" max-width="24px" max-height="24px" position="left left"></v-img>
                                </v-layout>
                                <div>{{restaurant.short_description}}</div>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import restaurantsJson from '../../data/restaurants.json'

  export default {
    props: ['globalFilterName','globalShowFilters'],
    data: () => ({
        restaurants: restaurantsJson.restaurants,
        filteredRestaurants: restaurantsJson.restaurants,
        ratingStyle: '',
        showFilters: false,
        areaslist: ['Friedrichshain','Kreuzberg','Marzahn','Mitte','Prenzlauer Berg','Schöneberg','Wedding'],
        typeslist: ['Veal','Marten','Chicken','Falafel','Vegetarian'],
        filterName: '',
        filterAreas: [],
        filterTypes: [],
        data:""
    }),
    methods: {
      condStyle (index) {
        if (this.restaurants[index].rating <= 2) {
          return this.ratingStyle='accent'
        } else if (this.restaurants[index].rating <= 3) {
          return this.ratingStyle='warning'
        } else if (this.restaurants[index].rating >= 4) {
          return this.ratingStyle='success'
        } else {
          return this.ratingStyle='black'
        }
        
      },
      setFilterName() {
        if (this.globalFilterName||this.globalShowFilters) {
          this.showFilters = true
          this.filterName = this.globalFilterName
        } else {
          this.showFilters = false
        }
      },
      filterRestaurants() {
        let filtered = this.restaurants.filter((obj) => { return obj.name.toLowerCase().match(this.filterName.toLowerCase()) })  
        if(this.filterAreas.length > 0 ) {
          filtered = filtered.filter((obj) => { return this.filterAreas.some(filterArea => obj.address.area.match(filterArea)) })
        }
        if(this.filterTypes.length > 0 ) {
          filtered = filtered.filter((obj) => { return this.filterTypes.some(filterType => obj.types.some(type => filterType.match(type))) })
        }
        this.filteredRestaurants = filtered
      },
      clearFilters(){
        this.filterName = ''
        this.filterAreas = []
        this.filterTypes = []
        this.filteredRestaurants = this.restaurants
      },
      alertit () {
        alert(this.areas)
      },
      sortedJson() {
        return this.restaurants.sort((t1,t2) => t2.id > t1.id ? -1 : 1);
      }
    },
    computed: {
      
    },
    mounted() {
      
    },
    beforeMount(){
      this.sortedJson()
      this.setFilterName()
      this.filterRestaurants()
    },
    watch: {
      globalFilterName: function(newVal, oldVal) {
        this.setFilterName()
        this.filterRestaurants()
      }
    }
  }
</script>
<style>
.bellnumbersleft{
position: absolute;
    top: -15px;
    left: -10px;
}
.bell{
    position: relative;
}
</style>

