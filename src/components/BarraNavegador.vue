<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><router-link to="/home">
  <img id="logo" src="../assets/logo.jpg" alt="logo">
  </router-link></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <h3>Camishop</h3>
    <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          CATEGORIAS
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href=""><router-link to="/productos/Camisas">Camisas</router-link></a>
          <a class="dropdown-item" href="#"><router-link to="/productos/Camisetas">Camisetas</router-link></a>
          <a class="dropdown-item" href="#"><router-link to="/productos/Pantalones">Pantalones</router-link></a>
          <a class="dropdown-item" href="#"><router-link to="/productos/Sudaderas">Sudaderas</router-link></a>
          <a class="dropdown-item" href="#"><router-link to="/productos/Calcetines">Calcetines</router-link></a>
          <a class="dropdown-item" href="#"><router-link to="/productos/Gorras">Gorras</router-link></a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#"><router-link to="/home">Todos</router-link></a>
        </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/upload">SUBE TU DISEÑO</router-link></a>
        </li>
        
        <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/sobrenosotros">SOBRE NOSOTROS</router-link></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/privado">MI PERFIL</router-link></a>
        </li>
    </ul>
    
  </div>
  <ul class="navbar-nav">
    <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/login">ACCEDER</router-link></a>
    </li>
    </ul>
    <ul class="navbar-nav">
    <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/carrito">CARRITO</router-link></a>
    </li>
    </ul>
</nav>

</template>
<script>
export default {
name: 'BarraNavegador',
data () {
    return {
    }
  }
}
/*<form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>*/
</script>
<style scoped>

#logo{
  height:40px;
  width:40px;
}
</style>
