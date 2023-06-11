<template>
  <div id="app">
    <BarraNavegador></BarraNavegador>
    
    <router-view></router-view>
    <Pie></Pie>
  </div>
</template>

<script>
import BarraNavegador from './components/BarraNavegador.vue'
//import Carroussel from './components/carroussel.vue'
import Pie from './components/Pie.vue'

export default {
  name: 'App',
  components: {
    BarraNavegador,
    Pie
    //Carroussel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom:0;
  padding-bottom:0;
}
</style>
