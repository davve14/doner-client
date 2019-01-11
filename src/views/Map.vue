<template>


<div>
  <mapbox
    access-token="pk.eyJ1IjoiZGF2dmUxNCIsImEiOiJjanFpZjVnYXgwNGF2NDJueHQzZGpoZ3IwIn0.nb0lYF98Ue-7Xt94vgXWkg"
    :map-options="{
    style: 'mapbox://styles/mapbox/light-v9',
    center: [13.378,52.516],
    zoom: 12
    }"
  ></mapbox>
  <v-container ma-0 pa-0 id="mapfilter">
  
    <v-layout>
      <v-flex md3 sm6 xs12>
    <v-form>
      <v-select
                :items="areaslist"
                v-model="filterAreas"
                menu-props="{ maxHeight: '400'}"
                label="Select areas"
                multiple
                background-color="white"
                solo-inverted
                dense
                flat
      >
        <template
          slot="selection"
          slot-scope="{ item, index }"
        >
          <v-chip small v-if="index === 0">
            <span>{{ item }}</span>
          </v-chip>
          <span
            v-if="index === 1"
            class="grey--text caption"
          >(+{{ filterAreas.length - 1 }} others)
          </span>
        </template>
      </v-select>
    </v-form>
    </v-flex>
    </v-layout>
  
</v-container>
 </div>
         

</template>

<script>
import mapStyle from '../../data/style.json';
import geojs from '../../data/geo.json';
import Mapbox from 'mapbox-gl-vue';

  export default {
    components: {
      Mapbox
    },
    data() {
    return {
      areaslist: ['Friedrichshain','Kreuzberg','Marzahn','Mitte','Prenzlauer Berg','Schöneberg','Wedding'],
      filterAreas: [],
      }},
    methods: {
    }
  }
</script>
<style scoped>
#map {
  width: 100%;
  height: 500px;
  position: relative;
}
#mapfilter{
    position: absolute;
    top: 10px;
    left: 10px;
}
</style>

