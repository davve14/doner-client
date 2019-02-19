<template>
<div>
    <v-card flat class="mr-2 mt-2 ml-1" :href="/restaurant/ + restaurantId">
            <v-card-title primary-title class="pa-1">
                <span class="title mt-0 mb-0 grey--text text--darken-1">{{restaurantTitle}}</span><br> 
            </v-card-title>
            <v-card-actions class="py-2 px-1">
                
                <v-container class="px-1 py-0">
                    <v-layout>
                        <v-img
                            :src="require('@/assets/'+restaurant.primary_picture)"
                            aspect-ratio="2"
                            width="200px"
                        ></v-img>
                    </v-layout>
                    <v-layout  align-center row class="pt-1">
                       <span class="font-weight-thin grey--text subheading  text--darken-1">Types: </span>
                        <v-chip outline small v-for="(type) in restaurantTypes" >{{type}}</v-chip>
                    </v-layout>
                    <v-layout  align-center row  class="pt-1">
                        <span class="font-weight-light grey--text subheading  text--darken-1">Rating: </span>
                        <v-img v-for="index in restaurant.rating" :key="index"
                        :src="require('../assets/doner_marker_dark_grey_30.svg')"
                        contain
                        height="24px"
                        width="24px"
                        max-width="24px"
                        max-height="24px"
                        position="left left"
                    ></v-img>
                    </v-layout>
                </v-container>
            </v-card-actions>
          </v-card> 
          </div>
</template>
<script>
import restaurantsJson from '../../data/restaurants.json'
export default {
    props: {restaurantTitle: String,restaurantId: String, restaurantTypes: String},
    data () {
        return {
            restaurantsJson: restaurantsJson,
            restaurant: {}
        }
    },
    methods:{
        popupClicked() {
            alert('Popup Clicked!');
        },
        splitToArray() {
            this.restaurantTypes = this.restaurantTypes
            .replace(/]/i, "")
            .replace(/"/g, "")
            .replace(/\[/i, "")
            .split(',')
        },
        getRestaurantById(id) {
            let restaurant = this.restaurantsJson.restaurants.filter((obj) => { return obj.id.match(id) })
            this.restaurant = restaurant[0]
            console.log(this.restaurant)
        }
    },
    beforeMount(){
            this.splitToArray()
            console.log(this.getRestaurantById(this.restaurantId))
    }
}
</script>

