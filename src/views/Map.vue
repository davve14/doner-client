<template>
<div>
  <mapbox
    access-token="pk.eyJ1IjoiZGF2dmUxNCIsImEiOiJjanFpZjVnYXgwNGF2NDJueHQzZGpoZ3IwIn0.nb0lYF98Ue-7Xt94vgXWkg"
    :map-options="{
    style: 'mapbox://styles/mapbox/light-v9',
    center: [13.378,52.516],
    zoom: 12,
    }"
    @map-load="mapLoaded"
    @map-click="mapClicked"
  ></mapbox>
  <v-container ma-0 pa-0 id="mapfilter">
  
    <v-layout>
      <v-flex md3 sm6 xs9>
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
import MapPopup from '../components/MapPopup.vue'

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
    mapLoaded(map) {
      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': {
          'type': 'geojson',
          'data': geojs
        },
        'layout': {
          'icon-image': '{icon}-15',
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top'
        }
      });
    },
    mapClicked(map, e) {
      this.addPopUp(map, e);
    },
    mapMouseMoved(map, e) {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ['points']
      });
      map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
    },
    addPopUp(map, e) {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ['points']
      });
      if (!features.length) {
        return;
      }
      
      const feature = features[0];
      const popupContent = Vue.extend(MapPopup);

      // Populate the popup and set its coordinates
      // based on the feature found.
      const popup = new mapboxgl.Popup()
        .setLngLat(feature.geometry.coordinates)
        .setHTML('<div id="vue-popup-content"></div>')
        .addTo(map);

      new popupContent({
          propsData: { title: feature.properties.title }
      }).$mount('#vue-popup-content');
    }
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

