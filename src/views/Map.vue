<template>
<div>
  <mapbox
    access-token="pk.eyJ1IjoiZGF2dmUxNCIsImEiOiJjanFpZjVnYXgwNGF2NDJueHQzZGpoZ3IwIn0.nb0lYF98Ue-7Xt94vgXWkg"
    :map-options="{
    style: 'mapbox://styles/davve14/cjqzhkzw52cw92rs1nhiub7xg',
    center: [13.378,52.516],
    zoom: 12,
    }"
    @map-load="mapLoaded"
    @map-click="mapClicked"
  ></mapbox>
  <v-flex md3 sm6 xs9 ma-0 pa-0 id="mapfilter">
    <v-form>
      <v-select
        :items="typesList"
        v-model="filterTypes"
        menu-props="{ maxHeight: '400'}"
        label="Select types"
        multiple
        background-color="white"
        solo-inverted
        dense
        flat
        @change=runFilterTypes()
      >
        <div
            slot="selection"
            slot-scope="{ item, index }"
        >
        <v-chip small v-if="index === 0">
          <span>{{ item }}</span>
        </v-chip>
        <span
          v-if="index === 1"
          class="grey--text caption"
        >(+{{ filterTypes.length - 1 }} others)</span>
        </div>
      </v-select>
    </v-form>
  </v-flex>
</div>
</template>

<script>
import Mapbox from 'mapbox-gl-vue';
import MapPopup from '../components/MapPopup.vue'
import restaurantsJson from '../../data/restaurants.json'

  export default {
    components: {
      Mapbox
    },
    data: () => ({
      typesList: ['Veal','Marten','Chicken','Falafel','Vegetarian'],
      filterTypes: [],
      geojson : {},
      filteredGeojson: {}
      }),
    methods: {
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
    buildGeoJson(){
      const newRest = restaurantsJson.restaurants.map(function(restaurant){
        return {
          "type": "Feature",
          "properties": {
            "title": restaurant.name,
            "description": restaurant.description,
            "icon": "doner_marker_dark_grey_30",
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
      runFilterTypes(){
        var filterer = this.filterTypes
        var filtered = this.geojson.features.filter(function(feature){
          return feature.properties.types.some(function(type){
            return filterer.some(function(filterType){
              return type.match(filterType)
            })
          })
        })
        this.filteredGeojson = { "features": filtered, "type": "FeatureCollection" }
        this.map.getSource('trace').setData(this.filteredGeojson);
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
      // based on the feature found
      const popup = new mapboxgl.Popup({className: 'popups'})
        .setLngLat(feature.geometry.coordinates)
        .setHTML('<div id="vue-popup-content"></div>')
        .addTo(map);

      new popupContent({
          propsData: {
            restaurantTitle: feature.properties.title,
            restaurantId: feature.properties.restId,
            restaurantTypes: feature.properties.types
          }
      }).$mount('#vue-popup-content');
    }
  },
  beforeMount(){
    this.buildGeoJson()
  },
  created(){
    this.map = null;
  }
  }
</script>
<style>
#map {
  width: 100%;
  height: 600px;
  position: relative;
}
#mapfilter {
  position: absolute;
  top: 10px;
  left: 10px;
}
button.mapboxgl-popup-close-button {
  padding: 0px 8px 0px 8px;
}
</style>

