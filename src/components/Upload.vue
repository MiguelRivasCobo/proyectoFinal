<template>
  <div id="upload">
    <br>
    <h1>Copia la dirección de tu imagen aqui</h1>
    <p>Para subir una foto local, puedes subirla a Google Drive, obtener el enlace y pegarlo aquí</p>
    <input id="img" class="form-control form-control-lg" type="text" placeholder="Url de imagen"><br>
    <button class="btn btn-outline-primary" v-on:click="añadir()">Subir</button>
  </div>
</template>

<script>
//import Carroussel from './carroussel.vue';
import {db} from '../db.js';
import firebase from "firebase";
export default {
  name: 'Upload',
  props: {
  },
  data () {
      return {
        usuario:firebase.auth().currentUser,
        carrito:{producto:"",
        usuario:"",
        img:"",
        categoria:"",
        descripcion:"",
        precio:""},
      }
      
    },
  components:{
    //Carroussel
  },
  methods:{
    añadir:function(){
            if(this.usuario){
              var result           = '';
              var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
              var charactersLength = characters.length;
               for ( var i = 0; i < 10; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
              }
                this.carrito.producto=result,
                this.carrito.precio="10";
                this.carrito.descripcion="Diseño elegido por el cliente";
                this.carrito.img=document.getElementById("img").value;
                this.carrito.categoria="producto personalizado";
                this.carrito.usuario=this.usuario.email;
                db.collection("carrito").add(this.carrito);
                document.getElementById("img").value="";
                alert("Añadido al carrito")
            }else{
                this.$router.replace('/login');
            }
        }, 
  }, 
}

</script>

<style scoped>
  input{
    background-color: rgb(201, 200, 200);
    width: 90%;
    height: 300px;
    border: 2px solid #ccc;
    text-align: center;
    margin: auto;
  }
  input>*{
    text-align: center;
    margin: auto;
  }
  div{
    text-align: center;
  }
  
</style>