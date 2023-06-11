<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<template>
  <div id="demo" class="carousel slide" data-ride="carousel">

  <!-- Indicators -->
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
    <li data-target="#demo" data-slide-to="3"></li>
    <li data-target="#demo" data-slide-to="4"></li>
  </ul>

  <!-- The slideshow -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../imagenes/5.jpg" alt="Los Angeles">
    </div>
    <div class="carousel-item">
      <img src="../imagenes/2.jpg" alt="Chicago">
    </div>
    <div class="carousel-item">
      <img src="../imagenes/3.jpg" alt="New York">
    </div>
    <div class="carousel-item">
      <img src="../imagenes/4.jpg" alt="New York">
    </div>
    <div class="carousel-item">
      <img src="../imagenes/6.jpg" alt="New York">
    </div>
  </div>

  <!-- Left and right controls -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>

</div>
</template>

<script>
export default {
  name: 'Home',
  props: {
  }
}
</script>

<style scoped>
img{
  width: 90%;
  height: 300px;
}
</style>