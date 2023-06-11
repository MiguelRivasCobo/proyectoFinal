import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Productos from './components/Productos.vue'
import SobreNosotros from './components/SobreNosotros.vue'
import Upload from './components/Upload.vue'
import Carrito from './components/Carrito.vue'
import Login from './components/Login.vue'
import Privado from './components/Privado.vue'
import Registro from './components/Registro.vue'
import Enhorabuena from './components/enhorabuena.vue'
import Admin from './components/admin.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'

Vue.use(VueRouter)
Vue.use(firestorePlugin)
Vue.use(firebase)

const router = new VueRouter({
  routes: [
    {path:'/home',component:Home},
    {path:'/productos/:msg', name:Productos, component:Productos, props: true},
    {path:'/sobrenosotros',component:SobreNosotros},
    {path:'/upload',component:Upload},
    {path:'/login',component:Login},
    {path:'/privado',component:Privado,meta:{requiresAuth:true}},
    {path:'/registro',component:Registro},
    {path:'/carrito',component:Carrito,meta:{requiresAuth:true}},
    {path:'/admin',component:Admin,meta:{requiresAuth:true}},
    {path:'/success',component:Enhorabuena},
    {path:'/*',component:Home},
  ]
})
router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('/login')
  else next()
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
