<template>
  <div class="hello">
    <Carroussel></Carroussel>
  <div class="d-flex row justify-content-center">
    <div class="card wrap col-3" style="width: 18rem;" v-for="producto in productos" v-bind:key="producto">
    <img :src="producto.img" alt="img Producto" height="42" width="42">
        <h3>{{producto.nombre}}</h3>
        <p>{{producto.descripcion}}</p>
        <p>Precio: {{producto.precio}}€</p> 
        <button class="btn btn-outline-primary" v-on:click="añadir(producto)">Añadir al carrito</button>  
    </div>
  </div>
  <div>
        
    </div>
  </div>
</template>

<script>
import {db} from '../db.js';
import firebase from "firebase";
import Carroussel from './carroussel.vue';
export default {
  name: 'Productos',
  props: ['msg'],
  components:{
    Carroussel
  },
  data () {
      return {
        usuario:firebase.auth().currentUser,
        productos:[],
        cat:'animales',
        carrito:{producto:"",
        usuario:"",
        img:"",
        descripcion:"",
        categoria:"",
        precio:""},
      }
      
    },
    watch: {
    "msg": function() {
      this.$router.go(0);
      //location.reload();
      //this.$forceUpdate();
    }
  },
  methods:{
    getImgUrl: function (img) {
    var images = "'../imagenes/" + img + ".jpg'"
    alert(images)
    return images
  },
  añadir:function(producto){
            if(this.usuario){
                this.carrito.producto=producto.id;
                this.carrito.precio=producto.precio;
                this.carrito.descripcion=producto.descripcion;
                this.carrito.img=producto.img;
                this.carrito.categoria=this.msg;
                this.carrito.usuario=this.usuario.email;
                db.collection("carrito").add(this.carrito);
            }else{
                this.$router.replace('/login');
            }
        }, 
  }, 
  firestore() {
    return{
      productos:db.collection("productos").where("categoria", "==",  this.msg),
      }
    }
  
}


</script>

<style scoped>
.card{
  margin:1rem;
}
.card>img{
  width:100px;
  height:100px;
  margin:auto;
}

</style>