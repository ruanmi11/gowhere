<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <recommend :list="recommendList"></recommend>
        <weekends :list="weekendList"></weekends>
    </div>
</template>

<script>
    import HomeHeader from './components/Header';
    import HomeSwiper from './components/Swiper.vue'
    import HomeIcons from './components/Icons.vue'
    import Recommend from './components/Recommend.vue'
    import Weekends from './components/Weekends.vue'
    import axios from 'axios'
    import {mapState} from 'vuex'

    export default {
        name:'Home',
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            Recommend,
            Weekends
        },
        data(){
            return{
                lastCity:'',
                swiperList:[],
                iconList:[],
                recommendList:[],
                weekendList:[]
            }
        },
        methods:{
            getHomeInfo(){
                axios.get('mock/index.json?city=' + this.city)
                .then((this.getHomeInfoSucc))
            },
            getHomeInfoSucc(res){
                res=res.data
                if(res.ret && res.data){
                    this.swiperList=res.data.swiperList
                    this.iconList=res.data.iconList
                    this.recommendList=res.data.recommendList
                    this.weekendList=res.data.weekendList
                }
                console.log(res)
            }
        },
        computed:{
            ...mapState(['city'])
        },
        mounted(){
            this.lastCity=this.city;
            this.getHomeInfo()
        },
        activated(){
            if(this.lastCity!==this.city){
                this.lastCity=this.city;
                this.getHomeInfo()
            }
        }
    }
</script>

<style lang="stylus" scoped>
    
</style>