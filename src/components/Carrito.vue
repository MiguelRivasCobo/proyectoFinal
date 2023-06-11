<template>
    <div class="carrito-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <h1 class="text-white">Mi carrito</h1>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="col-lg-12 bg-light m-2 border border-dark" v-for="carrit in carrito" v-bind:key="carrit.i">
                        <card class="border-0 " hover shadow body-classes="py-5">
                                    <div class="row">
                                    <div class="col-4">
                                    <img alt="Error al subir imagen" class="img-fluid  shadow m-auto" data-src="img/theme/team-2-800x800.jpg" 
                                    :src="carrit.img" lazy="loaded" style="height:150px;width:150px;" >
                                    </div>
                                    <div class="col-4">
                                    <br><br><h6 class="text-primary text-uppercase">{{carrit.descripcion}}</h6>
                                    <p class="description mt-3">Categoria: {{carrit.categoria}}</p>
                                    <p>Precio: {{carrit.precio}}€</p>
                                    </div>
                                    <div class="col-4"><br><br><br>
                                    <button type="submit" class="btn btn-primary" v-on:click="eliminar(carrit)">
                                        Eliminar del carrito
                                    </button>
                                    </div>
                                    </div>
                                </card>
                    </div>
                </card>
            </div>
        </section><br>
        <button class="btn btn-outline-primary" v-on:click="finalizar()">Finalizar Compra</button>
    </div>
</template>
<script>
import {db} from '../db.js'
import firebase from "firebase"
export default {
    name: "carrito",
    components: {},
    data () {
        return {
            usuario:firebase.auth().currentUser,
            carrito:[],
            pedido:{
                usuario:"",
                precio:"",
                productos:[]
            }
        }
    }, 
    methods:{
        eliminar:function(carrit){
            var producto = db.collection('carrito').where(firebase.firestore.FieldPath.documentId(),'==',carrit.id);
            producto.get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                doc.ref.delete();
                });
            });
        }, 
        finalizar:function(){
            if(this.carrito.length==0){
                alert("carrito vacio");
            }else{
            this.pedido.usuario=this.usuario.email;
            this.pedido.precio=10*this.carrito.length;
            for(var i=0;i<this.carrito.length;i++){
                this.pedido.productos.push(this.carrito[i].producto);
            }
            db.collection("pedidos").add(this.pedido);
            var carrito = db.collection('carrito').where('usuario','==',this.usuario.email);
            carrito.get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                doc.ref.delete();
                });
            });
            this.$router.replace('/success');
            }
        }
    },
    firestore() {
        return{
            carrito:db.collection("carrito").where("usuario", "==", this.usuario.email)
        }
    }
};
</script>
<style>
</style>