<template>
    <div>
        <home-header ></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <recommend></recommend>
        <weekends></weekends>
    </div>
</template>

<script>
    import HomeHeader from './components/Header';
    import HomeSwiper from './components/Swiper.vue'
    import HomeIcons from './components/Icons.vue'
    import Recommend from './components/Recommend.vue'
    import Weekends from './components/Weekends.vue'

    export default {
        name:'Home',
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            Recommend,
            Weekends
        }
    }
</script>

<style lang="stylus" scoped>
    
</style>