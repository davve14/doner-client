<template>
  <v-container class="grey lighten-4 mt-3 pt-3">
      <h2 class="grey--text text--darken-1 font-weight-regular">
        {{ restaurant.name }}
      </h2>
      <v-divider></v-divider>
      <v-layout row wrap mt-2>
        <v-flex xs12 sm6 md4>
          <v-card flat class="mr-3">
            <v-card-text>
              <p class="subheading">
                Imbiß information
              </p>
              <span class="grey--text">
                Types of meat:
              </span>
              <span v-for="(type, index) in restaurant.types" :key="type">
                  {{type}}<span v-if="index+1 < restaurant.types.length">, </span>
              </span><br>
              <span class="grey--text">
                  Professor Imbiss Rating: 
              </span>
                <span>{{restaurant.rating}}</span><br>
              <div class="mt-3">
                <span class="grey--text">
                  Professor Imbiss:
                </span><br>
              </div>
              {{restaurant.description}}
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4>
          <v-card flat>
            <v-carousel flat height="400">
              <v-carousel-item
                v-for="(picture,i) in restaurant.secondary_pictures"
                :key="i"
                :src="require('@/assets/'+picture)"
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>
<script>
import restaurantsJson from '../../data/restaurants.json'

  export default {
    data: () => ({
        restaurants: restaurantsJson.restaurants,
        filteredRestaurants: restaurantsJson.restaurants,
        ratingStyle: '',
        showFilters: false,
        areaslist: ['Kreuzberg','Mitte'],
        typeslist: ['Veal','Marten','Chicken','Falafel','Vegetarian'],
        filterName: '',
        filterAreas: [],
        filterTypes: [],
        restaurant: {}
    }),
    methods: {
      condStyle (index) {
        if (this.restaurants[index].rating <= 2) {
          return this.ratingStyle='orange'
        } else if (this.restaurants[index].rating <= 3) {
          return this.ratingStyle='yellow'
        } else if (this.restaurants[index].rating >= 4) {
          return this.ratingStyle='green'
        } else {
          return this.ratingStyle='black'
        }
      },
      clearFilters(){
        this.filterName = ''
        this.filterAreas = []
        this.filterTypes = []
        this.filteredRestaurants = this.restaurants
      },
      getRestaurant() {
        let filtered = this.restaurants.filter((obj) => { return obj.id.match(this.$route.params.id) })
        this.restaurant = filtered[0]
      }
    },
    beforeMount() {
      this.getRestaurant()
    }
  }
</script>