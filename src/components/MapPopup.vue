<template>
<div>
    <v-card flat class="mr-2 mt-2 ml-1" :href="/restaurant/ + restaurantId">
            <v-card-title primary-title class="pa-1">
                <span class="font-weight-light title mt-0 mb-0 grey--text text--darken-1">{{restaurantTitle}}</span><br> 
            </v-card-title>
            <v-card-actions class="py-2 px-1">
                <v-chip outline small v-for="(type) in restaurantTypes" >{{type}}</v-chip>
            </v-card-actions>
            <v-img v-for="index in restaurant.rating" :key="index"
                :src="require('../assets/doner_marker_dark_grey_30.svg')"
                contain
                height="24px"
                width="24px"
                max-width="24px"
                max-height="24px"
                position="left left"
              ></v-img>
          </v-card> 
          </div>
</template>
<script>
export default {
    props: {restaurantTitle: String,restaurantId: String, restaurantTypes: String},
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
        }
    },
    beforeMount(){
            this.splitToArray()
    }
}
</script>

