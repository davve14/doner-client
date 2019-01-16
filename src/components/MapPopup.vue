<template>
<div>
    <v-card flat class="mr-3 mt-2 ml-1" :href="/restaurant/ + restaurantId">
            <v-card-title primary-title>
              <div>
                <span class="title mb-0 grey--text text--darken-1">{{restaurantTitle}}</span><br>
                <v-chip outline small v-for="(type) in restaurantTypes" >{{type}}</v-chip>
              </div>
            </v-card-title>
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

