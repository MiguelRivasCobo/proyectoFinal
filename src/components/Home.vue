<template>
  <div class="hello">
    <Carroussel></Carroussel>
    
    <div class="d-flex row justify-content-center">
      <div class="card wrap col-3" style="width: 18rem;" v-for="producto in productos" :key="producto.id">
        <img :src="producto.img" alt="img Producto" height="42" width="42">
        <h3>{{ producto.nombre }}</h3>
        <p>{{ producto.descripcion }}</p>
        <p>Precio: {{ producto.precio }}€</p> 
        <button class="btn btn-outline-primary" @click="añadir(producto)">Añadir al carrito</button>  
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../db.js';
import firebase from "firebase";
import Carroussel from './carroussel.vue';

export default {
  name: 'Home',
  props: {},
  components: {
    Carroussel
  },
  data() {
    return {
      usuario: firebase.auth().currentUser,
      productos: [],
      carrito: {
        producto: "",
        usuario: "",
        img: "",
        categoria: "",
        descripcion: "",
        precio: ""
      },
    };
  },
  methods: {
    añadir(producto) {
      if (this.usuario) {
        this.carrito.producto = producto.id;
        this.carrito.precio = producto.precio;
        this.carrito.descripcion = producto.descripcion;
        this.carrito.img = producto.img;
        this.carrito.categoria = producto.categoria;
        this.carrito.usuario = this.usuario.email;
        db.collection("carrito").add(this.carrito);
      } else {
        this.$router.replace('/login');
      }
    }, 
  },
  firestore() {
    return {
      productos: db.collection("productos"),
    };
  },
};
</script>


<style scoped>
.card{
  margin:1rem;
}
.card>img{
  width:90%;
  height:100px;
  margin:auto;
}
</style>