<template>
    <div>

    </div>
</template>

<script>
    import avatar1 from '@/assets/img/1.jpg';
    import avatar2 from '@/assets/img/2.jpg';
    import avatar3 from '@/assets/lib/vegas/overlays/03.png';
    export default {
        name: "pc.vue",
        mounted(){
            require('../assets/lib/vegas/jquery.vegas.min');
            $(function () {
                $.vegas('slideshow', {
                    backgrounds: [
                        { src: avatar1, fade: 1000, delay: 9000 },
                        { src: avatar2, fade: 1000, delay: 9000 },
                    ]
                })('overlay', {
                    src: avatar3
                });
            });
        }
    }
</script>

<style scoped>
@import '../assets/lib/vegas/jquery.vegas.min.css';
</style>