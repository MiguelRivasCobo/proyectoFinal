<template>
  <div class="hello justify-content-center">
    <h1>Mis Datos:</h1>
    <div class="card wrap" style="width: 90%;" v-for="usr in usuario1" v-bind:key="usr">
        <br><p>Nombre y Apellidos: {{usr.nombre}} {{usr.apellidos}}</p>
        <p>Direccion: {{usr.direccion}} {{usr.poblacion}}<br>
        Ciudad:  {{usr.ciudad}} <br> Codigo Postal: {{usr.codPost}}</p>
        <p>DNI: {{usr.dni}} </p>
        <p>Telefono: {{usr.telefono}}</p>   
        <p>E-mail: {{usr.email}}</p>
        <button class="btn btn-outline-primary" v-on:click="signOut">Cerrar Sesión</button>
    </div>
    <h1>Mis Pedidos:</h1>
    <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300 row justify-content-center" no-body>
                    <div class="col-lg-3 bg-light m-2 justify-content-center border border-dark" v-for="pedido in pedidos" v-bind:key="pedido.i">
                        <card class="border-0 " hover shadow body-classes="py-5">
                                    <div class="row">
                                    
                                    <div class="col-4">
                                    <br><br><p class="text-primary text-uppercase">Productos:{{pedido.productos}}</p>
                                    <p>Precio: {{pedido.precio}}€</p>
                                    </div>
                                    <div class="col-4"><br><br><br>
                                    </div>
                                    </div>
                                </card>
                    </div>
                </card>
            </div>
        </section><br>
  </div>
</template>

<script>
import {db} from '../db.js'
import firebase from 'firebase'
export default {
  name: 'Privado',
  props: {
  },
  data () {
      return {
        usuario:firebase.auth().currentUser,
        usuario1:[],
        pedidos:[],
      }
    },
  methods: {
        signOut:function(){
            firebase.auth().signOut().then(()=> {
                this.$router.replace('/login');
            }).catch(function(error) {
            alert(error)
            });
        }
    },
  firestore() {
    return {
      usuario1:db.collection("usuarios").where("email", "==",this.usuario.email ),
      pedidos:db.collection("pedidos").where("usuario", "==",  this.usuario.email),
      }
    },
}
</script>

<style scoped>
.card{
  margin:auto;
}
</style>