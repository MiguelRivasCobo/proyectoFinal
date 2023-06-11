<template>
<div id="about">
  <br>
<div class="about-section">
  <h1>Sobre Nosotros</h1>
  <p>Esta es una iniciativa que surge con el trabajo de fin de grado, y tiene como objetivo dar un toque de elegancia al mundo</p>
  <p>Si tienes alguna duda no dudes en contactar con nosotros</p>
</div>

<h2 style="text-align:center">Nuestro equipo</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy5dUrE2FPeUG1-r51_lVgGxjXRz8PBXm08g&usqp=CAU" alt="Jane" style="width:100%">
      <div class="container">
        <h2>África Cobo</h2>
        <p class="title">Abogada</p>
        <p>Encargada de gestionar temas legales</p>
        <p>africa@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfETUeedXPJNSm9DJG5-7YTho0eVz0ur-2A&usqp=CAU" alt="antonio" style="width:100%">
      <div class="container">
        <h2>Miguel Rivas Cobo</h2>
        <p class="title">Web Developer & CEO </p>
        <p>Desarrollador web, fundador y dueño</p>
        <p>mrivas@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1Ghpfq-s_6xEwFFuv8XnoaYhrV1qVjCczw&usqp=CAU" alt="Jane" style="width:100%">
      <div class="container">
        <h2>Adri Contreras</h2>
        <p class="title">Encargado de logistica</p>
        <p>Encargado de la paqueteria</p>
        <p>adri9873@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div></div>
</template>

<script>
export default {
  name: 'SobreNosotros',
  props: {
  }
}
</script>

<style scoped>

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #000000;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
.card>img{
  width: auto;
  height: 200px;
}

</style>