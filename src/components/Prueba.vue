<template>
  <div>Bryan</div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: "Prueba",
    data(){
      return{
        datos: ''
      }
    },
    methods:{
      async getDolar(){
        let datos = await axios.get('https://lit-depths-59456.herokuapp.com/api/users', {
          headers: {
            'cache-control': "no-cache, private",
            'content-type': "application/json"
          }
        });
        console.log(datos.data.data[0])
      }
    },
    created(){
      this.getDolar()
    } 
  }
</script>