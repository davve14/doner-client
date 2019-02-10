<template>
  <v-container class="grey lighten-4 mt-3 pt-3">
      <h2 class="grey--text text--darken-1">
        {{ restaurant.name }}
      </h2>
      <v-divider></v-divider>
      <v-layout row wrap mt-2>
        <v-flex xs12 sm6 md8>
          <v-card flat class="mr-3">
            <v-card-text>
              <span class="grey--text text--darken-1 body-2">
                Types of meat:
              </span>
              <span v-for="(type, index) in restaurant.types" :key="type">
                  {{type}}<span v-if="index+1 < restaurant.types.length">, </span>
              </span><br>
              <span class="grey--text text--darken-1 body-2">
                  Professor Imbiss Rating: 
              </span>
                <span>{{restaurant.rating}}</span><br>
              <div class="mt-3">
                <span class="grey--text text--darken-1 body-2">
                  Professor Imbiss
                </span><br>
              </div>
              <p v-for="before in restaurant.long_description.befores" :key="before">
                {{before}}
              </p>
              <p>
              <span class="grey--text text--darken-1 body-2">
                Meat:
              </span>
              {{restaurant.long_description.structure.meat}}
              </p>
              <p>
              <span class="grey--text text--darken-1 body-2">
                Sauce:
              </span>
              {{restaurant.long_description.structure.sauce}}
              </p>
              <p>
              <span class="grey--text text--darken-1 body-2">
                Condiments:
              </span>
              {{restaurant.long_description.structure.condiments}}
              </p>
              <p>
              <span class="grey--text text--darken-1 body-2">
                Bread:
              </span>
              {{restaurant.long_description.structure.bread}}
              </p>
              <p v-for="after in restaurant.long_description.afters" :key="after">
                {{after}}
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4>
        <v-flex>
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
        <v-flex>
          <v-card flat class="mt-3">
            <mapbox
              access-token="pk.eyJ1IjoiZGF2dmUxNCIsImEiOiJjanFpZjVnYXgwNGF2NDJueHQzZGpoZ3IwIn0.nb0lYF98Ue-7Xt94vgXWkg"
              :map-options="{
              style: 'mapbox://styles/davve14/cjqzhkzw52cw92rs1nhiub7xg',
              center: [restaurant.coordinates[0],restaurant.coordinates[1]],
              zoom: 14,
              }"
              @map-load="mapLoaded"
            ></mapbox>
          </v-card>
        </v-flex>
        </v-flex>
      </v-layout>
  </v-container>
</template>
<script>
import restaurantsJson from '../../data/restaurants.json'
import Mapbox from 'mapbox-gl-vue';
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
        restaurant: {},
        filteredGeojson: {},
        restaurant: {}
    }),
    components: {
      Mapbox
    },
    methods: {
      buildGeoJson(){
      const newRest = restaurantsJson.restaurants.map(function(restaurant){
        return {
          "type": "Feature",
          "properties": {
            "title": restaurant.name,
            "description": restaurant.description,
            "icon": "doner_marker_grey",
            "types": restaurant.types,
            "restId": restaurant.id
          },
          "geometry": {
            "coordinates": restaurant.coordinates,
            "type": "Point"
          }
        }
      })
      this.geojson = { "features": newRest, "type": "FeatureCollection" }
      this.filteredGeojson = { "features": newRest, "type": "FeatureCollection" }
      },
      mapLoaded(map) {
      this.map=map
        map.addSource('trace', { type: 'geojson', data: this.filteredGeojson })
        map.addLayer({
          'id': 'points',
          'type': 'symbol',
          'source': 'trace',
          'layout': {
            'icon-image': '{icon}'
          }
        })
      },
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
      this.buildGeoJson()
    }
  }
</script>
<style scoped>
  #map {
  width: 100%;
  height: 300px;
  position: relative;
}
</style>
