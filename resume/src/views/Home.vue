<template>
  <div>
    <canvas id="canvas"></canvas>
    <div class="container">
      <div class="section-one-info">
        <h1 class="animated fadeInDown">爱生活，爱前端</h1>

        <div class="section-one-text animated bounceInLeft">这里是 罗添翼 的个人简历</div>
        <p class="section-one-text animated bounceInLeft">欢迎您来到这里</p>
        <p class="section-one-text animated bounceInLeft">也让我们一起见证他的前端能力的成长把</p>
        <p class="section-one-text animated bounceInLeft">thanks</p>
      </div>
      <div class="square  square-init">
        <div class="side1 side">where</div>
        <div class="side2 side">going</div>
        <div class="side3 side">you</div>
        <div class="side4 side">are</div>
        <div class="side5 side"></div>
        <div class="side6 side"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  mounted() {
    require('../assets/js/index');
    $('.square').animate({paddingTop:'300px'},300);
  }
}
</script>
<style scoped>
  @import "../assets/css/index.css";
  .container{
    position:relative;
    left:50%;
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -ms-transform: translate(-50%);
    -o-transform: translate(-50%);
    transform: translate(-50%);
    max-width:1200px;
    width: 80%;

  }
  .section-one-info{
    padding-top:200px;
    text-align: center;
  }
  .section-one-text{
    text-align: center;
    width: 100%;
  }
  .square-init{
    padding-top:-100px;
  }
  .square-remove{
    padding-top:300px;
  }
  #name{
    display: inline-block;
    color:aqua;
  }
</style>
