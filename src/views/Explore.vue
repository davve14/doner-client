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
            <v-text-field
              v-model="filterName"
              label="Search"
              required
              @keyup.enter="filterRestaurants"
            ></v-text-field>
            <v-flex xs12 sm6>
              <v-select
                :items="areaslist"
                v-model="filterAreas"
                :menu-props="{ maxHeight: '400' }"
                label="Select"
                multiple
                hint="Areas"
                persistent-hint
                return-object
              >
              </v-select>
              <v-select
                :items="typeslist"
                v-model="filterTypes"
                :menu-props="{ maxHeight: '400' }"
                label="Select"
                multiple
                hint="Types"
                persistent-hint
                return-object
              >
              </v-select>
              <v-flex class="mt-4">
                <v-btn
                class="primary pt-10"
                @click="filterRestaurants"
                small
                flat
                >
               <span class="caption">search</span>
                </v-btn>
                <v-btn
                @click="clearFilters"
                small
                flat
                >
               <span class="caption">Clear filters</span>
                </v-btn>
              </v-flex>
            </v-flex>
          </v-form>
        </v-flex>
      </div>
      <div class="headline grey--text text--darken-1">Results</div>
      <v-layout row wrap>
        <v-flex class="bell" xs12 sm6 md4 v-for="(restaurant,index) in filteredRestaurants" :key="restaurant.id">
          <v-card flat class="mr-3 mt-2 ml-1" :href="/restaurant/ + restaurant.id">
            <v-img
              :src="require('@/assets/'+restaurant.primary_picture)"
              aspect-ratio="2"
            ></v-img>
            <v-badge :color="condStyle(index)" class="bellnumbersright">
              <span slot="badge">{{restaurant.rating}}</span>
            </v-badge>
            <v-card-title primary-title>
              <div>
                <span class="title mb-0 grey--text text--darken-1">{{restaurant.name}} </span>
                <v-chip outline small v-for="(type) in restaurant.types" :key="type">{{type}}</v-chip>
                <div>{{restaurant.description}}</div>
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
    props: ['areas','search','globalFilterName'],
    data: () => ({
        restaurants: restaurantsJson.restaurants,
        filteredRestaurants: restaurantsJson.restaurants,
        ratingStyle: '',
        showFilters: false,
        areaslist: ['Kreuzberg','Mitte'],
        typeslist: ['Veal','Marten','Chicken','Falafel','Vegetarian'],
        
        filterAreas: [],
        filterTypes: []
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
      filterRestaurants(){
        
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
        return this.restaurants.sort((t1,t2) => t1.rating > t2.rating ? -1 : 1);
      }
    },
    computed: {
      
    },
    watch: {
      filterName: function() {
      if (this.globalFilterName) {
          this.showFilters = true
          this.filterName = this.globalFilterName
        } else {
          this.showFilters = false
        }
      }  
    },
    beforeMount(){
      this.sortedJson()
    }
  }
</script>

<style>

.bellnumbersright{
position: absolute;
    top: 0px;
    right: 10px;
}
.bell{
    position: relative;
}

</style>

