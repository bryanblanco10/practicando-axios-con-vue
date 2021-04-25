<template>
  <v-app>
    <v-main>
      <v-container>
        <router-view></router-view>
        <v-dialog v-model="loading.estado" hide-overlay persistent width="300">
          <v-card :color="loading.color" dark>
            <v-card-text>
              {{loading.titulo}}
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
        <!-- <Prueba /> -->
        <!-- <FormularioDinamico /> -->
        <!-- <ul v-for="item in address" :key="item.id">
          <li>{{item}}</li>
        </ul> -->
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
// import Prueba from './components/Prueba.vue'
// import FormularioDinamico from './components/FormularioDinamico.vue'
export default {
  name: "App",
  data() {
    return{
      lat: [],
      lng: [],
      address: []
    }
  },
  components:{
    // Prueba
    // FormularioDinamico
  },
  methods:{
    obtenerLocation(){
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition((position) =>{
            let pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
            this.lat = pos.lat;
            this.lng = pos.lng;

            this.loadLocation();
          })     
      }else{
        console.log('Geolocation no disponible');
      }
    },
    async loadLocation(){
      let {data:{results:datos}} = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.lat},${this.lng}&key=AIzaSyAYM1HjOvB8ZQtk7E2XmS5CpnipDfVXWvY`
      );

        datos = datos[0].formatted_address.split(',')
        console.log(datos)
        this.address = datos 
    }
  },
  mounted(){
    this.obtenerLocation();
  },
  computed: {
    ...mapState(['loading'])
  }
};
</script>
