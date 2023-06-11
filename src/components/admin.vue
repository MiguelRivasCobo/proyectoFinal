<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md ">
            <div class="row justify-content-center border border-dark">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        
                        <template>
                            <div class="text-center text-muted mb-4">
                                <h2>Cargar producto</h2>
                            </div>
                            <form role="form">
                                <select v-model="prod.categoria" class="browser-default custom-select">
                                    <option disabled value="">Selecciona una categoria</option>
                                    <option>Camisas</option>
                                    <option>Camisetas</option>
                                    <option>Gorras</option>
                                    <option>Sudaderas</option>
                                    <option>Pantalones</option>
                                    <option>Calcetines</option>
                                </select><br><br>
                                <input alternative id="nombre"
                                            type="text"
                                            placeholder="nombre"
                                            addon-left-icon="ni ni-camera-compact"
                                            v-model="prod.nombre"><br><br>
                                <input id="precio"
                                            type="text"
                                            placeholder="precio"
                                            v-model="prod.precio"><br><br>
                                <input id="descrip"
                                            type="text"
                                            placeholder="descrip"
                                            addon-left-icon="ni ni-briefcase-24"
                                            v-model="prod.descripcion"><br><br>
                                <input alternative id="img"
                                            type="text"
                                            placeholder="enlace de imagen"
                                            addon-left-icon="ni ni-camera-compact"
                                            v-model="prod.img"><br><br>
                                <div class="text-center">
                                    <button class="btn btn-outline-primary" v-on:click="cargar">Subir Producto</button><br><br>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div><br><br>
        <h1>Pedidos:</h1>
    <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300 row justify-content-center " no-body>
                    <div id="card" class="col-lg-3 bg-light m-2 justify-content-center border border-dark" v-for="pedido in pedidos" v-bind:key="pedido.i">
                        <card class="border-0 m-auto " hover shadow body-classes="py-5">
                                    <div class="row">
                                    <div class="col-4">
                                    <p>{{pedido.usuario}}</p>
                                    <p class="text-primary text-uppercase">Productos:{{pedido.productos}}</p>
                                    <p>Precio: {{pedido.precio}}€</p>
                                    </div>
                                    <div class="col-4"><br><br><br>
                                    </div>
                                    </div>
                                </card>
                    </div>
                </card>
            </div>
        </section>  <br>  
        <h2>Productos:</h2>
        <div class="d-flex row justify-content-center">
    <div class="card wrap col-3" style="width: 18rem;" v-for="producto in productos" v-bind:key="producto">
    <img :src="producto.img" alt="img Producto" height="42" width="42">
        <h3>{{producto.nombre}}</h3>
        <p>{{producto.descripcion}}</p>
        <p>Precio: {{producto.precio}}€</p> 
        <button class="btn btn-outline-primary" v-on:click="eliminarp(producto)">Eliminar</button>  
    </div>
  </div>
    </section>
    
</template>
<script>
import {db} from '../db.js'
import firebase from "firebase"
export default {
    name: 'admin',
    props: [],
    data () {
      return {
        usuario:firebase.auth().currentUser,
        producto:"",
        prod:{
        descripcion:"",
        precio:"",
        img:"",
        categoria:"",
        nombre:"",
        },
        pedidos:[],
        productos:[],
      }
    },
    methods: {
        cargar:function(){
            if(this.prod.precio=="" || this.prod.categoria=="" || this.prod.nombre=="" || this.prod.descripcion=="" || this.prod.img==""){
                alert("Rellene todos los campos")
            }else{
              document.getElementById("precio").value="";
              document.getElementById("nombre").value="";
              document.getElementById("descrip").value="";
              document.getElementById("img").value="";
              db.collection("productos").add(this.prod);
            }
        },
        eliminar:function(pedido){
            var pedido1 = db.collection('pedidos').where('usuario','==',pedido.usuario);
            pedido1.get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                doc.ref.delete();
                });
            });
        } ,
        eliminarp:function(producto){
            var producto1 = db.collection('productos').where(firebase.firestore.FieldPath.documentId(),'==',producto.id);
            producto1.get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                doc.ref.delete();
                });
            });
        } 
      },
    mounted () {
        if(this.usuario.email=="mrivas@gmail.com"){
          alert("Bienvenido Admin");
        }else{
            alert("Necesitas credenciales de administrador");
            this.$router.replace('/privado');
        }
    },
    firestore() {
        return{
            pedidos:db.collection("pedidos"),
            productos:db.collection("productos"),
        }
    },
}    
</script>
<style scoped>
#card{
  border:1px solid black;
}
.card{
  margin:1rem;
}
.card>img{
  width:90%;
  height:100px;
  margin:auto;
}
</style>