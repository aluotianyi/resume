<template>
    <div>
        <canvas id="canvas"></canvas>
        <div class="container">
            <div class="section-one-info">
                <h1 class="animated fadeInDown">爱生活，爱前端</h1>
                <div class="section-one-text animated bounceInLeft">这里是罗添翼的个人简历</div>
                <p class="section-one-text animated bounceInLeft">欢迎您来到这里</p>
                <p class="section-one-text animated bounceInLeft">也让我们一起见证他的个人能力吧</p>
                <p class="section-one-text animated bounceInLeft">thanks</p>
            </div>
            <div class="square  square-init" @click="gotoresume">
                <div class="side1 side">click me</div>
                <div class="side2 side">click me</div>
                <div class="side3 side">click me</div>
                <div class="side4 side">click me</div>
                <div class="side5 side">click me</div>
                <div class="side6 side">click me</div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import redirect from '../assets/js/common';
    export default {
        name: 'home',
        mounted() {
            require('../assets/js/index');
            $('.square').animate({paddingTop: '3rem'}, 300);
        },
        methods: {
            gotoresume:function () {
                var userAgent=redirect();
                if(userAgent=='pc'){
                    this.$router.push({path:'/pc'})
                }else{
                    this.$router.push({path:'/mobile'})
                }
            }
        }
    }
</script>
<style scoped>
    @import "../assets/css/index.css";

    .container {
        position: relative;
        left: 50%;
        -webkit-transform: translate(-50%);
        -moz-transform: translate(-50%);
        -ms-transform: translate(-50%);
        -o-transform: translate(-50%);
        transform: translate(-50%);
        max-width: 1200px;
        width: 80%;

    }

    .section-one-info {
        padding-top: 2rem;
        text-align: center;
    }

    .section-one-text {
        text-align: center;
        width: 100%;
    }

    .square-init {
        padding-top: -1rem;
    }
    #name {
        display: inline-block;
        color: aqua;
    }
</style>
