<template>
    <router-view></router-view>
</template>
<script>
    import redirect from './assets/js/common';
    export default {
        mounted() {
            redirect();
        }
    }
</script>
<style scoped>
    #app{
        height: 100%;
    }
    .page-container {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
</style>
