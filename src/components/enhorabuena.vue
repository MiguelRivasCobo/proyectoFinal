<template>
  <div class="hello">
    <h1>Muchas gracias {{usuario.email}} por confiar en nosotros, tu pedido ha sido confirmado, recibira su pedido en 24/48 hrs</h1>
    <h2>Tus pedidos:</h2>
    <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300 row justify-content-center" no-body>
                    <div class="col-lg-3 bg-light m-2 justify-content-center" v-for="pedido in pedidos" v-bind:key="pedido.i">
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
import {db} from '../db.js';
import firebase from "firebase";
export default {
  name: 'enhorabuena',
  props: {
  },
  components:{
  },
  data () {
      return {
        usuario:firebase.auth().currentUser,
        pedidos:[],
      }
      
    },
    methods:{
  añadir:function(producto){
            if(this.usuario){
                this.carrito.producto=producto.id;
                this.carrito.precio=producto.precio;
                this.carrito.descripcion=producto.descripcion;
                this.carrito.img=producto.img;
                this.carrito.categoria=producto.categoria;
                this.carrito.usuario=this.usuario.email;
                db.collection("carrito").add(this.carrito);
            }else{
                this.$router.replace('/login');
            }
        }, 
  }, 
  firestore() {
    return{
      pedidos:db.collection("pedidos").where("usuario", "==",  this.usuario.email),
      }
    }
}
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